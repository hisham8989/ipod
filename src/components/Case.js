import React from 'react'
import '../css/case.css'
import Display from './Display'
import Wheel from './Wheel.js'

class Case extends React.Component {
  render() {
    const {
      menuItems,
      active,
      handleMenuItemsChange,
      handleScreenChange,
      activeScreen,
      activeMenu,
      handleActivateMenu,
    } = this.props
    return (
      <div className='case-container'>
        <div className='case'>
          <Display
            menuItems={menuItems}
            activeMenu={activeMenu}
            active={active}
            activeScreen={activeScreen}
          />
          <Wheel
            handleMenuItemsChange={handleMenuItemsChange}
            menuLength={menuItems.length}
            handleScreenChange={handleScreenChange}
            handleActivateMenu={handleActivateMenu}
          />
        </div>
      </div>
    )
  }
}

export default Case
