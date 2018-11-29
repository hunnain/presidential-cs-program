import React, { Component } from 'react';
import './Navbar.css';
import logo from '../../assets/assets/logo/pics-logo.svg';
import { Link } from 'react-router-dom';
// import withRouter from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

class Navbar extends Component {
    state = { 
       
     }

     catd() {
        var div = document.getElementById('nav-flex-ul');
        var style = getComputedStyle(div);
        var state = style.getPropertyValue('display');
        if (state == 'none') {
            div.style.display = 'block';
        } else if (state == 'block') {
            div.style.display = 'none';
        }
    }

    render() { 
        return ( 
            <div className="navbar">
            
                <div class="container color">
                <div className="navbar_cont">
                    <div className="navbar-flex nav-flex-1"><Link to='/'><p><img src={logo} />PIAIC</p></Link>
                  

                   <div className="hamb-btn" onClick={() => {this.catd()}}>
                   <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC7SURBVGhD7djdCcJAEEXhaAWxFRvSYqwhYCu2YBGKhex6B+7rEJ+ScTkfzNssHMmPkAkAAIys937UXFtri+ZebJZoi0bn5rR802Jp0ejcnJae3i8rGp2bG+aKaO+gKfuMaC7R6FwAQFF6V8+aU7GZnbdOfzhnzUeHSlLbOxqdm9PSw2fKikbn5kb6IXFrvXymnGiLRueu05n/ftgBALvQu5oPdFuJRufmtMQHuq38dEW0xwc6AACwq2n6AiwYumzclQgXAAAAAElFTkSuQmCC" />
                   </div>

                    </div>
                    <div className="navbar-flex nav-flex-2"></div>
                    <div className="navbar-flex nav-flex-3">
                    {/* <p>Aftificial Inteligence</p> */}
                    <ul id="nav-flex-ul">
                    <Link to='/artificial-inteligence'> <li onClick={() => {console.log("Route changed")}}>Aftificial Inteligence</li></Link>
                        {/* <BrowserRouter></BrowserRouter> */}
                        <Link to='/cloud-native'>  <li>Cloud Native</li></Link>
                        <Link to='/about'>  <li>About</li></Link>
                        <Link to='/apply'>  <li>Apply</li></Link>
                        <Link to='/contact'>  <li>Contact</li></Link>
                    </ul>
                    
                    
                    
                    </div>
                    {/* <div className="navbar-flex nav-flex-4"><p>CloudNative</p></div>
                    <div className="navbar-flex nav-flex-5"><p>About</p></div>
                    <div className="navbar-flex nav-flex-6"><p>Apply</p></div>
                    <div className="navbar-flex nav-flex-7"><p>Contact</p></div> */}
                </div>
                </div>
            </div>
         );
    }
}
 
// export default withRouter(Navbar);
export default Navbar;


// class Home extends Component {
//   render() {
//     return (
//       <div>


//         <ul>
//           <li><Link to='/'>Home</Link></li>
//           <li><Link to='/about'>About</Link></li>
//           <li><Link to='/form'>Forms</Link></li>
//           <li><Link to='/ai'>Ai</Link></li>
//           <li><Link to='/cloudnative'>cloudNative</Link></li>
//         </ul>


//         <h1>This is home page</h1>
//       </div>
//     );
//   }
// }



// // export default withStyles(styles)(DenseAppBar);

// export default Home;

