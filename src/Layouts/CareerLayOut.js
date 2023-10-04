import { Outlet } from "react-router-dom";
const CareersLayOut = () => {
    return ( 
        <div className="careers-layout">
            <h2>Careers</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus aliquam ex necessitatibus.</p>
            <Outlet />
        </div>
        
     );
}
 
export default CareersLayOut;