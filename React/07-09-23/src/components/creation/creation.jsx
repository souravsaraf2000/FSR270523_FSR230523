import React from 'react'
import Child from '../child/child';
import axios from 'axios';

class Creation extends React.Component{
    constructor(){
        super();
        this.state = {
            products : []
        }
        console.log('Constructor Called')
    }

    componentDidMount(){
        console.log('CDM Called')
        axios.get('https://dummyjson.com/products')
        .then(res => this.setState({ products :res.data.products}))
        .catch(err => console.log(err))
    }

    render(){
        console.log('Render Called')
        return(
            <div>
                <h1>Creation Component</h1>
                <Child/>
                {
                    this.state.products.map((product, index) => <h1 key={`product${index}`}>{product.title}</h1>)
                }
            </div>
        )
    }
}

export default Creation;