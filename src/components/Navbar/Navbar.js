import './Navbar.css'

function Navbar() {
    return (
        <div className = 'Navbar'>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/#About">About</a>
                    </li>
                    <li>
                        <a href="/#Projects">Project</a>
                    </li>
                    <li>
                        <a href="/#Skills">Skill</a>
                    </li>
                    <li>
                        <a href="/#Contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

    
export default Navbar;