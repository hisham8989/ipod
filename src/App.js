import { Component } from 'react'
import './App.css'
import Case from './components/Case'
const menuItems = ["Now Playing", "Music", "Games", "Settings"];
class App extends Component {

  constructor(){
    super()
    this.state = {
      active:0,
      menuItems: menuItems,
      activeMenu:true,
      activeScreen:menuItems[0]
    }
  }

  handleMenuItemsChange = (activeIndex)=>{
    this.setState({
      active:activeIndex
    })
  }

  handleScreenChange = ()=>{
    this.setState({
      activeMenu:false,
      activeScreen:menuItems[this.state.active]
    })
  }

  handleActivateMenu = ()=>{
    this.setState({
      activeMenu:true,
    })
  }

  render() {
    const {active ,menuItems,activeScreen,activeMenu} = this.state
    return (
      <div className='App'>
        <Case active={active} activeScreen={activeScreen} menuItems={menuItems} activeMenu={activeMenu}handleMenuItemsChange={this.handleMenuItemsChange} handleScreenChange={this.handleScreenChange} handleActivateMenu={this.handleActivateMenu} />
      </div>
    )
  }
}

export default App
