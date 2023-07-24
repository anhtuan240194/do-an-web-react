import {useContext} from "react"
import { contextCart } from "../context/contextCart";

export default function useContextCart(){
    return useContext(contextCart)
}