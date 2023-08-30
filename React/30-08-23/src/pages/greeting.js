const Greet = () => {
    let items = ['Practice Daily!', 'Spend 2 hrs doing practice!', 'Hand-on is necessary 😊']
    return <div>
                <h1>Hello There!</h1> 
                <h1>Welcome to my app!</h1>
                <ol>
                {
                    items.map(val => <li>{val}</li>)
                }
                </ol>
            </div>
}

export default Greet