import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {Route, Link, Switch} from "react-router-dom";

import Typography from '@material-ui/core/Typography';
import MUILink from '@material-ui/core/Link';

import Home from "../pages/home";

import OxoSample from "../pages/OxoSample";
import DataGridSample from "../pages/DataGridSample";
import MUIDataTableSample from "../pages/MUIDataTableSample";
import MaterialTableSample from "../pages/MaterialTableSample";

import About from "../pages/about";

export const ProjectName = "Obezite Takip";
export const ProjectVersion = "v0.1";

export function MenuListing () {

    return (

      <List>
        
        <Link to="/OxoSample">  
          <ListItem button>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="OxoSample" />
          </ListItem>
        </Link>

        <Link to="/DataGridSample">  
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="DataGridSample" />
          </ListItem>
        </Link>

        <Link to="/MUIDataTableSample">  
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="MUIDataTableSample" />
          </ListItem>
        </Link>

        <Link to="/MaterialTableSample">  
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="MaterialTableSample" />
          </ListItem>
        </Link>


      </List>

    );
};

export function MenuSublisting () {

  return (

    <List>
      <ListSubheader inset>Useful Docs</ListSubheader>
      
      <Link to="/about">  
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </Link>

    </List>

  );
};

export function MenuSwitch () {

  return (

    <Switch>
      
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/OxoSample">
        <OxoSample />
      </Route>
      <Route path="/DataGridSample">
        <DataGridSample />
      </Route>
      <Route path="/MUIDataTableSample">
        <MUIDataTableSample />
      </Route>
      <Route path="/MaterialTableSample">
        <MaterialTableSample />
      </Route>

      <Route path="/about">
        <About />
      </Route>

    </Switch>

  );
};

export function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MUILink color="inherit" href="https://www.google.com/">
        learning trials
      </MUILink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}