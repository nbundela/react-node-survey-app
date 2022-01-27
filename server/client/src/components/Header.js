import React, { Component } from 'react';
import { connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

export class Header extends Component {
    renderContent () {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login with GOOGLE</a></li>;
            default:
                return [
                    <li key="k1"><Payments/></li>,
                    <li key="k2" style={{margin: '0 10px'}}>Credits: {this.props.auth.credits}</li>,
                    <li key="k3"><a className="right"  href="/api/logout">Logout</a></li>
                ]
        }
    }
    render() {
        console.log(this.props)
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to={this.props.auth ? '/surveys' : '/'} 
                    className="brand-logo left">
                        Creative
                    </Link>
                <ul id="nav-mobile" className="right">
                    {this.renderContent()}
                </ul>
                </div>
            </nav>
        )
    }
}
//auth is a reducer
function mapStateToProps({auth}) {
    return {auth}
}

export default connect(mapStateToProps)(Header)
