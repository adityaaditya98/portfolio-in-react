
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "./assets/logo.png"
function Nav(){
    return (
        <div className="flex items-center justify-between">
            <div className="flex justify-start border-solid border-2 border-sky-500">
                <div className="flex flex-shrink-0 items-center">
                    <a href="/">
                        <img src={logo} className="mx-2" width={50} height={33} />
                    </a>
                </div>
            </div>  
            <div className="flex items-center justify-center gap-4 border-solid border-2 border-sky-500 ">
                <a
                    href="https://www.linkedin.com/in/aditya-boddu-2aaaba233/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin style={{ color: "white", width: "50px", height: "33px" }} />
                </a>
                <a
                    href="https://www.linkedin.com/in/aditya-boddu-2aaaba233/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                   <FaGithub style={{ color: "white", width: "50px", height: "33px" }} />
                </a>
                
            </div>
        </div>
    );
}
export default Nav;