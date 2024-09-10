import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function AboutIngradiant() {

  let [loaderVal,setLoaderVal]=useState(false)


    let {selctedIngradiant}=useParams()

    let [myIngradiant,setMyingradiant]=useState([])

   async function knowAbout(selctedIngradiant)
   {
    setLoaderVal(true)
    let {data}=await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${selctedIngradiant}`)

    console.log(data.ingredients)

    setMyingradiant(data.ingredients)
    setLoaderVal(false)
   }

   useEffect(()=>{
    knowAbout(selctedIngradiant)
   },[])

  return <>
  <br />
  <br />
  <br />

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

<h2 className='text-white text-center'>( {selctedIngradiant} Ingredient )</h2>

<div className="w-25 mx-auto bg-danger p-2 rounded-pill my-3"></div>

<div className="container">
  <div className="row align-items-center ">


      <div className="col-lg-6 mb-5">
      <img src={`https://www.thecocktaildb.com/images/ingredients/${selctedIngradiant}.png`} class="w-100 rounded-3 pointer " alt="" />

      </div>


      <div className="col-lg-6">
          <p className='text-white fs-4'><i class="fa-solid fa-droplet me-2 text-info"></i> Drink Type <span className='mx-2'>:</span>
           <h2 className='d-inline-block'>{myIngradiant[0]&&myIngradiant[0]?.strType!=null?myIngradiant[0].strType:"Unkown"} </h2> </p>
          <p className='text-white fs-4'><i class="fa-solid fa-droplet  me-2 text-info"></i>Description : {myIngradiant[0]&&myIngradiant[0]?.strDescription!=null?myIngradiant[0].strDescription:"No Description"}</p>
          <p className='text-white fs-4'><i class="fa-solid fa-champagne-glasses me-2 text-warning"></i>Alcoholic Drink ? 
          <span className='mx-2'>:</span> <h2 className='d-inline-block'>{myIngradiant[0]&&myIngradiant[0]?.strAlcohol!=null?myIngradiant[0].strAlcohol:"Unkown"}</h2>  </p>


      </div>



  </div>
</div>


</>
  }


  
  </>
}
