import React, { Component } from 'react'
import '../css/menu.css'
class Menu extends Component {
  render() {
    const { menuItems,active} = this.props
    return (
      <div className='menu-container'>
        <div className='menu'>
          <ul>
            {menuItems.map((item, index) => {
              return active === index ? (
                <li key={index} className='active'>
                  &nbsp;{item}
                </li>
              ) : (
                <li key={index}>&nbsp;{item}</li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default Menu
