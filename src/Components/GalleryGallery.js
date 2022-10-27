import { Link } from "react-router-dom";
import images from "../Assets/gallery.json"


const GalleryGallery = () => {
    return ( 
        <div className="image-gallery">
            {
                images
                ?
                images.map( (image) => {
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
     );
}
 
export default GalleryGallery;