import React from 'react'
import '../styles/Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption'
import InsertCommentIcon from '@material-ui/icons/InsertComment';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
      <div className="sidebar__info">
      <h2>Sharon Watkins</h2>
        <h3>
          <FiberManualRecordIcon />
          Mike
        </h3>
      </div>
      <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
    </div>
  )
}

export default Sidebar
