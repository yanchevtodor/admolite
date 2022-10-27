import image from "../Assets/images/purviqt-muj-kacnal-na-lunata-kartina.jpg"

const TextSection = () => {
    return ( 
        <div className="text-section">
           
           <div className="wrapper">
                <div className="text-section-image">
                    <img src={image} />
                </div>
                <div className="text-section-text">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                </div>
           </div>
        </div>
     );
}
 
export default TextSection;