import React, { Component } from "react";
import API from "../../util/API";
import Heading from "../Heading"

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
            <Heading
                result={this.state.result}
            />
        )
    }
}

export default Container;
