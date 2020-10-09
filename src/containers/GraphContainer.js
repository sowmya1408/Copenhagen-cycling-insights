import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

const GraphContainer = () => {
    const {latSlug, longSlug} = useParams();
    console.log(latSlug);
    console.log(longSlug);
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const getWeatherData = async () => {
            try {
                const weatherDataBasedOnCoordinates = await fetch(`https://api.met.no/weatherapi/locationforecast/2.0/complete?altitude=0&lat=${latSlug}&lon=${longSlug}`)
              const weatherDataInJSON = await weatherDataBasedOnCoordinates.json();
              setWeatherData(weatherDataInJSON);
            } catch (err) {
              return `Error: ${err}`
            }
          };
          getWeatherData();
    }, [latSlug,longSlug ])

    console.log(weatherData);
    return (
        <div>
            Hello
        </div>
    )
}

export default GraphContainer
