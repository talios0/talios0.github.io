import PageNavProp from "../../interfaces/PageNav/PageNavProp";

export default function PageNavButton(props: { info : PageNavProp }) {

    return (
        <a className = "button" href = {props.info.url}>
            <div>{props.info.name}</div>
        </a>
    );
}