import logo from './logo.svg';
import './App.css';

function App() {
  const players = ['Sakib Al Hasan', 'Mushfiqur Rahim', 'Tamim Iqbal', 'Taskin Ahmed', 'Mustafizur Rahman'];
  const actors = [
    {name: 'Cris Evan', movie: 'Captain America'},
    {name: 'Elizabeth Olison', movie: 'Wanda Vision'},
    {name: 'Tom Cruise', movie: 'Mission Impossible'},
    {name: 'Benji', movie: 'Mission Impossible'},
    {name: 'Ehten', movie: 'Mission Impossible'},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hi React! How are you?</h1>
        <div className='react-container'>
          <h2>This is React</h2>
        </div>

        {
          players.map(player => <Person name={player}></Person>)
        }
{/* 
       <Person name="Sakib Al Hasan" role="All-rounder"></Person>
       <Person name="Mushfiqur Rahim" role="Batsman"></Person>
       <Person name="Tamim Iqbal" role="Opener"></Person> */}
       <h3>Movie Person</h3>
       
       {
        actors.map(actor => <Friends name={actor.name}></Friends>)
       }

       {/* <Friends name="Cris Evan" role="Captain America"></Friends>
       <Friends name="Elizabeth Olison" role="Wanda Vision"></Friends>
       <Friends name="Tom Cruise" role="Mission Impossible"></Friends> */}
      </header>
    </div>
  );
}

function Person(props) {
  return (
    <div className="person-container">
      <h1>{props.name}</h1>
      <p>Profession: Cricketer</p>
      <p>Role: {props.role}</p>
    </div>
  );
}

function Friends (props) {
  return (
    <div className="friend-container">
      <h1>{props.name}</h1>
      <h3>Movie: {props.role}</h3>
    </div>
  );
}

export default App;
