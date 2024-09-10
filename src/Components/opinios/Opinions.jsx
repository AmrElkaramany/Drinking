import React, { useEffect, useState } from 'react'
import img1 from "../../assests/cat8.webp"
import img2 from "../../assests/cat2.jpeg"
import img3 from "../../assests/cat3.webp"
import { Link } from 'react-router-dom'


export default function Opinions() {






// List all meals by first letter 


  
    

  





useEffect(()=>{
},[])





  return <>
  
  <svg xmlns="http://www.w3.org/2000/svg" className='m-0' viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,0L20,37.3C40,75,80,149,120,181.3C160,213,200,203,240,181.3C280,160,320,128,360,96C400,64,440,32,480,58.7C520,85,560,171,600,181.3C640,192,680,128,720,122.7C760,117,800,171,840,202.7C880,235,920,245,960,250.7C1000,256,1040,256,1080,250.7C1120,245,1160,235,1200,208C1240,181,1280,139,1320,138.7C1360,139,1400,181,1420,202.7L1440,224L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
  
  <div className="OPinionContainer">

  <div className="container  ">
    
    <h2 className='text-white text-center py-4'>Our Services</h2>
    <div className="row">

{/* 1 */}
    <div className="col-md-4">
        <div className="serviceItem">
            <img src={img2} className='serviceImg w-100' alt="" />
            <div className="serviceCaption">
                <h3 className='text-white text-center mt-2'>All Drink Categories</h3>
            </div>
        </div>
    </div>
{/* 2 */}
<div className="col-md-4">
        <div className="serviceItem">
            <img src={img1} className='serviceImg w-100' alt="" />
            <div className="serviceCaption">
                <h3 className='text-white text-center mt-2'>All Drink Ingredients  </h3>
            </div>
        </div>
    </div>    
{/* 3 */}
<div className="col-md-4">
        <div className="serviceItem">
            <img src={img3} className='serviceImg w-100' alt="" />
            <div className="serviceCaption">
                <h3 className='text-white text-center mt-2'> Alcoholic,Non Alcoholic Drinks </h3>
            </div>
        </div>
    </div>  
    </div>
  </div>


  </div>


  <svg xmlns="http://www.w3.org/2000/svg"  className='m-0' viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,256L18.5,218.7C36.9,181,74,107,111,112C147.7,117,185,203,222,250.7C258.5,299,295,309,332,304C369.2,299,406,277,443,240C480,203,517,149,554,138.7C590.8,128,628,160,665,192C701.5,224,738,256,775,229.3C812.3,203,849,117,886,85.3C923.1,53,960,75,997,112C1033.8,149,1071,203,1108,229.3C1144.6,256,1182,256,1218,229.3C1255.4,203,1292,149,1329,149.3C1366.2,149,1403,203,1422,229.3L1440,256L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path></svg>
  

{/* All drinks by first letter */}


<h2 className='text-center text-white text-capitalize'>List all Drinks by first letter</h2>
<div className="container d-flex justify-content-center align-items-center  text-white">


<div className="my-5 fs-4 ms-3 ms-sm-0 alphabetLetters d-flex justify-content-center align-items-center flex-wrap ">



<Link to="/letterselcted/A" className="text-decoration-none text-white"><span  class="letter"> A </span> 
</Link>
<span class="mx-2"> / </span>
<Link to="/letterselcted/B" className="text-decoration-none text-white"><span  class="letter"> B </span> 
</Link><span class="mx-2"> / </span>
<Link to="/letterselcted/C" className="text-decoration-none text-white"><span  class="letter"> C </span> 
</Link><span class="mx-2"> / </span>
<Link to="/letterselcted/D" className="text-decoration-none text-white"><span  class="letter"> D </span> 
</Link><span class="mx-2"> / </span>
<Link to="/letterselcted/E" className="text-decoration-none text-white"><span  class="letter"> E </span> 
</Link><span class="mx-2"> / </span>
<Link to="/letterselcted/F" className="text-decoration-none text-white"><span  class="letter"> F </span> 
</Link><span class="mx-2"> / </span>
<Link to="/letterselcted/G" className="text-decoration-none text-white"><span  class="letter"> G </span> 
</Link><span class="mx-2"> / </span>
<Link to="/letterselcted/H" className="text-decoration-none text-white"><span  class="letter"> H </span> 
</Link><span class="mx-2"> / </span>
<Link to="/letterselcted/I" className="text-decoration-none text-white"><span  class="letter"> I </span> 
</Link><span class="mx-2"> / </span>
<Link to="/letterselcted/J" className="text-decoration-none text-white"><span  class="letter"> J</span> 
</Link><span class="mx-2"> / </span>
<Link to="/letterselcted/K" className="text-decoration-none text-white"><span  class="letter"> K </span> 
</Link><span class="mx-2"> / </span>
<Link to="/letterselcted/L" className="text-decoration-none text-white"><span  class="letter"> L </span> 
</Link><span class="mx-2"> / </span>
<Link to="/letterselcted/M" className="text-decoration-none text-white"><span  class="letter"> M </span> 
</Link><span class="mx-2"> / </span>
<Link to="/letterselcted/N" className="text-decoration-none text-white"><span  class="letter"> N </span> 
</Link><span class="mx-2"> / </span>
<Link to="/letterselcted/O" className="text-decoration-none text-white"><span  class="letter"> O </span> 
</Link><span class="mx-2"> / </span>
<Link to="/letterselcted/P" className="text-decoration-none text-white"><span  class="letter"> P </span> 
</Link><span class="mx-2"> / </span>
<Link to="/letterselcted/Q" className="text-decoration-none text-white"><span  class="letter"> Q </span> 
</Link><span class="mx-2"> / </span>
<Link to="/letterselcted/R" className="text-decoration-none text-white"><span  class="letter"> R </span> 
</Link><span class="mx-2"> / </span>
<Link to="/letterselcted/S" className="text-decoration-none text-white"><span  class="letter"> S </span> 
</Link><span class="mx-2"> / </span>
<Link to="/letterselcted/T" className="text-decoration-none text-white"><span  class="letter"> T </span> 
</Link><span class="mx-2"> / </span>
<Link to="/letterselcted/U" className="text-decoration-none text-white"><span  class="letter"> U </span> 
</Link><span class="mx-2"> / </span>
<Link to="/letterselcted/V" className="text-decoration-none text-white"><span  class="letter"> V </span> 
</Link><span class="mx-2"> / </span>
<Link to="/letterselcted/W" className="text-decoration-none text-white"><span  class="letter"> W </span> 
</Link><span class="mx-2"> / </span>
<Link to="/letterselcted/X" className="text-decoration-none text-white"><span  class="letter"> X </span> 
</Link><span class="mx-2"> / </span>
<Link to="/letterselcted/Y" className="text-decoration-none text-white"><span  class="letter"> Y </span> 
</Link><span class="mx-2"> / </span>
<Link to="/letterselcted/Z" className="text-decoration-none text-white"><span  class="letter"> Z </span> 
</Link>


</div>

</div>



  {/* <!-- start of form --> */}
    <section class="form-inputs mt-3 pb-5 wow slideInRight">
        <div class="container">
            <h3  className='text-white text-center my-5'>Contact Us</h3>
            <div class="row">
                <div class="offset-lg-1 col-lg-10">
                    <form class="shadow">
                        {/* <!-- 1 --> */}
                        <div class="d-lg-flex  gap-3">
                            <input type="text" required minlenght="5" maxlength="15" placeholder="Your Name" 
                            class="form-control mb-lg-0 mb-3" name="name" id="name"/>
                            <input type="email" required placeholder="Your Email" class="form-control" name="email"id="email"/>
                        </div>
                        <input type="text" placeholder="Subject" required class="form-control mt-3" name="subject" id="subject"/>
                        <textarea placeholder="Message" rows="5" class="form-control mt-3" name="Message" id="Message"></textarea>
                        <br />
                        <button className='position-relative translate-middle-x start-50'>
  <svg
    height="24"
    width="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
      fill="currentColor"
    ></path>
  </svg>
  <span>Launch</span>
</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- end of fotm --> */}
  </>
}
