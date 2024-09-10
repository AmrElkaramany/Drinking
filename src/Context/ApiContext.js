import  axios  from "axios";
import { createContext } from "react";




export let apiContext=createContext(0)


function ApiContextProvider(props)
{


    // get all categories

    function getAllCategories()
    {
        return axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list").then((response)=>response).catch((err)=>err)
    }




    








return <apiContext.Provider  value={{getAllCategories}}>

        {props.children}

    </apiContext.Provider>
}

export default ApiContextProvider