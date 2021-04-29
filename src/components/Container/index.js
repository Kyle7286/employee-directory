import React, { Component } from "react";
import API from "../../util/API";
import Sort from "../../util/Sort"
import Header from "../Header";
import Search from "../Search";
import Table from "../Table";


class Container extends Component {
    state = {
        result: { results: [] },
        filtered: { results: [] },
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

    // Call random employees API
    getEmployees() {
        API.search()
            .then(res => {
                this.setState({ result: res.data, filtered: res.data })
            })
            .catch(err => console.log(err));
    };

    // Handle Table header clicking to sort
    handleTableHeaderClick = event => {
        event.preventDefault();
        // Send data over to Sort.js for sorting
        const aSorted = Sort.sortTable(event.target.innerHTML, this.state.filtered.results, event.target.getAttribute("data-sortid"));

        // build the property name string based on element clicked
        const sSortName = event.target.innerHTML.toLowerCase() + "Sort";

        // Set sort to asc(1) or desc(-1) depending on what it was before
        let sort = event.target.getAttribute("data-sortid");
        if (sort === "0" || sort === "-1") {
            sort = "1"
        } else {
            sort = "-1"
        }

        // If array is defined, then update the state with the sorted array and sortID
        if (aSorted) {
            this.setState(
                {
                    result: {
                        filtered: aSorted
                    },
                    [sSortName]: sort
                })
        }
    };


    handleInputChange = event => {
        this.setState({ search: event.target.value });

        let regex = event.target.value
        let newArray = [...this.state.result.results]

        let x = (newArray.filter(function (element) {
            return element.name.first.match(new RegExp(regex, 'gi')) || element.name.last.match(new RegExp(regex, 'gi')) || element.phone.match(new RegExp(regex, 'gi')) || element.email.match(new RegExp(regex, 'gi'))
        })
        );

        if (x) {
            this.setState(
                {
                    filtered: {
                        results: x
                    }

                })
        }

        console.log(x);
    };

    // Render Component
    render() {
        return (
            <div>
                <Header />
                <Search
                    handleInputChange={this.handleInputChange} />
                <Table
                    result={this.state.filtered}
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
