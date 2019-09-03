import React from 'react';
// import logo from './logo.svg';
import Maps from './Maps';
import './App.css';
import NestedList from './NestedList';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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

    let map = <Maps employee={this.state.currentEmployee} />;
    
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
            <div>{this.state.currentEmployee ? this.state.currentEmployee.fullName : 'N/S' }</div>
            {map}
          </Grid>
      </Grid>
      </div>
    );
  }
}

export default App;
