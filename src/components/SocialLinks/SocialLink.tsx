import SocialLinkProp from "../../interfaces/SocialLinks/SocialLinkProp";

export default function SocialLink(props: { socialLink: SocialLinkProp }) {

    return(
        <a href={props.socialLink.url}>
            <img src={props.socialLink.img} alt={props.socialLink.alt}/>
        </a>
    );
}