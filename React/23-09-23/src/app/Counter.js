"use client"
import { useDispatch, useSelector } from "react-redux"

const Counter = () => {

    const incrementAction = {
        type : 'INCREMENT_VALUE'
    }

    const decrementAction = {
        type : 'DECREMENT_VALUE'
    }


    const updateAction = (e) => {
        const updateText = {
            type: 'UPDATE_MESSAGE',
            message: e.target.value
        }

        return updateText
    }

    const val = useSelector(state => state.inc.count)
    const msg = useSelector(state => state.msg.message)
    const dispatch = useDispatch()
    return <div>
        <h1>{val}</h1>
        <button
            onClick = {()=>dispatch(incrementAction)}
        >
            Increment
        </button>
        <button
            onClick={()=>dispatch(decrementAction)}
        >
            Decrement
        </button>
        <div>
            <input 
                type='text' 
                placeholder="Enter some text"
                onChange={(e)=>dispatch(updateAction(e))}
            />

            <h1>{msg}</h1>
        </div>
    </div>
}

export default Counter