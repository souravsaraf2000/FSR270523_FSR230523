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
                
                <input 
                    type='text' 
                    placeholder='Enter users first name...'
                    onChange={(e)=>this.handleChange(e)}
                />
                <div className={styles.container}>
                    {
                        this.state.filteredData.length === 0 && this.state.search === ''?
                            this.state.users.map((user,idx)=><UserCard userData = {user} key={'user'+idx}/>):
                            this.state.filteredData.map((user, idx)=><UserCard userData = {user} key={'user' + idx}/>)
                    }
                </div>
            </div>
            
        );
    }
}
 
export default UserDeck;