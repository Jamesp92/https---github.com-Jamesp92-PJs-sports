import React from 'react';
import 'bulma/css/bulma.min.css';
import {MdSportsBaseball , MdSportsBasketball, MdOutlineSportsHockey ,MdOutlineSportsRugby} from "react-icons/md"

function NavBar() {
  return (
    <React.Fragment>
<div>
            <nav class="navbar" role="navigation" aria-label="main navigation">
              <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                <MdSportsBaseball/> 
                <MdOutlineSportsRugby/>
                <p>PJ's Sports</p>
                <MdSportsBasketball/>
                <MdOutlineSportsHockey/>
                </a>
            
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"> </span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>
            
              <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                  <a class="navbar-item">
                    Home
                  </a>
            
                  <a class="navbar-item">
                  MLB Highlights
                  </a>
            
                  <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                      More
                    </a>
            
                    <div class="navbar-dropdown">
                      <a class="navbar-item">
                        Live Sports
                      </a>
                      <a class="navbar-item">
                        Upcoming Games
                      </a>
                      <a class="navbar-item">
                        Sports History 
                      </a>
                      <hr class="navbar-divider"/>
                      <a class="navbar-item">
                        Report an issue
                      </a>
                    </div>
                  </div>
                </div>
            
                <div class="navbar-end">
                  <div class="navbar-item">
                    <div class="buttons">
                      <a class="button is-primary">
                        <strong>Sign up</strong>
                      </a>
                      <a class="button is-light">
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
    </React.Fragment>
  );
}

export default NavBar;