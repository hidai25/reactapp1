import React, {Component} from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{
render(){
  return(
     <React.Fragment>
       <Navbar dark expand="md">
         <div className="container">
             <NavbarBrand className="mr-auto"  href="/"><img src="assets/images/logo.png" height="30" width="41"/></NavbarBrand>
             <Collapse>
        <Nav navbar>
          <NavItem>
            <NavLink>
              <span className="fa fa-home fa-lg"></span> home
              </NavLink className="navlink" to="/home">
          </NavItem>
          <NavItem>
            <NavLink>
              <span className="fa fa-info fa-lg"></span> About Us
              </NavLink className="navlink" to="/aboutus">
          </NavItem>
          <NavItem>
            <NavLink>
              <span className="fa fa-list fa-lg"></span> Menu
              </NavLink className="navlink" to="/menu">
          </NavItem>
          <NavItem>
            <NavLink>
              <span className="fa fa-address-card fa-lg"></span> Contact Us
              </NavLink className="navlink" to="/contactus">
          </NavItem>
        </Nav>
        <Collapse>
        </div>
       </Navbar>
       <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>Ristorante con Fusion</h1>
                        <p>We take inspiration from the Worlds best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                    </div>
                </div>
            </div>
        </Jumbotron>
     </React.Fragment>

  );
}


}

export default Header;
