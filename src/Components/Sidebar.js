import React from 'react'
import SidebarItem from './SidebarItem'
import items from "../data/sidebar.json"
import '../Styles/sidebar.css'


export default function Sidebar() {
  return (
      <div className="sidebar">
        <h5>Catogeries:</h5>
          { items.map((item, index) => <SidebarItem key={index} item={item} />) }
      </div>
  )
}
