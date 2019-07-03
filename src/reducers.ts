import { Reducer } from 'redux'
import { ActionTypes, MessageState, SAY_HI, SAY_BYE, SAY_SOMETHING } from './types'

const initalState: MessageState = {
    message: ''
}

export function myReducer(
    state = initalState,
    action: ActionTypes
): MessageState {
    switch (action.type) {
        case SAY_HI:
            return { message: 'hi' }
        case SAY_BYE:
            return { message: 'bye' }
        case SAY_SOMETHING: 
            return { message: action.payload }
        default:
            return state
    }
}

export const sameReducer: Reducer<MessageState, ActionTypes> = (state = initalState, action) => {
    switch (action.type) {
        case SAY_SOMETHING:
            return { message: action.payload }
        default:
            return state
    }
}

// export const myReducer: Reducer<MessageState, ActionTypes> = (state, action) => {

// }