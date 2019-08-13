import React,{Component} from 'react'
import Weather from './components/weather';
import Titles from './components/titles';
import Form from './components/form';
import { async } from 'q';

class App extends Component{

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