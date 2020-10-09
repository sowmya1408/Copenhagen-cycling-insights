import React from "react";
import { Link } from "react-router-dom";
import "./HomeComponent.style.css";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";

const HomeComponent = () => {
  return (
    <Container className="home-wrapper">
      <h1 className="home-headings">
        Insights on Copenhagen Cycling
        <span>
          <DirectionsBikeIcon />
          <DirectionsBikeIcon />
          <DirectionsBikeIcon />
          ...
        </span>
      </h1>
      <p className="home-info">
        Cycling in Copenhagen carries one of the vital elements in relation to
        create the sustainable development.Cycling has an enormous positive
        impact on general public.
      </p>
      <h2 className="home-headings">
        Get Inspired and Explore Cycle routes using this app
      </h2>
      <ul className="home-info">
        <li>
          Step1: Click on start button to view cycling routes in Copenhagen
        </li>
        <li>
          Step2: Click on any location on the map to view airtemperature,
          humidity, wind speed charts.
        </li>
        <li>
          Tip1
          <EmojiObjectsIcon className="tip-icon" />
          On charts page, the brush can be moved to adjust dates and see data.
        </li>
        <li>
          Tip2
          <EmojiObjectsIcon className="tip-icon" />
          You can choose to use Navigation on top.
        </li>
      </ul>
      <Button variant="contained" color="primary">
        <Link to="/cycle-map" className="home-button">
          Start
        </Link>
      </Button>
    </Container>
  );
};

export default HomeComponent;
