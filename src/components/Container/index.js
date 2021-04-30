import { Component } from "react";
import API from "../../util/API";
import Sort from "../../util/Sort"
import Header from "../Header";
import Search from "../Search";
import Table from "../Table";


class Container extends Component {
    state = {
        staticResults: [],
        visibleResults: [],
        search: "",
        nameSort: "0",
        emailSort: "0",
        phoneSort: "0",
        dobSort: "0",
    };

    // When this component mounts, fetch random employees
    componentDidMount() {
        this.getEmployees();
    }

    // Call random employees API and set the states with the results
    getEmployees() {
        API.search()
            .then(res => {
                this.setState(
                    {
                        staticResults: [...res.data.results],
                        visibleResults: [...res.data.results]
                    }
                )

            })
            .catch(err => console.log(err));
    };

    // Handle Table header clicking to sort
    handleTableHeaderClick = async event => {
        event.preventDefault();
        
        // Send data over to Sort.js for sorting
        const aSorted = await Sort.sortTable(event.target.innerHTML, [...this.state.visibleResults], event.target.getAttribute("data-sortid"));

        // Set sort to asc(1) or desc(-1) depending on what it was before and send it over to the element that was clicked
        let sort = event.target.getAttribute("data-sortid");
        if (sort === "0" || sort === "-1") {
            sort = "1"
        } else {
            sort = "-1"
        }

        // build the property name string based on element clicked
        const sSortName = event.target.innerHTML.toLowerCase() + "Sort";

        // If array is defined, then update the state with the sorted array and sortID
        if (aSorted) {
            this.setState(
                {
                    visibleResults: [...aSorted],
                    [sSortName]: sort
                })
        }
    };

    handleInputChange = event => {
        // Update state with user input to render page dynamically
        this.setState({ search: event.target.value });

        // Assign value to a variable for easier use
        let regex = event.target.value

        // Filter the spread of static data based off user input, matching multiple properties
        let filteredResults = ([...this.state.staticResults].filter(function (element) {
            return (element.name.first + " " + element.name.last).match(new RegExp(regex, 'gi'))
                || element.phone.match(new RegExp(regex, 'gi'))
                || element.email.match(new RegExp(regex, 'gi'))
            })
        );

        // Update visibleResults state if an array is returned
        if (filteredResults) {
            this.setState(
                {
                    visibleResults: filteredResults
                }
            )
        }
    };

    // Render Component
    render() {
        return (
            <div>
                <Header />
                <Search
                    handleInputChange={this.handleInputChange} />
                <Table
                    results={this.state.visibleResults}
                    handleTableHeaderClick={this.handleTableHeaderClick}
                    nameSort={this.state.nameSort}
                    emailSort={this.state.emailSort}
                    phoneSort={this.state.phoneSort}
                    dobSort={this.state.dobSort}
                />
            </div>
        )
    }
}

export default Container;
