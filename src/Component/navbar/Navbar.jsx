import React, {Component} from 'react';
import './navbar.css';
import './image/Dashboard@1X.png'

class Navbar extends Component {
    render() {
        return (
            <nav className="Menu" >
                <ul className="Menu__sidebar">
                    <li className="Menu__sidebar__items"><a className="Menu__sidebar__items_link" href="/"><div className='divLogo'><img className='navLogo' src="Dashboard@1X.png" alt=""/>Home</div></a></li>
                    <li className="Menu__sidebar__items"><a className="Menu__sidebar__items_link" href="/timeManagment">Time Management</a></li>
                    <li className="Menu__sidebar__items"><a className="Menu__sidebar__items_link" href="#">Inbox</a></li>
                    <li className="Menu__sidebar__items"><a className="Menu__sidebar__items_link" href="#">Calendar</a></li>
                    <li className="Menu__sidebar__items"><a className="Menu__sidebar__items_link" href="#">Analytics</a></li>
                    <li className="Menu__sidebar__items"><a className="Menu__sidebar__items_link" href="#">Settings</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
