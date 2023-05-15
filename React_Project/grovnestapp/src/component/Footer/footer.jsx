import React from "react";
import './footer.css';
const footer=()=>{
return (
<footer >
<div className="footer">
<ul className="container_footer">
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About Us</a></li>
        <li><a href='#'>Contact</a></li>
        <li><a href='#'>Menu</a></li>
    </ul>
   
    <div className="footer_copyright">
        <small>&copy; G..... All rights reserved</small>
    </div>
</div>
    
</footer>
)
}
export default footer;