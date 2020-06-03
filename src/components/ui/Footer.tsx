import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";

import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

interface Props {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    backgroundColor: theme.palette.common["blue"],
    width: "100%",
    zIndex: 1304,
    position: "relative"
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em"
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em"
    }
  },
  mainContainer: {
    position: "absolute"
  },
  link: {
    color: "white",
    fontFamily: "Ariel",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none"
  },
  gridItem: {
    margin: "3em"
  },
  icon: {
    height: "3em",
    width: "3em",
    [theme.breakpoints.down("sm")]: {
      height: "1.5em",
      width: "1.5em"
    }
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-3.5em",
    right: "1.5em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-2em",
      right: "0.6em"
    }
  },
  socialContainerItem: {
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "1em"
    }
  }
}));

const Footer: React.FC<Props> = props => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden smDown>
        <Grid
          container
          justify="center"
          className={classes.mainContainer}
          spacing={2}
        >
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                component={Link}
                to="/"
                onClick={() => {
                  props.setValue(0);
                  props.setSelectedIndex(0);
                }}
                item
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                component={Link}
                to="/services"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
                item
                className={classes.link}
              >
                Services
              </Grid>
              <Grid
                component={Link}
                to="/custom-software"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
                item
                className={classes.link}
              >
                Custom Software Development
              </Grid>
              <Grid
                component={Link}
                to="/mobile-apps"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
                item
                className={classes.link}
              >
                Mobile App Development
              </Grid>
              <Grid
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
                to="/websites"
                item
                className={classes.link}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                component={Link}
                to="/revolution"
                onClick={() => {
                  props.setValue(2);
                  props.setSelectedIndex(0);
                }}
                item
                className={classes.link}
              >
                The Revolution
              </Grid>
              <Grid
                component={Link}
                to="/revolution"
                onClick={() => {
                  props.setValue(2);
                  props.setSelectedIndex(0);
                }}
                item
                className={classes.link}
              >
                Vision
              </Grid>
              <Grid
                component={Link}
                to="/revolution"
                onClick={() => {
                  props.setValue(2);
                  props.setSelectedIndex(0);
                }}
                item
                className={classes.link}
              >
                Technology
              </Grid>
              <Grid
                component={Link}
                to="/revolution"
                onClick={() => {
                  props.setValue(2);
                  props.setSelectedIndex(0);
                }}
                item
                className={classes.link}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                component={Link}
                onClick={() => {
                  props.setValue(3);
                  props.setSelectedIndex(0);
                }}
                to="/about"
                item
                className={classes.link}
              >
                About Us
              </Grid>
              <Grid
                component={Link}
                onClick={() => {
                  props.setValue(3);
                  props.setSelectedIndex(0);
                }}
                to="/about"
                item
                className={classes.link}
              >
                History
              </Grid>
              <Grid
                component={Link}
                onClick={() => {
                  props.setValue(3);
                  props.setSelectedIndex(0);
                }}
                to="/about"
                item
                className={classes.link}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                component={Link}
                onClick={() => {
                  props.setValue(4);
                  props.setSelectedIndex(0);
                }}
                to="/contact"
                item
                className={classes.link}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        alt="black decorative slash"
        src={footerAdornment}
        className={classes.adornment}
      />
      <Grid container justify="flex-end" className={classes.socialContainer}>
        <Grid
          item
          component={"a"}
          href="http://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
          className={classes.socialContainerItem}
        >
          <img alt="facebook" src={facebook} className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
          className={classes.socialContainerItem}
        >
          <img alt="instagram" src={instagram} className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
          className={classes.socialContainerItem}
        >
          <img alt="twitter" src={twitter} className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
