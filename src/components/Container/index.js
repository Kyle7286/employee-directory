import React, { Component } from "react";
import API from "../../util/API";
import Sort from "../../util/Sort"
import Header from "../Header";
import Search from "../Search";
import Table from "../Table";


class Container extends Component {
    state = {
        result: { results: [] },
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
                this.setState({ result: res.data })
            })
            .catch(err => console.log(err));
    };

    // Handle Table header clicking to sort
    handleTableHeaderClick = event => {
        event.preventDefault();
        const aSorted = Sort.sortTable(event.target.innerHTML, this.state.result.results, event.target.getAttribute("data-sortid"));
        const sSortName = event.target.innerHTML.toLowerCase()+"Sort";
        console.log(`After Sorting...`);
        console.log(aSorted);
        
        // Set sort to asc(1) or desc(-1)
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
                        results: aSorted
                    },
                    [sSortName]: sort
                })
        }

        
    };

    // Render Component
    render() {
        return (
            <div>
                <Header />
                <Search />
                <Table
                    result={this.state.result}
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
