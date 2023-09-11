import React from 'react'

class Child extends React.Component {
    
    render() { 
        console.log('Child Component Called')
        return (
            <>
                <h1>Child Component</h1>
            </>
        );
    }
}
 
export default Child;