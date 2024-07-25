import './nav.css'
import {Link} from "react-router-dom";
import {useAuth} from "../contexts/authContext/index.jsx";
import {auth} from "../firebase/firebaseConfig.js";

const Nav = () =>{

    const currentUser = useAuth();

    const handleLogOut=()=>{
        return auth.signOut()
    }

    return(
            <nav className="nav-container">
                <div className="nav-content">
                    <div className='nav-divider'>
                        <Link to={'/'} className={"nav-link text-2xl"}><h1>GameHub</h1></Link>
                    </div>
                    <div className='nav-divider'>
                        <Link to="/" className={"nav-link"}>Home</Link>
                        <Link to="#" className={"nav-link"}>Contact</Link>
                        <Link to="#" className={"nav-link"}>About</Link>
                    </div>
                    <div className='nav-divider'>
                        {
                            currentUser.userLoggedIn === true ? (
                                <>
                                    <span>{currentUser.email}</span>
                                    <button onClick={handleLogOut} className={"text-red-600 hover:text-red-800"}>Logout</button>
                                </>
                            ) : (
                                <>
                                    <Link to="/register" className={"nav-link"}>Register</Link>
                                    <Link to="/login" className={"nav-link"}>Login</Link>
                                </>
                            )}
                    </div>
                </div>
            </nav>
    )
}

export default Nav;