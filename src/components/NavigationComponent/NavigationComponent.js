import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import MapIcon from '@material-ui/icons/Map';

const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

const NavigationComponent = () => {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" className={classes.link}>
        <HomeIcon fontSize="large" color="primary" />
      </Link>
      <Link color="inherit" href="/cycle-map" className={classes.link}>
        <MapIcon fontSize="large" color="primary" />
      </Link>
    </Breadcrumbs>
  );
};
export default NavigationComponent;
