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
        sortID: {
            name: "0",
            email: "0",
            phone: "0",
            dob: "0",
        }
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
        const aSorted = Sort.sortTable(event.target.innerHTML, this.state.result.results, event.target.getAttribute("data-sortid"))
        // If array is defined, then update the state
        if (aSorted) {
            this.setState(
                {
                    result: {
                        results: aSorted
                    }
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
                    sortID={this.state.sortID}
                />
            </div>
        )
    }
}

export default Container;
