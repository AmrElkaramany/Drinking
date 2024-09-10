import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import glassesImg from "../../assests/drinksGlasses.jpg"
import { Helmet } from 'react-helmet';

export default function Glassess() {

  let [loaderVal,setLoaderVal]=useState(false)


    let [allGlasses,setAllGlasses]=useState([])

    async function getAllGlasses()
    {
    setLoaderVal(true)
      let {data}=await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list`)
    
      console.log(data.drinks)
    
      setAllGlasses(data.drinks)

      setLoaderVal(false)

    }
    

    // async function getGlassImage(glassName) {
    //     const cityImageResponse = await fetch(
    //       `https://api.unsplash.com/search/photos?page=1&query=${glassName}&client_id=maVgNo3IKVd7Pw7-_q4fywxtQCACntlNXKBBsFdrBzI&per_page=5&orientation=landscape`
    //     );
    //     const cityImage = await cityImageResponse.json();
    //     const cityImageURL =
    //       cityImage.results[Math.trunc(Math.random() * 5)].urls.small;
    //       document.querySelector(".country").style.backgroundImage = `url('${cityImageURL}')`; 
    //     return cityImageURL;
    //   }






    
    useEffect(()=>{
    
      getAllGlasses()

      
    },[])




    return <>
    <br />
    <br />
    <br />


    <Helmet>
<meta charSet="utf-8" />
<title>Select Drink  Glasse  </title>
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

        <img src={glassesImg}  className="GlassImagCover mb-5" alt=""  />

    {allGlasses?allGlasses?.map((el)=>{

return <>




<div  className="col-md-6 col-xl-4">
  <div className="categoryItem text-center p-4 ">
    

  <Link to={`/Glassdetails/${el.strGlass}`} className='text-decoration-none text-white'>

  <span className="h2 mt-3">{el.strGlass}</span>

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
