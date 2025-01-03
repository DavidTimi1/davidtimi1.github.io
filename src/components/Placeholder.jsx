import "./Placeholder.css";
import cookingGIF from "../assets/cooking1.gif";


const Placeholder = () => (
    
		<div className="App bg-img" style={{backgroundImage: `url(${cookingGIF})`}}>
        <div className="max">
            <div className='abs-mid placeholder' style={{aspectRatio: "338/414", filter: "brightness(1)"}}>
                <img src={cookingGIF} className='fw' style={{objectFit: "cover"}} />

                <h3 className="abs-mid" style={{top: "100px", textWrap: "nowrap"}}>
                    Chill ... lemme cook 🔥🔥🔥
                </h3>
            </div>
        </div>
    </div>
)


export default Placeholder