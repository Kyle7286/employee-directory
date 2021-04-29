import React, { Component } from "react";
import API from "../../util/API";
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

    // Call random employees API
    getEmployees() {
        API.search()
            .then(res => {
                this.setState({ result: res.data })
            })
            .catch(err => console.log(err));
    };

    handleTableHeaderClick = event => {
        event.preventDefault();
        console.log("Herro!");
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
