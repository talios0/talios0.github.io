import AboutMe from "../AboutMe/AboutMe";
import PageNav from "../PageNav/PageNav";
import SocialLinksNav from "../SocialLinks/SocialLinksNav";

export default function Header() {
    

    return (
        <div className = "header">
            <SocialLinksNav/>
            <AboutMe/>
            <PageNav/>
        </div>
    )
}