import { RouterProvider, createHashRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Ingredients from './Components/ingredients/Ingredients';
import Categories from './Components/Categories/Categories';
import ApiContextProvider from './Context/ApiContext';
import CategoryDetails from './Components/CategoryDetails/CategoryDetails';
import IngredientsDetails from './Components/IngredientsDetails/IngredientsDetails';
import Glassess from './Components/Glasses/Glassess';
import GlassDetails from './Components/glassDetails/GlassDetails';
import Alcohil from './Components/Alcohil/Alcohil';
import NonAlcohil from './Components/NonAlcohil/NonAlcohil';
import OptionalAlcohil from './Components/OptionalAlcoil/OptionalAlcohil';
import SearchByName from './Components/SearchByName/SearchByName';
import AboutIngradiant from './Components/AboutIngradiant/AboutIngradiant';
import LetterSelcted from './Components/LetterSelcted/LetterSelcted';
import RandomDrink from './Components/RandomDrink/RandomDrink';
import BoxIcons from './Components/BoxIcons/BoxIcons';
import Error404 from './Components/Error404/Error404';

function App() {


  let routers=createHashRouter([
    {path:"",element:<Layout/>,children:[
    {index:true,element:<Home/>},

    {path:"ingredients",element:<Ingredients/>},
    {path:"aboutingradiant/:selctedIngradiant",element:<AboutIngradiant/>},


    {path:"categories",element:<Categories/>},
    {path:"glassess",element:<Glassess/>},

    {path:"alcohil",element:<Alcohil/>},
    {path:"noalcohill",element:<NonAlcohil/>},
    {path:"optionalcohil",element:<OptionalAlcohil/>},

    {path:"categoriesdetails/:productName",element:<CategoryDetails/>},
    {path:"ingradiantdetails/:ingradiantName",element:<IngredientsDetails/>},
    {path:"Glassdetails/:GlassName",element:<GlassDetails/>},



    {path:"searchbyname",element:<SearchByName/>},




    {path:"letterselcted/:letter",element:<LetterSelcted/>},



    {path:"randomdrink",element:<RandomDrink/>},


    {path:"*",element:<Error404/>},



  ]}
  ])

  return <>
  
  <BoxIcons/>

    <ApiContextProvider>

    <RouterProvider  router={routers}/>

    </ApiContextProvider>


  </>
}

export default App;
