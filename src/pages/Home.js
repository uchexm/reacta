// import { useContext } from "react";
// import {AppContext} from "../App";
import { Axios } from "axios";
import { useQuery } from "@tanstack/react-query";
export const Home = () => {
  const {data} = useQuery(["cat"], ()=>{
    return Axios.get("https://catfact.ninja/fact").then((response)=>{response.data})
  })
  // const {username} = useContext(AppContext);
  return <h1>This is homepage use is {data?.fact}</h1>
}