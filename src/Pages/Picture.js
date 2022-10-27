import { Link, useParams } from "react-router-dom";
import images from "../Assets/gallery.json"

const Picture = () => {

    const pictureId = useParams();

    const image = images.find( image => image.id == pictureId.picId);
    console.log(image.src);
    return ( 
        <div className="picture" >
            <div className="wrapper" >
                <h2>{image.name}</h2>
                <img src={image.src} alt={image.alt}/>
            </div>
        </div>
     );
}
 
export default Picture;