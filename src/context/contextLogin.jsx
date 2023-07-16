import { createContext, useReducer } from "react"

export const LoginContext = createContext();
//state {isLogin: false} action: {type: Login, payload:{isLogin: true}}

export const LoginReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN": {
            return {
                ...state,
                isLogin: true
            }
        }
        case "LOGOUT": {
            return {
                ...state,
                isLogin: false
            }
        }
    }
}

export default function LoginProvider({ children }) {
    const [state, dispatch] = useReducer(LoginReducer, {
        isLogin: false
    })
    
    const actionLogin = () => {
        dispatch({
            type: "LOGIN",
            payload: {isLogin: true}
        })
    }

    const actionLogout = () => {
        dispatch({
            type: "LOGOUT",
            payload: {isLogin: false}
        })
    }
    
    return (
        <LoginContext.Provider value={{
            isLogin: state.isLogin,
            actionLogin,
            actionLogout

         }}>
            {children}
        </LoginContext.Provider>
    )
}
