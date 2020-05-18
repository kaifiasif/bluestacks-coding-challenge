import React, { Component } from 'react';
import logo_bluestacks from '../../assets/Images/logo-bluestacks.png';

export default class NavigationComponent extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a title="BlueStacks" className="logo bs-logo navLogoHeight">
            <img
              className={'navImg'}
              src={logo_bluestacks}
              height="50"
              width="166"
              alt=" BlueStacks Android Emulator"
            />
          </a>
        </div>
      </nav>
    );
  }
}
