import React, { Component } from 'react'
import '../css/display.css'
import Menu from './Menu'
class Display extends Component {
// ["Now Playing", "Music", "Games", "Settings"];
  renderScreen = ()=>{
    const {activeScreen} = this.props
    if(activeScreen === 'Now Playing'){
      return <h1>Now Playing</h1>
    }
    if(activeScreen === 'Music'){
      return <h1>Music</h1>
    }
    if(activeScreen === 'Games'){
      return <h1>Games</h1>
    }
    if(activeScreen === 'Settings'){
      return <h1>Settings</h1>
    }
  }

  render() {
    const {menuItems,active,activeMenu} = this.props
    return (
      <div className='display'>

        {activeMenu?<Menu menuItems={menuItems} active={active} />:this.renderScreen() }
      </div>
    )
  }
}

export default Display
