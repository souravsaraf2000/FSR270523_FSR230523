import React from 'react'
import styles from './App.module.css'
import Creation from './components/creation/creation'
import Updation from './components/updation/updation'
import Deletion from './components/deletion/deletion'


/*
  create a react application (npx create-react-app name)
  make an api call and show list
  for example: https://dummyjson.com/products
  and show all the products in grid format

  Hint: You need to use axios package
*/
class App extends React.Component{

  state = {
    count: 0,
    message: '',
    toggle : true
  }

  increment = () => {
    this.setState({count: this.state.count + 1})
  }
  decrement = () => {
    if(this.state.count > 0){
      this.setState({count: this.state.count - 1})
    }
  }
  inputChange = (e) => {
    console.log(e)
    this.setState({message: e.target.value}, ()=>{console.log(this.state)})
  }

  receiveUpdates = (arg) => {
    console.log(arg)
  }
  render(){
    return(
      // <div>
      //   {
      //     console.log(this.state)
      //   }
      //   <h1>
      //     Counter
      //   </h1>
      //   <button 
      //     className={styles.btn}
      //     onClick={this.decrement}
      //   >-</button>
      //   <span className={styles.increaseSize}>{this.state.count}</span>
      //   <button 
      //     className={styles.btn}
      //     onClick={this.increment}
      //   >+</button>
      //   <input 
      //     type='text' 
      //     onChange={(e) => this.inputChange(e)}
      //   />
      //   <h1>{this.state.message}</h1>
      // </div>
      // <Creation/>
      <Updation isUpdate = {false} receiveUpdates = {this.receiveUpdates}/>
      // <div>
      //   <button
      //     onClick={()=>this.setState({toggle: !this.state.toggle})}
      //   >{this.state.toggle ? 'Hide' : 'Show'}</button>
      //   {this.state.toggle ? <Deletion/> : ''}
      // </div>
      
    )
  }
}

export default App;