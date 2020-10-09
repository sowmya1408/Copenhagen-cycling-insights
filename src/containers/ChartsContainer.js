import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ChartComponent from '../components/ChartComponent/ChartComponent';
import {modifyDataForChart} from '../utils/modifyDataForChart';

const ChartsContainer = () => {
    const {latSlug, longSlug} = useParams();
    const [chartData, setChartData] = useState(null)

    useEffect(() => {
        const getWeatherData = async () => {
            try {
                const weatherDataBasedOnCoordinates = await fetch(`https://api.met.no/weatherapi/locationforecast/2.0/complete?altitude=0&lat=${latSlug}&lon=${longSlug}`)
                const weatherDataInJSON = await weatherDataBasedOnCoordinates.json();
                loadData(weatherDataInJSON.properties);
            } catch (err) {
              return `Error: ${err}`
            }
          };
          getWeatherData();
    }, [latSlug,longSlug ])
    const loadData = data => {
        setChartData(modifyDataForChart(data))
        
      };
    return (
        <div>{
            chartData &&
            <>
            <ChartComponent data={chartData.weatherChartData[0]} type={chartData.description.air_temperature} unit={chartData.units.air_temperature}/>
             <ChartComponent data={chartData.weatherChartData[1]} type={chartData.description.relative_humidity} unit={chartData.units.relative_humidity}/>
            <ChartComponent data={chartData.weatherChartData[2]} type={chartData.description.wind_speed} unit={chartData.units.wind_speed}/> 
            </>
            }
            
     </div>
    )
}

export default ChartsContainer
