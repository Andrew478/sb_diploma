import { Children } from "react";
import "./index.css";


const SimplePage = ({
    children
}) => {
    return (
        <div className="simple-page">
            {children}
        </div>
        
    );
}

export default SimplePage;