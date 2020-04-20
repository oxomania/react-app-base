import React from 'react';

import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';

import logo from './logo.png';
import bg from './bg.jpg';

import Home from "../pages/home";

import OxoSample from "../pages/OxoSample";
import DataGridSample from "../pages/DataGridSample";
import MUIDataTableSample from "../pages/MUIDataTableSample";
import MaterialTableSample from "../pages/MaterialTableSample";

import About from "../pages/about";

export const ProjectInfo = {
  name: "Deneme xxx",
  version: "v0.1",
  images: {
    logo: logo,
    loginBackground: bg
  },
  home:
    {
      component: <Home />,
      path: "/", 
      icon: null,
      label: null
    },
  pages: [ 
    {
      component: <OxoSample />,
      path: "/OxoSample", 
      icon: <AssignmentIcon />,
      label: "OxoSample"
    },
    {
      component: <DataGridSample />,
      path: "/DataGridSample", 
      icon: <DashboardIcon />,
      label: "DataGridSample"
    },   
    {
      component: <MUIDataTableSample />,
      path: "/MUIDataTableSample", 
      icon: <DashboardIcon />,
      label: "MUIDataTableSample"
    },   {
      component: <MaterialTableSample />,
      path: "/MaterialTableSample", 
      icon: <DashboardIcon />,
      label: "MaterialTableSample"
    } 
  ],
  subPages: [
    {
      component: <About />,
      path: "/About", 
      icon: <AssignmentIcon />,
      label: "About"
    }
  ], 
  copyright: {
    label: "My Excellent Company " + new Date().getFullYear(),
    link: "https://www.google.com/"
  }
}