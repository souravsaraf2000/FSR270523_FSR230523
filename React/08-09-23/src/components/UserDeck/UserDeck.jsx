import axios from 'axios';
import React from 'react'
import UserCard from '../UserCard/UserCard';
import styles from './UserDeck.module.css'

class UserDeck extends React.Component {
    state = { 
        users : [],
        search : '',
        filteredData: []
     } 
    componentDidMount(){
        axios.get('https://dummyjson.com/users')
        .then(res => this.setState({users : res.data.users}))
        .catch(err => console.log(err))
    }
    handleChange = (e) => {
        let data = this.state.users.filter(user => user.firstName.toLowerCase().includes(e.target.value.toLowerCase()))
        this.setState({search: e.target.value, filteredData: data}, ()=> console.log(this.state))
    }
    render() { 
        
        return (
            
            <div>
                <div className={styles.searchDiv}>
                    <input 
                        type='text' 
                        placeholder='Enter users first name...'
                        onChange={(e)=>this.handleChange(e)}
                        className={styles.search}
                    />
                </div>
                
                <div className={styles.container}>
                    {
                        this.state.filteredData.length === 0 && this.state.search === ''?
                            this.state.users.map((user,idx)=><UserCard userData = {user} key={'user'+idx}/>):
                                this.state.filteredData.length === 0 && this.state.search !== ''? <h1 className={styles.noRecFound}>No record found !</h1> :
                                    this.state.filteredData.map((user, idx)=><UserCard userData = {user} key={'user' + idx}/>)
                    }
                </div>
            </div>
            
        );
    }
}
 
export default UserDeck;