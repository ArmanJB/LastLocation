import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  state={
    teams: []
  }

  componentDidMount() {
    fetch('https://msc-dev-last-location.herokuapp.com/teams?_embed=employees')
    .then(res => res.json())
    .then((data) => {
      this.setState({ teams: data })
      console.log(this.state.teams)
    })
    .catch(console.log)
  }

  render () {
    return (
      <div className="App">
        <header className="">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Last Location (Teams) </p>
        </header>
        <div className='App-body'>
          <ul>
            {this.state.teams.map((team) => (
              <li>{team.name}
                <ol>
                  {team.employees.map((employee) => (
                    <li>{employee.fullName}</li>
                  ))}
                </ol>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
