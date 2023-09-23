const initialState = {
    count : 0,
    message: ''
}

export const incDecRed = (state = initialState, action) => {
    if(action.type == 'INCREMENT_VALUE'){
        return {...state, count: state.count + 1}
    }
    else if(action.type == 'DECREMENT_VALUE'){
        return {...state, count: state.count - 1}
    }
    return state
}

export const messageRed = (state = initialState, action) => {
    if(action.type == 'UPDATE_MESSAGE'){
        return {...state, message: action.message}
    }
    return state
}
