import ProfilePicture from "../ProfilePicture/ProfilePicture";

export default function AboutMe() {

    return (
        <div className = "about">
            <div className = "name">
                <h1>Charles Reverand</h1>
                <span>RPI '24 Computer Science and Games and Simulation Arts and Sciences</span>
            </div>
            <div className = "info">
                <ProfilePicture/>
                <div>
                    Hiya! I'm a current senior Computer Science student, dual majoring in GSAS, with a passion for game development.
                </div>
            </div>
        </div>
    );
}