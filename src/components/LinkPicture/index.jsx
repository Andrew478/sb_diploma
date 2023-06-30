import "./index.css";
import SiteImages from "../../assets/images";


/* Пропсы
    - может иметь текст или не иметь
*/
const LinkPicture = ({
    img = "peopleDefault",
    hasText = false,
    text = "Sample Text",
    textType = 1
}) => {
    
    return (
      <div className="link-picture">
        <div className="link-picture__img-container">
            <img src={SiteImages[img]} className="link-picture__img"></img>
        </div>
        <p className="link-picture__text" >{text}</p>
      </div>  
    );
}

export default LinkPicture;