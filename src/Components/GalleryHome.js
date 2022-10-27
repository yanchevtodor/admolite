import { Link } from "react-router-dom";
import images from "../Assets/gallery.json"


const GalleryHome = () => {

    return ( 
        <div className="image-gallery">
            <div className="wrapper">
            {
                images
                ?
                images.slice(0, 4).map( (image) => {
                    return(
                        <Link to={"/" + image.id} className="image" key={image.id}>
                        
                            <h3>{image.name}</h3>

                            <img src={image.src} alt={image.alt}/>

                        </Link>
                    )
                })
                :
                null
            }
            </div>
        </div>
     );
}
 
export default GalleryHome;