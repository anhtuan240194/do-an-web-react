import { LoginContext } from "../context/contextLogin";
import { useContext } from "react";

export const useContextLogin = () => {
    return useContext(LoginContext)
}
