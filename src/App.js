import React,{Component} from 'react'
import Weather from './components/weather';
import Titles from './components/titles';
import Form from './components/form';
import { async } from 'q';

class App extends Component{

  getWeather = async() => {

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=${c589ab9e31cfa001e4060c76a167aa75}`);
    const response = await api_call.json();
    console.log(response)
    
  }


  render(){
    return(
      <div>
        <Titles />
        <Form/>
        <Weather/>
      </div>
    );
  }
}

export default App;