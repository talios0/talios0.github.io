import PageNavButton from "./PageNavButton";
import PageNavProp from "../../interfaces/PageNav/PageNavProp";

import "../../styles/navigation.sass"

export default function PageNav() {
    
    const buttons : PageNavProp[] = [
        {
            name: "Home",
            url: "./",
        },
        {
            name: "Education",
            url: "/education"
        },
        {
            name: "Projects",
            url: "/projects"
        },
        {
            name: "Work",
            url: "/work"
        }
    ];
    
    return (
        <nav>
        { buttons.map((button) => (
            <PageNavButton info = {button}/>
        ))}
        </nav>
    );
}