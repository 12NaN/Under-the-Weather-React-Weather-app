import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="city..." required/>
                <input type="text" name="country" placeholder="country..." required/>
                <br/>
                <br/>
                <button>Get Weather</button>
            </form>
        );
    }
};

export default Form;