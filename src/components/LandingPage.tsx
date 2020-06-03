import React from "react";
import Lottie from "react-lottie";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ui/ButtonArrow";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import animationData from "../animations/landinganimation/data";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";

interface Props {}

const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    marginBottom: "10em"
  },
  animation: {
    minWidth: "21em",
    maxWidth: "50em",
    marginTop: "5em",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em"
    }
  },
  estimateButton: {
    ...theme.typography["estimateButton"],
    backgroundColor: theme.palette.common["orange"],
    borderRadius: 50,
    height: 45,
    width: 145,
    marginTop: "1em",
    marginRight: "1em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 0
    }
  },
  buttonContainer: {
    marginTop: "1em",

    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-around"
    }
  },
  learnButtonHero: {
    ...theme.typography["learnButton"],
    height: 45,
    width: 145,
    fontSize: "0.9rem"
  },
  specialEffects: {
    fontFamily: "Pacifico",
    color: theme.palette.common["orange"]
  },
  learnButton: {
    ...theme.typography["learnButton"],
    fontSize: "0.7rem",
    height: 35,
    padding: 5
  },
  subtitle: {
    marginBottom: "1em"
  },
  icon: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "2em"
    }
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: "1.5em"
    }
  },
  textItem: {
    marginLeft: "5em",
    marginRight: "5em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
      textAlign: "center"
    }
  }
}));

const LandingPage: React.FC<Props> = props => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      {/*-----Hero Block-----*/}
      <Grid item>
        <Grid container justify="center" alignItems="center" direction="row">
          <Grid sm item>
            <Typography variant="h2" align="center">
              Bringing WestCoast Technology <br /> to the Mid West
            </Typography>
            <Grid container className={classes.buttonContainer}>
              <Grid item>
                <Button className={classes.estimateButton} variant="contained">
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button className={classes.learnButtonHero} variant="outlined">
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common["blue"]}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item>
            <Grid container justify="center" className={classes.animation}>
              <Lottie options={defaultOptions} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/*-----Services Block-----*/}
      <Grid item>
        <Grid
          container
          direction={matches ? "column" : "row"}
          className={classes.serviceContainer}
          justify={matches ? "center" : undefined}
          alignItems={matches ? "center" : undefined}
        >
          <Grid item className={classes.textItem}>
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to
              <span className={classes.specialEffects}> celebration</span>
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common["blue"]}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              alt="custom software icon"
              src={customSoftwareIcon}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
