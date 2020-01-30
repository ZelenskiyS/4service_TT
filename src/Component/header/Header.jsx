import React, {Component} from 'react';
import './header.css'

class Header extends Component {
    render() {
        return (
            <div className="mainBlock">
                <div className="mainBlock__logo">
                    <span className="mainBlock__logo_text">РАБОТА МЕЧТЫ</span>
                </div>
            </div>
        );
    }
}

export default Header;
