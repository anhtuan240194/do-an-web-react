import { createContext } from "react";

export const contextCart = createContext();
//state: {items: [{id: 1, quantity: 2}, {id: 2, quantity: 3}]}
//action {type: payload: {id, quantity}}

const cartReducer = (state, action) => {
    switch ( action.type )  {
        case "ADD_ITEM" : {
            return {
                ...state,
                items: [...state.items, {id: action.payload.id, quantity: action.payload.quantity }]
            }
        }
         case "INCREAMENT" : {
            const newItems = state.items.map((item) => {
                item.id === action.payload.id ? 
                {...item, quantity: item.quantity + action.payload.quantity} 
                : item
            })
            return {
                ...state,
                items: newItems
            }
         }
         case "DECREMENT" : {
            const newItems = state.items.filter((item) => {
                if(item.id !== action.payload.id) {
                    return true
                } else if ( item.id !== action.payload.id item.quantity == action.payload.quantity){
                    return false
                } else {
                    return true
                }
                item.id === action.payload.id ?
                {...item, quantity: item.quantity - action.payload.quantity}
                : item 
            })
            return {
                ...state,
                items: newItems
            }
         }
         case "REMOVE_ITEM" : {
            const newItems = state.items.filter((item) => {
                item.id !== action.payload.id
            })
            return {
                ...state,
                items: newItems
            }
         }
         
    }
}