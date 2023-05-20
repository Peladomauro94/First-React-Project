import { SocialItem } from "./SocialItem"

export const FooterSocial = () =>{
    return(

        <div className="footer-social_item_div">
        <SocialItem img="./public/icons/facebook-icon.svg"/>
            <SocialItem img="./public/icons/twitter-icon.svg"/>
            <SocialItem img="./public/icons/instagram-icon.svg"/>
        </div>

    )
}