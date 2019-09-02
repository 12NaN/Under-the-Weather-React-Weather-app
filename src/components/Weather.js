import React, { Component } from 'react';

class Weather extends Component {
    render() {
        return (
            <div>
                <br/>
                { this.props.city && this.props.country && <p>Location: {this.props.city }, {this.props.country}</p>}
                { this.props.temperature && <p>Temperature: <br/> Fahrenheit: {((this.props.temperature- 273.15)* 9/5 + 32).toFixed(2)} <br/> Celsius: {((this.props.temperature- 273.15)).toFixed(2)}</p>}
                { this.props.humidity && <p> Humidity: { this.props.humidity } </p>}
                { this.props.description && <p> Conditions: { this.props.description}</p>}
            </div>
        );
    }
};

export default Weather;