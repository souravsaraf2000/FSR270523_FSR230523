import React from 'react'

class Child extends React.Component {
    
    render() { 
        console.log('Child Component Called')
        return (
            <div>
                <h1>Child Component</h1>
            </div>
        );
    }
}
 
export default Child;