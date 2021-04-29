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

    // When this component mounts, search for the movie "The Matrix"
    componentDidMount() {
        this.searchMovies();
    }

    searchMovies() {
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
