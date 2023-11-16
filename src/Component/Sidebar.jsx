import React, { useState } from 'react'
import Delivary from '../Pages/Delivary'
import Return from '../Pages/Return'

const Sidebar = () => {

    const [children, setChildren] = useState(<Delivary/>)

  return (
    <div>
        <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <a href="#" class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline"
                            onClick={()=>setChildren(<Delivary/>)}>Delivary</span>
                        </a>
                    </li>
                    
                  
                   
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline"
                            onClick={() => setChildren(<Return/>)}>Return</span> </a>
                    </li>
                </ul>
                <hr/>
               
            </div>
        </div>
        <div class="col py-3">
            
           {children}
        </div>
    </div>
</div>
    </div>
  )
}

export default Sidebar