import {FaGithub, FaLinkedin} from "react-icons/fa"
import './Home.css';

function Home() {
    return (
        <div className ="home">
            <h1>Vincent Siow</h1>
            <p>My Personal Page</p>
            <p>Just a guy that grow to love coding</p>

            <ul>
                <li>
                    <a href="https://github.com/Vincentyr/"
                    target ="_blank"
                    rel="noopenner noreferrer"><FaGithub /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/siow-yong-ren-0b5541125/"
                    target ="_blank"
                    rel="noopenner noreferrer"><FaLinkedin /></a>
                </li>
            </ul>
        </div>          
    )
}

export default Home;