import "./index.css";
import SiteImages from "../../assets/images";


const BrandLine = () => {
    return (
        <div className="brand-line">
            <img src={SiteImages['brand01']} className="brand-line-img"></img>
            <img src={SiteImages['brand02']} className="brand-line-img"></img>
            <img src={SiteImages['brand03']} className="brand-line-img"></img>
            <img src={SiteImages['brand04']} className="brand-line-img"></img>
            <img src={SiteImages['brand05']} className="brand-line-img"></img>

            <img src={SiteImages['brand06']} className="brand-line-img"></img>
            <img src={SiteImages['brand07']} className="brand-line-img"></img>
            <img src={SiteImages['brand08']} className="brand-line-img"></img>
            <img src={SiteImages['brand09']} className="brand-line-img"></img>
            <img src={SiteImages['brand10']} className="brand-line-img"></img>

            <img src={SiteImages['brand11']} className="brand-line-img"></img>
            <img src={SiteImages['brand12']} className="brand-line-img"></img>
        </div>
    )
}

export default BrandLine;