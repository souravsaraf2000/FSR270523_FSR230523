import React from 'react'
import styles from '../../App.module.css'
import Child from '../child/child'

class Updation extends React.PureComponent {
    state = {
        count: 0
    }
    increment = () => {
        this.setState({ count: 1 })
    }
    decrement = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 })
        }
    }
    // shouldComponentUpdate(nextProps, nextState){
    //     if(this.state.count !== nextState.count){
    //         return true;
    //     }
    //     return false;
    // }
    componentDidUpdate(){
        console.log('Component Updated')
    }
    
    render() {
        this.props.receiveUpdates('Some Data')
        console.log('Render Called')
        console.log(this.props)
        return (
            <div>
            <h1>
                Counter
            </h1>
            <button 
                className={styles.btn}
                onClick={this.decrement}
            >-</button>
            <span className={styles.increaseSize}>{this.state.count}</span>
            <button 
                className={styles.btn}
                onClick={this.increment}
            >+</button>
            <Child/>
            </div>
        );
    }
}

export default Updation;