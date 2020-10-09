import React from "react";
import "./ChartComponent.style.css";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Brush,
  Line,
  CartesianGrid,
  Legend,
} from "recharts";

const GraphComponent = ({ data, type, unit }) => {
  const formatXAxis = () =>
    data.map((data) => {
      const [year, month, datetime] = data.time.slice(0, 13).split("-");
      const [date, time] = datetime.split("T");
      const datetimeTag = `${date}/${month}/${year} ${time}:00`;
      return datetimeTag;
    });
  return (
    <Container className="graph-container">
      <Typography variant="h4" className="chart-headings">
        {type.toUpperCase()}
      </Typography>
      <ResponsiveContainer
        className="weather-chart-container"
        width="80%"
        height={380}
      >
        <LineChart data={data} margin={{ right: 80 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            stroke="#111314"
            dataKey={formatXAxis}
            name="time"
            height={50}
            domain={["dataMin", "dataMax"]}
            tick={{
              fontFamily: "Segoe UI",
              textAlign: "right",
              fontSize: 15,
              fill: "#1a54b1",
            }}
          />
          <YAxis
            stroke="#111314"
            type="number"
            dataKey={type}
            tick={{
              transform: "translate(-20, 0)",
              fontFamily: "Segoe UI",
              fontSize: 15,
              fill: "#1a54b1",
            }}
            fill="none"
          />

          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            name={type}
            unit={unit}
            dataKey={type}
            stroke="#426fb6"
            fill="#000000"
            strokeWidth={2}
          />
          <Brush
            className="range-bar"
            startIndex={0}
            stroke="#73ABD7"
            x={data.length}
            height={30}
            travellerWidth={15}
            gap={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default GraphComponent;
