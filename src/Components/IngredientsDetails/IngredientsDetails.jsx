import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Slider from "react-slick";

export default function IngredientsDetails() {

  let [loaderVal,setLoaderVal]=useState(false)

    let {ingradiantName}=useParams()
    let [ingradiantItems,setIngradintItems]=useState([])


    async function getSelctedCategory(productNameParameter)
    {
        setLoaderVal(true)

        let {data}=await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${productNameParameter}`)

        console.log(data.drinks)

        setIngradintItems(data.drinks)

        setLoaderVal(false)
    }


    // details of clicked ingradiant item
    let [DetailsItem,setDetailsItem]=useState([])
    
    async function getDrinkId(DrinkId)
    {
        let {data}=await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${DrinkId}`)

        console.log(data.drinks)

        setDetailsItem(data.drinks)


    
    }


// for slick slider
var settings = {
    // fade: true,
    speed: 700,
    // dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };
  

  useEffect(()=>{
    getSelctedCategory(ingradiantName)
  },[])

 
  return <>
  
  
  <br />
  <br />
  <br />
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



<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-fullscreen bg-black">
    <div className="modal-content bg-black border-0">
      <div className="modal-header border-0">
        <button type="button" className="btn-close bg-white " data-bs-dismiss="modal" aria-label="Close"></button>
      </div>



      <div class="modal-body">


        {DetailsItem!=[]?DetailsItem.map(el=>{


            return <>
            
            <div className="detailsCateItem w-100  d-flex justify-content-center flex-column align-items-center">

            <div className="row">
              <div className="col-md-12 object-fit-cover">

              <img src={el.strDrinkThumb} className='CategoryImgDetails w-100' alt="" />

              </div>
            </div>

            <h4 className='text-white text-center my-3'>{el.strCategory}</h4>

            <h3 className='text-white text-center'>{el.strDrink} ( {el.strGlass} )</h3>

            <h4 className='text-white text-center my-2'>{el.strAlcoholic}</h4>

            <div  className='bg-white w-75 p-1 my-4 rounded-pill'></div>

            <div className="container mt-4 overflow-x-hidden">
              <div className="row text-white g-5 justify-content-center">



{/* for instructions */}
<h3 className='my-5 text-center '>( Instructions Steps )</h3>


            <div className="instructionsContainer offset-sm-1">

            {/* 1 */}
            {el.strInstructions!=""&&el.strInstructions!=null?

            <p className='text-grays '>
                   <i class="fa-solid fa-circle-right text-success fs-4 me-2"></i>   {el.strInstructions}  
            </p>
            :""}
            {/* 2 */}
            {el.strInstructionsES!=""&&el.strInstructionsES!=null?

            <p className='text-grays'>
                  <i class="fa-solid fa-circle-right text-success fs-4 me-2"></i>  {el.strInstructionsES} 
            </p>
            :""}
            {/* 3 */}
            {el.strInstructionsDE!=""&&el.strInstructionsDE!=null?

            <p className='text-grays'>
                    <i class="fa-solid fa-circle-right text-success fs-4 me-2"></i>  {el.strInstructionsDE} 
            </p>
            :""}
            {/* 4 */}
            {el.strInstructionsFR!=""&&el.strInstructionsFR!=null?

            <p className='text-grays'>
                <i class="fa-solid fa-circle-right text-success fs-4 me-2"></i> {el.strInstructionsFR} 
            </p>
            :""}
            {/* 5 */}
            {el.strInstructionsIT!=""&&el.strInstructionsIT!=null?

            <p className='text-grays'>
                <i class="fa-solid fa-circle-right text-success fs-4 me-2"></i>  {el.strInstructionsIT} 
            </p>
            :""}
            
            {/* 6 */}
            {/* {el.strInstructionsZH-HANS!=""&&el.strInstructionsZH-HANS!=null?

            <p className='text-success'>
                   -   {el.strInstructionsZH-HANS} 
            </p>
            :""} */}
            {/* 7 */}
            {/* {el.strInstructionsZH-HANS!=""&&el.strInstructionsZH-HANT!=null?

            <p className='text-success'>
                   -   {el.strInstructionsZH-HANT} 
            </p>
            :""} */}


            </div>

            





{/* for ingradiant */}
<h3 className='my-5 text-center '>( Ingradiants )</h3>


              <div className="ingradiantContainer ">

              <div className="row justify-content-center g-5">





  {/* 1 */}
  {el.strIngredient1!=""&&el.strIngredient1!=null?
              <div className="col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center">
              <img src={`https://www.thecocktaildb.com/images/ingredients/${el.strIngredient1}.png`} class="w-75 rounded-3 " alt="" />
              <h4 class="text-center my-3">{el.strMeasure1} {el.strIngredient1}</h4>
              </div>
              :""}
              {/* 2 */}
              {el.strIngredient2!=""&&el.strIngredient2!=null?
              <div className="col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center">
              <img src={`https://www.thecocktaildb.com/images/ingredients/${el.strIngredient2}.png`} class="w-75 rounded-3 " alt="" />
              <h4 class="text-center my-3">{el.strMeasure2} {el.strIngredient2}</h4>
              </div>
              :""}
              {/* 3 */}
              {el.strIngredient3!=""&&el.strIngredient3!=null?
              <div className="col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center">
              <img src={`https://www.thecocktaildb.com/images/ingredients/${el.strIngredient3}.png`} class="w-75 rounded-3 " alt="" />
              <h4 class="text-center my-3">{el.strMeasure3} {el.strIngredient3}</h4>
              </div>
              :""}
                            {/* 4 */}
                            {el.strIngredient4!=""&&el.strIngredient4!=null?
              <div className="col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center">
              <img src={`https://www.thecocktaildb.com/images/ingredients/${el.strIngredient4}.png`} class="w-75 rounded-3 " alt="" />
              <h4 class="text-center my-3">{el.strMeasure4} {el.strIngredient4}</h4>
              </div>
              :""}              
                            {/* 5 */}
                            {el.strIngredient5!=""&&el.strIngredient5!=null?
              <div className="col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center">
              <img src={`https://www.thecocktaildb.com/images/ingredients/${el.strIngredient5}.png`} class="w-75 rounded-3 " alt="" />
              <h4 class="text-center my-3">{el.strMeasure5} {el.strIngredient5}</h4>
              </div>
              :""}
                            {/* 6 */}
                            {el.strIngredient6!=""&&el.strIngredient6!=null?
              <div className="col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center">
              <img src={`https://www.thecocktaildb.com/images/ingredients/${el.strIngredient6}.png`} class="w-75 rounded-3 " alt="" />
              <h4 class="text-center my-3">{el.strMeasure6} {el.strIngredient6}</h4>
              </div>
              :""}
                            {/* 7 */}
                            {el.strIngredient7!=""&&el.strIngredient7!=null?
              <div className="col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center">
              <img src={`https://www.thecocktaildb.com/images/ingredients/${el.strIngredient7}.png`} class="w-75 rounded-3 " alt="" />
              <h4 class="text-center my-3">{el.strMeasure7} {el.strIngredient7}</h4>
              </div>
              :""}
                            {/* 8 */}
                            {el.strIngredient8!=""&&el.strIngredient8!=null?
              <div className="col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center">
              <img src={`https://www.thecocktaildb.com/images/ingredients/${el.strIngredient8}.png`} class="w-75 rounded-3 " alt="" />
              <h4 class="text-center my-3">{el.strMeasure8} {el.strIngredient8}</h4>
              </div>
              :""}
                            {/* 9 */}
                            {el.strIngredient9!=""&&el.strIngredient9!=null?
              <div className="col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center">
              <img src={`https://www.thecocktaildb.com/images/ingredients/${el.strIngredient9}.png`} class="w-75 rounded-3 " alt="" />
              <h4 class="text-center my-3">{el.strMeasure9} {el.strIngredient9}</h4>
              </div>
              :""}
                            {/* 10 */}
                            {el.strIngredient10!=""&&el.strIngredient10!=null?
              <div className="col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center">
              <img src={`https://www.thecocktaildb.com/images/ingredients/${el.strIngredient10}.png`} class="w-75 rounded-3 " alt="" />
              <h4 class="text-center my-3">{el.strMeasure10} {el.strIngredient10}</h4>
              </div>
              :""}
                            {/* 11 */}
                            {el.strIngredient11!=""&&el.strIngredient11!=null?
              <div className="col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center">
              <img src={`https://www.thecocktaildb.com/images/ingredients/${el.strIngredient11}.png`} class="w-75 rounded-3 " alt="" />
              <h4 class="text-center my-3">{el.strMeasure11} {el.strIngredient11}</h4>
              </div>
              :""}
                            {/* 12 */}
                            {el.strIngredient12!=""&&el.strIngredient12!=null?
              <div className="col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center">
              <img src={`https://www.thecocktaildb.com/images/ingredients/${el.strIngredient12}.png`} class="w-75 rounded-3 " alt="" />
              <h4 class="text-center my-3">{el.strMeasure12} {el.strIngredient12}</h4>
              </div>
              :""}
                            {/* 13 */}
                            {el.strIngredient13!=""&&el.strIngredient13!=null?
              <div className="col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center">
              <img src={`https://www.thecocktaildb.com/images/ingredients/${el.strIngredient13}.png`} class="w-75 rounded-3 " alt="" />
              <h4 class="text-center my-3">{el.strMeasure13} {el.strIngredient13}</h4>
              </div>
              :""}
                            {/* 14 */}
                            {el.strIngredient14!=""&&el.strIngredient14!=null?
              <div className="col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center">
              <img src={`https://www.thecocktaildb.com/images/ingredients/${el.strIngredient14}.png`} class="w-75 rounded-3 " alt="" />
              <h4 class="text-center my-3">{el.strMeasure14} {el.strIngredient14}</h4>
              </div>
              :""}
                            {/* 15 */}
                            {el.strIngredient15!=""&&el.strIngredient15!=null?
              <div className="col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center">
              <img src={`https://www.thecocktaildb.com/images/ingredients/${el.strIngredient15}.png`} class="w-75 rounded-3 " alt="" />
              <h4 class="text-center my-3">{el.strMeasure15} {el.strIngredient15}</h4>
              </div>
              :""}






              </div>




              </div>




            {ingradiantItems.length!=1&&ingradiantItems?
            <>
                      <div  className='bg-white w-75 p-1 mt-5 rounded-pill'></div>

                      <h3 className='my-5 text-center '>Related Drinks in ( {ingradiantName} ) Category</h3>

            </>
            :""}

              <div className="row overflow-hidden">


              <Slider {...settings}>

{ingradiantItems.length!=1&&ingradiantItems?ingradiantItems.map((el)=>{


    return  <div className="col-md-4 ">
      

      <img src={el.strDrinkThumb} className='relatedImgs mx-2' alt="" />

      <h5 className='text-white text-center mt-3 pointer' 
      

      >{el.strDrink.slice(0,25)}</h5>

      
      </div>

})

:<>
{/* <div className="col-md-4"><img src={el.strDrinkThumb} className='relatedImgs mx-2' alt="" /></div> */}
{/* <h3 className='text-warning text-center'>Nothing</h3> */}
</>
}

</Slider>


              </div>



              </div>
            </div>



            </div>
            
            </>





        })    
        
        :""}
        
      </div>



    </div>
  </div>
             </div>




             {/*  */}
  
    <div className="container">
    <div className="row g-4 justify-content-center">
        <h3 className='text-center'> <span className='text-white'>Drinks Depend On</span> <span className='text-danger'>( {ingradiantName} )</span> </h3>

    {ingradiantItems!=[]?ingradiantItems?.map(el=>{

        return <>
        {/* ////////////////////// */}
        <div className="col-md-6 col-xl-4">
        <div className="categoryItem p-3">
            <img src={el.strDrinkThumb} alt={el.strDrink}  onClick={()=>getDrinkId(el.idDrink)} className="categoryItemImg" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
            <h4 className='text-white text-center my-3'>{el.strDrink.slice(0,30)}</h4>
        </div>
        </div> 
        </>
    }):""}

    </div>
  </div>




</>
            }




  </>
}
