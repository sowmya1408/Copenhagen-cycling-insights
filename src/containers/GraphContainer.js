import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GraphComponent from "../components/GraphComponent/GraphComponent";
import { modifyDataForChart } from "../utils/modifyDataForChart";

const GraphContainer = () => {
  const { latSlug, longSlug } = useParams();
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const weatherDataBasedOnCoordinates = await fetch(
          `https://api.met.no/weatherapi/locationforecast/2.0/complete?altitude=0&lat=${latSlug}&lon=${longSlug}`
        );
        const weatherDataInJSON = await weatherDataBasedOnCoordinates.json();
        loadData(weatherDataInJSON.properties);
      } catch (err) {
        return `Error: ${err}`;
      }
    };
    getWeatherData();
  }, [latSlug, longSlug]);
  console.log(chartData);

  const loadData = (data) => {
    setChartData(modifyDataForChart(data));
  };
  return (
    <div>
      {chartData && (
        <>
          <GraphComponent
            data={chartData.weatherChartData[0]}
            type={chartData.description.air_temperature}
            unit={chartData.units.air_temperature}
          />
          <GraphComponent
            data={chartData.weatherChartData[1]}
            type={chartData.description.relative_humidity}
            unit={chartData.units.relative_humidity}
          />
          <GraphComponent
            data={chartData.weatherChartData[2]}
            type={chartData.description.wind_speed}
            unit={chartData.units.wind_speed}
          />
        </>
      )}
    </div>
  );
};

export default GraphContainer;
