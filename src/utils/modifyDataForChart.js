export const modifyDataForChart = (data) => {
  const descriptionKeys = Object.keys(data.meta.units);
  const description = getDescriptionData(descriptionKeys);
  const units = getUnitsData(data.meta.units);
  const weatherChartData = getWeatherConditionData(data, description);
  return {
    description,
    units,
    weatherChartData
  };
};

const getDescriptionData = (keys) => {
  const description = {
    air_temperature: keys[1],
    relative_humidity: keys[15],
    wind_speed: keys[18],
  };
  return description;
};

const getUnitsData = (unit) => {
  const units = {
    air_temperature: unit.air_temperature,
    relative_humidity: unit.relative_humidity,
    wind_speed: unit.wind_speed,
  };
  return units;
};

const getWeatherConditionData = (data, description) => {
    let weatherData = [];
        for(const item in description){
            const mappingData = data.timeseries.map(data => {
                return {
                    time: data.time,
                    [item]: data.data.instant.details[item]
                }
            })
            weatherData.push(mappingData);
        }
return weatherData;
};
