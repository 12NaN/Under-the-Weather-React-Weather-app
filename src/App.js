import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import Footer from './components/Footer';
const API_KEY = "0ad75f1429c19e2d978d2eff945ce2d3";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);

    const responseData = await response.json();
    
    console.log(responseData);
    this.setState({
      temperature: responseData.main.temp,
      city: responseData.name,
      country: responseData.sys.country,
      humidity: responseData.main.humidity,
      description: responseData.weather[0].description,
      error: ""
    });
}

  render() {
    return (
      <div>
        <Navigation/>
        <Titles/>
        <Form getWeather={this.getWeather}/>
        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
          />
        <Footer/>
      </div>
    );
  }
};
export default App;