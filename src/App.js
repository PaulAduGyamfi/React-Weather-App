import React, {Component} from 'react'
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'
import './App.css'


const API_KEY = "6c2635ead387fa8bd7f564afdb622b97"


class App extends Component{

  state = {
      temperature: undefined,
      feels_like: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`)

    const data =  await api_call.json()

    if(city && country){
        console.log(data)

        this.setState({
            temperature: Math.round(((Number(data.main.temp) - 273.15) * (9/5)) + 32),
            feels_like: Math.round(((Number(data.main.feels_like) - 273.15) * (9/5)) + 32),
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ''
        })
    }else{
        this.setState({
          temperature: undefined,
          feels_like: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: 'Please enter a city and a country!'
      })
    }
  }

  render(){
    return(
      <div className="wrap">
        <Titles />

        <Form getWeather={this.getWeather}/>

        <Weather 
          temperature={this.state.temperature}
          feels_like={this.state.feels_like}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
          />

      </div>
    );
  }
}


export default App