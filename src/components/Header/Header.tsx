import HeaderProp from "../../interfaces/Header/HeaderProp";
import SocialLinksNav from "../SocialLinks/SocialLinksNav";
import "../../styles/Header/header.sass"

export default function Header(props: HeaderProp) {
    

    return (
        <div className = {props.fullPage ? "fullPage" : "halfPage" }>
            <SocialLinksNav/>
            {props.children}
        </div>
    )
}