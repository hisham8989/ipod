import React, { Component } from 'react'
import '../css/wheel.css'
import ZingTouch from 'zingtouch'

class Wheel extends Component {
  constructor() {
    super()
    this.angle = 0
    this.movement = 1
  }

  handleClickMenu = ()=>{
    // console.log(this.props);
    this.props.handleActivateMenu()

  }

  render() {
    return (
      <div className='wheel-container' id='wheel-container'>
        <div className='wheel' id='wheel'>
          <div className='controll' id='menu'>
            <div onClick={this.handleClickMenu}>MENU</div>
          </div>
          <div className='controll' id='forward'>
            <i className='fa-solid fa-forward-fast'></i>
          </div>
          <div className='controll' id='play-pause'>
            <div>
              <i className='fas fa-play'></i>
              <i className='fas fa-pause'></i>
            </div>
          </div>
          <div className='controll' id='reverse'>
            <i className='fas fa-fast-backward'></i>
          </div>
        </div>

        <div className='blank' id='blank'><button onClick={this.handleClick}>OK</button></div>
      </div>
    )
  }

  handleClick = ()=>{
this.props.handleScreenChange()
  }

  /**
   * 
   * 
    angle - The angle of the initial right most input, in relation to the unit circle.

    distanceFromOrigin - The angular distance traveled by the initial right most post.

    distanceFromLast - The change of angle between the last position and the current position. Positive denotes a counter-clockwise motion, while negative denotes a clockwise motion.

   * 
   */
   

  componentDidMount() {
    const wheel = document.getElementById('wheel')

    const activeRegion = ZingTouch.Region(wheel)
    let currentAngle = 15
    let activeIndex = 0
    let self = this
    let movement = 0
    activeRegion.bind(wheel, 'rotate', function(e) {
      currentAngle += e.detail.distanceFromLast;
      // let movement = Math.floor(currentAngle)

      if(currentAngle<0){
        movement++
        if(movement>15){
          movement = 0
          activeIndex--
      
          if(activeIndex<0){
            activeIndex= self.props.menuLength-1
          }
          // self.props.handleMenuItemsChange(activeIndex)
        }
      }else{
        movement++
        if(movement>15){
          movement = 0
          // activeIndex = (activeIndex+1)%4
          activeIndex++
          if (activeIndex>self.props.menuLength-1) {
            activeIndex = 0
          }
          // self.props.handleMenuItemsChange(activeIndex)
        }
      }
      self.props.handleMenuItemsChange(activeIndex)
      // console.log(movement);
      // console.log("Index",activeIndex);

    });
  }
}

export default Wheel
