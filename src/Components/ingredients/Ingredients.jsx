import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";

export default function Ingredients() {

  let [loaderVal,setLoaderVal]=useState(false)


let [allIngradiants,setAllIngradiants]=useState([])

async function getAllIngradiants()
{
  setLoaderVal(true)

  let {data}=await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`)

  console.log(data.drinks)

  setAllIngradiants(data.drinks)

  setLoaderVal(false)
}


useEffect(()=>{

  getAllIngradiants()
},[])



  return <>
    <br />
    <br />
    <br />
    <Helmet>
<meta charSet="utf-8" />
<title>Drink  Ingradiants  </title>
</Helmet>



{loaderVal==true?
  <div className="loading ">
<svg viewBox="0 0 240 240" height="240" width="240" className="loader overflow-hidden">
	<circle stroke-linecap="round" stroke-dashoffset="-330" stroke-dasharray="0 660" stroke-width="20" stroke="#000" fill="none" r="105" cy="120" cx="120" class="loader-ring loader-ring-a"></circle>
	<circle stroke-linecap="round" stroke-dashoffset="-110" stroke-dasharray="0 220" stroke-width="20" stroke="#000" fill="none" r="35" cy="120" cx="120" class="loader-ring loader-ring-b"></circle>
	<circle stroke-linecap="round" stroke-dasharray="0 440" stroke-width="20" stroke="#000" fill="none" r="70" cy="120" cx="85" class="loader-ring loader-ring-c"></circle>
	<circle stroke-linecap="round" stroke-dasharray="0 440" stroke-width="20" stroke="#000" fill="none" r="70" cy="120" cx="155" class="loader-ring loader-ring-d"></circle>
</svg>
</div>
:
<>

<div className="container">
    <div className="row g-4 justify-content-center">

    {allIngradiants?allIngradiants?.map((el)=>{

return <>
<div  className="col-md-6 col-xl-4">
  <div className="categoryItem text-center p-4 ">

  <Link to={`/ingradiantdetails/${el.strIngredient1}`}>
  <img src={`https://www.thecocktaildb.com/images/ingredients/${el.strIngredient1}.png`} class="w-75 rounded-3 pointer " alt="" />
  </Link>

  <h2 className="my-4">{el.strIngredient1}</h2>

  <Link to={`/aboutingradiant/${el.strIngredient1}`}>

  <button className='btn btn-outline-success'>Know More</button>

  </Link>

</div>
</div>

</>

    })
    
    
    
    
    
    :""}
        
    </div>
  </div>

</>
}




  
  </>
}
