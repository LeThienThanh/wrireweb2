import React, {Component} from 'react'
import SideBar from './SideBarAdmin'

const Header = (props) => {
  return (
    <div className='flex justify-between w-full'>
        <div> {props.name}</div>        
        <div>Lê Cung Tiến</div>

    </div>
  )
}

// class Header extends Component{
//   render(){
//     return
//   }
// }
export default Header