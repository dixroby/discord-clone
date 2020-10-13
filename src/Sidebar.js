import React from 'react'
import "./Sidebar.css"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <h1>side bar</h1>
            <div className="sidebar_top">
                <h3>Dixroby AC</h3>
                <ExpandMoreIcon/>
                
            </div>
        </div>
    )
}
