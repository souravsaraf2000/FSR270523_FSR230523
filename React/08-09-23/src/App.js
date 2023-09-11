import React from 'react'
import UserDeck from './components/UserDeck/UserDeck';

class App extends React.Component {
  state = {  } 
  render() { 
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>User Deck</h1>
        <UserDeck/>
      </div>
    );
  }
}
 
export default App;