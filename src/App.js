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

class App extends React.Component {
  state={
    teams: [],
    currentEmployee: null
  }

  handleClick(employee) {
    this.setState({
      currentEmployee: employee
    });
    // console.log(employee.fullName);
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
            <Typography variant="h6" noWrap>Last Location</Typography>
          </Toolbar>
        </AppBar>
        <Grid container spacing={1} style={{ minHeight: '45rem' }}>
          <Grid item xs={3} style={{ maxHeight: '60rem', overflow: 'auto' }}>
            <NestedList title='Teams' primaryList={this.state.teams} onChildClick={employee => this.handleClick(employee)} />
          </Grid>
          <Grid item xs={9} style={{ position: 'relative' }}>
            <Maps employee={this.state.currentEmployee} />
          </Grid>
      </Grid>
      </div>
    );
  }
}

export default App;
