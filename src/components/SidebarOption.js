import React from 'react'
import '../styles/SidebarOption.css'

function SidebarOption({ Icon, title }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h3>{title}</h3> : 
      <h3><span classname="sidebarOption__hash">#</span> {title}</h3>}
    </div>
  )
}

export default SidebarOption
