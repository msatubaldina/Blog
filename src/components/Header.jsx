import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
        <div className="container">
            <div className="header__wrapper">
                <div className="header__logo">
                    <Link to='/'>Your Name</Link>
                </div>
                <div className="header__navs">
                    <div className="header__navs-list">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/posts">Posts</Link>
                            </li>
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                                <Link></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header