import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import logo from './transformxlogo.png'

function Header() {
    const auth = useSelector(state => state.auth)

    const { user, isLogged } = auth


    const handleLogout = async () => {
        try {
            await axios.get('/user/logout')
            localStorage.removeItem('firstLogin')
            window.location.href = "/";
        } catch (err) {
            window.location.href = "/";
        }
    }

    const userLink = () => {
        return <ul> 
        <li><Link to="/"><i className="fas fa-shopping-cart"></i> Cart</Link></li>
        <li className="drop-nav">
            <Link to="#" className="avatar">
                <img src={user.avatar} alt="" /> {user.name} <i style={{ margin: '2px', color: '#111' }} className="fas fa-angle-down"></i>
            </Link>
            <ul className="dropdown">
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
            </ul>
        </li>
        </ul>
    }

    const userLoggedNav = () => {
        return <ul >
        <li><a href="/" ><img alt="logo" className="logo" src={logo} /></a></li>
        <li><Link to="/vendors" style={{padding:'8px',margin:'8px'}}>Vendors</Link></li>
        <li><Link to="/apis" style={{padding:'8px',margin:'8px'}}>APIs</Link></li>
        <li><Link to="/usecases" style={{padding:'8px',margin:'8px'}}>Use Cases</Link></li>
        <li><Link to="/userstories" style={{padding:'8px',margin:'8px'}}>Success Stories</Link></li>
    </ul>
    }

    const transForm = {
        transform: isLogged ? "translateY(-5px)" : 0
    }

    return (
        <header >
            <ul style={transForm}>
                {
                    isLogged
                        ? userLoggedNav()
                        : <div className="logo">
                       <a href="/" ><img alt="logo" className="logo" src={logo} /></a> 
                    </div>
                }
            </ul>

            <ul style={transForm}>
                
                {
                    isLogged
                        ? userLink()
                        : <li><Link to="/login"><i className="fas fa-user"></i> Sign in</Link></li>
                }

            </ul>
        </header>
    )
}

export default Header
