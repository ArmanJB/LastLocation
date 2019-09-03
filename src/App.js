import React from 'react';
import logo from './logo.svg';
import Maps from './Maps';
import List from './NestedList';
import './App.css';
import NestedList from './NestedList';

import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const appBarStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  }
}));

const gridStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    margin: theme.margin(5)
  }
}));

class App extends React.Component {
  state={
    teams: []
  }

  componentDidMount() {
    fetch('https://msc-dev-last-location.herokuapp.com/teams?_embed=employees')
    .then(res => res.json())
    .then((data) => {
      this.setState({ teams: data });
    })
    .catch(console.log)
  }

  render () {
    
    return (
      <div className="App">
        <AppBar position="static" style={{ background: '#2d2b55' }}>
          <Toolbar>
            <Typography className={appBarStyles.title} variant="h6" noWrap>Last Location</Typography>
          </Toolbar>
        </AppBar>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <NestedList title='Teams' primaryList={this.state.teams} />
          </Grid>
          <Grid item xs={9}>
            <Maps />
          </Grid>
      </Grid>
      </div>
    );
  }
}

export default App;
