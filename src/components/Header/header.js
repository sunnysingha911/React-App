import React from 'react';
import './header.css';
import {BrowserRouter,Route,Switch,NavLink} from 'react-router-dom';
import Home from '../Pages/Home/home';
import Product from '../Pages/Products/product';
import Blog from '../Pages/Blog/blog';
import Contact from '../Pages/Contact/contact';
import Login from '../Pages/Login/login';

class Header extends React.Component{
    state={
        isNavOpen:false
    }
    handleClick=()=>{
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        })
    }
    render() {
        return (
            <BrowserRouter>
                <nav className="nav">
                    <div className="logo">
                        <NavLink to ="/Home">UI/UX</NavLink>
                        <div className="menu-bar" onClick={this.handleClick}>
                            <i className={this.state.isNavOpen ?  "fa fa-times fa-2x" : "fa fa-bars fa-2x"} aria-hidden="true"></i>
                        </div>
                    </div>
                    
                    <ul className={this.state.isNavOpen ? "showNav" : "undefined"}>
                        <li><NavLink onClick={this.handleClick} to ="/Home">Home</NavLink></li>
                        <li><NavLink onClick={this.handleClick} to ="/components/Pages/Products/product">Products</NavLink></li>
                        <li><NavLink onClick={this.handleClick} to ="/components/Pages/Blog/blog">Blog</NavLink></li>
                        <li><NavLink onClick={this.handleClick} to ="/components/Pages/Contact/contact">Contact</NavLink></li>
                        <li><NavLink onClick={this.handleClick} to ="/components/Pages/Login/login">Login</NavLink></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/components/Pages/Products/product" component={Product} />
                    <Route path="/components/Pages/Blog/blog" component={Blog} />
                    <Route path="/components/Pages/Contact/contact" component={Contact} />
                    <Route path="/components/Pages/Login/login" component={Login} />
                    <Route path="" component={Home} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Header;
