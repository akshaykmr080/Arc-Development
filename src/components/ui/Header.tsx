import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import classnames from "classnames";

import logo from "../../assets/logo.svg";

interface Props {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

interface ElevationScrollProps {
  children: any;
}

function ElevationScroll(props: ElevationScrollProps) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    zIndex: theme.zIndex.modal + 1
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    height: "7rem",
    [theme.breakpoints.down("md")]: {
      height: "5rem"
    },
    [theme.breakpoints.down("xs")]: {
      height: "4rem"
    }
  },
  logo: {
    height: "7rem",
    [theme.breakpoints.down("md")]: {
      height: "5rem"
    },
    [theme.breakpoints.down("xs")]: {
      height: "4rem"
    }
  },
  marginLeft: {
    marginLeft: "auto"
  },
  noPaddingLeft: {
    paddingLeft: 0
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  tab: {
    ...theme.typography["tab"],
    minWidth: 10,
    marginLeft: "30px",
    transition: "transform 0.2s ease-in-out"
  },
  button: {
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    ...theme.typography["estimateButton"],
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    }
  },
  menu: {
    backgroundColor: theme.palette.common["blue"],
    color: "white",
    borderRadius: "0px"
  },
  menuItem: {
    ...theme.typography["tab"],
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  },
  drawerIcon: {
    height: "40px",
    width: "40px"
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  drawer: {
    background: theme.palette.common["blue"]
  },
  drawerItem: {
    ...theme.typography["tab"],
    color: "white",
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common["orange"],
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  },
  drawerItemSelected: {
    opacity: 1
  }
}));

const tabStyle = {
  default_tab: {},
  active_tab: {
    transform: "scale(1.2)"
  }
};

const a11yProps = (index: any) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
};

const getStyle = isActive => {
  return isActive ? tabStyle.active_tab : tabStyle.default_tab;
};

const Header: React.FC<Props> = props => {
  // const [value, setValue] = useState<number>(0);
  const [anchorElem, setAnchorElem] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  // const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const iOS =
    typeof window !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    props.setValue(newValue);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElem(event.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuClose = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElem(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setAnchorElem(null);
    setOpenMenu(false);
    props.setSelectedIndex(index);
  };

  const menuOptions = [
    {
      name: "Services",
      path: "/services",
      activeIndex: 1,
      selectedIndex: 0
    },
    {
      name: "Custom Software Development",
      path: "/custom-software",
      activeIndex: 1,
      selectedIndex: 1
    },
    {
      name: "Mobile App Development",
      path: "/mobile-apps",
      activeIndex: 1,
      selectedIndex: 2
    },
    {
      name: "Website Development",
      path: "/websites",
      activeIndex: 1,
      selectedIndex: 3
    }
  ];

  const routes = [
    { name: "Home", path: "/", activeIndex: 0, selectedIndex: 0 },
    { name: "Services", path: "/services", activeIndex: 1, selectedIndex: 0 },
    {
      name: "The Revolution",
      path: "/revolution",
      activeIndex: 2,
      selectedIndex: 0
    },
    { name: "About Us", path: "/about", activeIndex: 3, selectedIndex: 0 },
    { name: "Contact Us", path: "/contact", activeIndex: 4, selectedIndex: 0 }
  ];

  const estimateRoute = {
    name: "Free Estimate",
    path: "/estimate",
    activeIndex: 5,
    selectedIndex: 0
  };

  const listItems = [...routes, estimateRoute];
  useEffect(() => {
    [...menuOptions, ...routes, estimateRoute].forEach(route => {
      if (window.location.pathname === route.path) {
        if (props.value !== route.activeIndex) {
          props.setValue(route.activeIndex);
          if (
            route.selectedIndex &&
            props.selectedIndex !== route.selectedIndex
          ) {
            props.setSelectedIndex(route.selectedIndex);
          }
        }
      }
    });
  }, [props, routes, menuOptions, estimateRoute]);

  const serviceProps = {
    "aria-controls": anchorElem ? "simple-menu" : undefined,
    "aria-haspopup": anchorElem ? true : undefined,
    onMouseOver: event => handleMenuOpen(event)
  };

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {listItems.map(route => {
            return (
              <ListItem
                key={route.activeIndex}
                onClick={() => {
                  setOpenDrawer(false);
                  props.setValue(route.activeIndex);
                }}
                divider
                button
                component={Link}
                className={
                  route.activeIndex === 5
                    ? props.value === route.activeIndex
                      ? classnames(
                          classes.drawerItemEstimate,
                          classes.drawerItemSelected
                        )
                      : classes.drawerItemEstimate
                    : undefined
                }
                to={route.path}
                selected={props.value === route.activeIndex}
              >
                <ListItemText
                  className={
                    props.value === route.activeIndex
                      ? classnames(
                          classes.drawerItem,
                          classes.drawerItemSelected
                        )
                      : classes.drawerItem
                  }
                  disableTypography
                >
                  {route.name}
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        disableRipple
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );
  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.marginLeft}
        indicatorColor="primary"
        TabIndicatorProps={{ style: { fontSize: "1.3rem" } }}
      >
        {routes.map(route => {
          let propsData = {};
          if (route.path === "/services") {
            propsData = { ...serviceProps };
          }
          return (
            <Tab
              key={route.activeIndex}
              {...propsData}
              className={classes.tab}
              style={getStyle(props.value === route.activeIndex)}
              component={Link}
              to={route.path}
              label={route.name}
              {...a11yProps(0)}
            />
          );
        })}
      </Tabs>
      <Button
        component={Link}
        to="/estimate"
        variant="contained"
        onClick={() => props.setValue(5)}
        color="secondary"
        className={classes.button}
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorElem}
        open={openMenu}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleMenuClose }}
        onClose={handleMenuClose}
        elevation={0}
        keepMounted
        style={{ zIndex: 1302 }}
      >
        {menuOptions.map((item, index) => {
          return (
            <MenuItem
              key={item.name}
              component={Link}
              to={item.path}
              onClick={event => {
                handleMenuItemClick(event, index);
                props.setValue(1);
              }}
              selected={index === props.selectedIndex && props.value === 1}
              classes={{ root: classes.menuItem }}
            >
              {item.name}
            </MenuItem>
          );
        })}
      </Menu>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              disableRipple
              className={classes.logoContainer}
              onClick={() => {
                props.setValue(0);
                setOpenDrawer(false);
              }}
              component={Link}
              to="/"
            >
              <img alt="company logo" src={logo} className={classes.logo} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </React.Fragment>
  );
};

export default Header;
