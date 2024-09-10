import React, { useContext, useEffect, useState } from "react";
import { apiContext } from "../../Context/ApiContext";
import img1 from "../../assests/categories/Beer.jpeg"
import img2 from "../../assests/categories/Cocktail.jpeg"
import img3 from "../../assests/categories/Cocoa.webp"
import img4 from "../../assests/categories/CoffeeTea.webp"
import img5 from "../../assests/categories/HomemadLiqueur.jpeg"
import img6 from "../../assests/categories/OrdinaryDrink.jpeg"
import img7 from "../../assests/categories/Other.jpeg"
import img8 from "../../assests/categories/PunchPartyDrink.jpeg"
import img9 from "../../assests/categories/Shake.webp"
import img10 from "../../assests/categories/Shot.webp"
import img11 from "../../assests/categories/SoftDrink.webp"
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


export default function Categories() {


  let [loaderVal,setLoaderVal]=useState(false)


  let { getAllCategories } = useContext(apiContext);

  let [myCategories, setCategories] = useState([]);

  async function getAllCategoriesComponent() {
    
    setLoaderVal(true)

    let { data } = await getAllCategories();

    console.log(data.drinks);

    setCategories(data.drinks);

    setLoaderVal(false)


  }

  useEffect(() => {
    getAllCategoriesComponent();
  }, []);

  return (
    <>
    <br />
    <br />
    <br />

<Helmet>
<meta charSet="utf-8" />
<title>Drink  Categories  </title>
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
          {myCategories != [] ? (
            myCategories?.map((el) => {
              return (
                <>
                  <div  className="col-md-6 col-xl-4">
                    <div className="categoryItem text-center p-4">
                        {/* category details link */}
                        <Link to={`/categoriesdetails/${el?.strCategory=="Coffee / Tea"?"Coffee":el.strCategory=="Punch / Party Drink"?"Punch":el.strCategory=="Other / Unknown"?"Other":el.strCategory}`}>
                        <img src={el?.strCategory=="Ordinary Drink"?img6:el?.strCategory=="Cocktail"?img2:el?.strCategory=="Shake"?img9:el?.strCategory=="Other / Unknown"?img7:el?.strCategory=="Cocoa"?img3:el?.strCategory=="Shot"?img10:el?.strCategory=="Coffee / Tea"?img4:el?.strCategory=="Homemade Liqueur"?img5:el?.strCategory=="Punch / Party Drink"?img8:el?.strCategory=="Beer"?img1:el?.strCategory=="Soft Drink"?img11:""} className="categoryItemImg" alt="" />
                        </Link>
                      <h2 className="mt-3">{el?.strCategory=="Other / Unknown"?"Fizz":el?.strCategory}</h2>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>

</>

}









    </>
  );
}
