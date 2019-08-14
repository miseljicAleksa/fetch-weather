import React from 'react';


const Form = (props) => {
    return(
        <form onSubmit = {props.loadWeather}>
            <input type="text" name="city" placeholder="City" />
            <input type="text" name="conutry" placeholder="Country"/>
            <button>Get weather</button>
        </form>
    )
}

export default Form;