import SocialLinkProp from "../../interfaces/SocialLinks/SocialLinkProp";
import SocialLink from "./SocialLink";


export default function SocialLinksNav() {

    const socialLinks : SocialLinkProp[] = [
        {
            img: "img/social/github.png",
            url: "https://github.com/taliyos",
            alt: "Charles' GitHub Page",
            index: 0
        },
        {
            img: "img/social/itch.svg",
            url: "https://taliyos.itch.io",
            alt: "Charles' Itch.io Page",
            index: 1
        },
        {
            img: "img/social/twitter.png",
            url: "https://twitter.com/taliyos",
            alt: "Charles' Twitter Profile",
            index: 2
        },
        {
            img: "img/social/linkedin.png",
            url: "https://linkedin.com/in/charles-reverand/",
            alt: "Charles' LinkedIn Portfolio",
            index: 3
        }
    ];
    
    return(
        <div className="social-links">
            { socialLinks && socialLinks.length > 0 ? (
                <div>
                    { 
                        socialLinks.map((link) => (
                            <SocialLink socialLink = {link}/>
                        ))
                    }
                </div>
            ) : (
                <div>
                    <p>Woah</p>
                </div>
            )}
        </div>
    );
}