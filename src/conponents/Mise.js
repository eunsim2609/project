import React, { Component } from 'react';

class MiseInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mise: []
        }
    }
    componentWillMount() {
        fetch("https://covid-193.p.rapidapi.com/{endpoint}", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "XxXxXxXxXxXxXxXxXxXxXxXx"
            }
        })
            .then((response) => {
                response.json()
            })
            .then((json) => {
                this.setState({
                    mise: json
                })
            });


    }
    render() {
        const miseList = this.state.mise.response.map((contry) =>
            <div>
                {contry}
            </div>
        )
        return (
            <div>
                {miseList}
            </div>
        );
    }
}