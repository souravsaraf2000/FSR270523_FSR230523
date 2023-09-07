import React from 'react'

class Deletion extends React.Component {
    state = {  } 
    componentWillUnmount(){
        console.log('Component Unmounted from the DOM')
    }
    componentDidMount(){
        console.log('Component Mounted on DOM')
    }
    render() { 
        return (
            <h1>Deletion Component</h1>
        );
    }
}
 
export default Deletion;