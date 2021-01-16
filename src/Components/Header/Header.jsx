import React from 'react'
import "./Header.scss";
import {MdMenu} from "react-icons/md";
import {AiFillSetting} from "react-icons/ai";
import { FcPortraitMode } from "react-icons/fc";

import { connect } from "react-redux";
export const Header = (props) => {
    
    const SidebarToggle = () =>{
       props.ToggleSidebar()
    }

    let displayImage =null;
    console.log(props.userData)
    if(props.userData && props.userData.displayImage){
      displayImage = props.userData.displayImage
    }

    return (
        <div className="header">
            <div className="d-flex justify-content-between">
                <div>
                    <MdMenu size={25} onClick={SidebarToggle}/>
                </div>
                <div>
                    <ul>
                        <li>
                            {
                                displayImage ? <img src={displayImage} width={40} height={30} style={{"borderRadius": "30px"}} alt="User Profile"/>
                                :
                                <FcPortraitMode size={25} />
                            }
                        </li>
                        <li>
                            <AiFillSetting  size={25}/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    userData: state.userData,
  });
  
  export default connect(mapStateToProps, null)(Header);
  