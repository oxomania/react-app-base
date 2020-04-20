import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  paper: {
    paddingTop: theme.spacing(1),
    padding: theme.spacing(1),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    height: 400, 
    width: '100%'
  }

}));


export default function About() {

  const classes = useStyles();

  return (
  
    <Paper className={classes.paper}>
      <p>
        <h1>This is the about page</h1>
      </p>
    </Paper>
		

  );
}