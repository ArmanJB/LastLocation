import React from 'react';
import NestedListItem from './NestedListItem';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    float: "left"
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList(props) {
  const classes = useStyles();


  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">{props.title}</ListSubheader>
      }
      className={classes.root}
    >
        {props.primaryList.map((team) => (
            <NestedListItem key={team.id} team={team} classes={classes} onChildClick={employee => props.onChildClick(employee)} />
        ))}
        
    </List>
  );
}

