import { ServicePharagraphBold } from "./ServicePharagraphBold"
import { PharagraphLight } from "../GeneralComponents/PharagraphLight"
import { Images } from "../GeneralComponents/Images"

export const ServiceItem = (prop) =>{
    return(
        <div className="container">
           <Images image={prop.image}/>
           <ServicePharagraphBold text={prop.BoldText}/>
           <div className="service-text">
                <PharagraphLight text={prop.LightText}/>
           </div>
           
        </div>



    )
}