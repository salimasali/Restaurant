import React from 'react'
import './Header.css'

function Header() {
    return (
        <div>
            <div className="main-header">
               <div> <h3 className="heading">Restaurant Application</h3></div>
               <div className="row"><a class="na" href="/#">Home</a></div>
               <div className="row"><a class="na" href="/#">Items</a></div>
               <div className="row"><a class="na" href="/#">Orders</a></div>
               <div className="row"><a class="na" href="/#">Contact</a></div>
               
            </div>
        </div>

    )
}

export default Header