import React from 'react'
import $ from "jquery"

export default function BoxIcons() {



    $(window).scroll(function () {
        let windowTop=$(window).scrollTop()
        
      
        
        if(windowTop>200)
        {
          // $(".arrowUp").addClass("d-flex")
        
          $(".arrowCont").fadeIn(1000)
        
        }
        else
        {
          $(".arrowCont").fadeOut(1000)
          // $(".arrowUp").removeClass("d-flex")
        
        
        }
        
        
        
        
        
        
        
        
        
        })
        
        

        function  arrowUpFun()
        {
          
                $("html,body").animate({scrollTop:0},1500)
        }


  return <>
  
    <div className="container">
        <div className="row">
            

        <div className="up-icon text-white arrowCont "  title="Arrow up" onClick={arrowUpFun}>
  <i className="fa-solid fa-plane-up"></i>
  
</div>


            
        </div>
    </div>
  
  </>
}
