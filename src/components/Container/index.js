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

    getEmployees() {
        API.search()
            .then(res => {
                this.setState({ result: res.data })
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Header />
                <Search />
                <Table result={this.state.result} />
            </div>
        )
    }
}

export default Container;
