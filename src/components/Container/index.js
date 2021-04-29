import React, { Component } from "react";
import API from "../../util/API";
import sort from "../../util/sort"
import Header from "../Header";
import Search from "../Search";
import Table from "../Table";


class Container extends Component {
    state = {
        result: { results: [] },
        search: "",
    };

    // When this component mounts, fetch random employees
    componentDidMount() {
        this.getEmployees();
    }

    sort(col) {
        let x = 
        this.setState(
            {
                result: { results: sort.sort(col, this.state.result.results) }
            })
    }

    // Call random employees API
    getEmployees() {
        API.search()
            .then(res => {
                this.setState({ result: res.data })
            })
            .catch(err => console.log(err));
    };


    // Handle Table header clicking
    handleTableHeaderClick = event => {
        event.preventDefault();
        this.sort(event.target.innerHTML)
    };

    render() {
        return (
            <div>
                <Header />
                <Search />
                <Table
                    result={this.state.result}
                    handleTableHeaderClick={this.handleTableHeaderClick}
                />
            </div>
        )
    }
}

export default Container;
