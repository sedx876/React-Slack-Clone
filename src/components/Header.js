import React, { Component } from 'react'
import '../styles/Header.css'
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__left">
          <Avatar 
            className="header__avatar"
            alt="Sharon"
            src="me"
          />
          <AccessTimeIcon />

        </div>
        <div className="header__search">
          <SearchIcon />
          <input placeholder="PlaceholderSearch"></input>

        </div>
        <div className="header__right">
        <HelpOutlineIcon />

        </div>
      </div>
    )
  }
}
