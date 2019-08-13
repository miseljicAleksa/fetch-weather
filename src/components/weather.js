import React from 'react';

const Weather = (props) => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=${c589ab9e31cfa001e4060c76a167aa75}`);

    return(
        <div>
            {/* neshyyyyyyyyyyyy */}
        </div>
    )
}

export default Weather;