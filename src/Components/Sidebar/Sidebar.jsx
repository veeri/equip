import React from "react";
import "./Sidebar.scss";
import {Link } from 'react-router-dom';
import { AiFillDashboard, AiFillSetting } from "react-icons/ai";
import { FaMeetup } from "react-icons/fa";
import { FcPortraitMode } from "react-icons/fc";
import FooterImg from "../../images/footer.png";
import { connect } from "react-redux";
// import { addUserData } from "../../Redux/actions";

const sidebarItems = [
  {
    key: "1",
    text: "Dashboard",
    link: "/Dashboard",
    icon: <AiFillDashboard />,
    submenu: false,
  },
  {
    key: "2",
    text: "Appontments",
    link: "#",
    icon: <FaMeetup />,
    submenu: false,
  },
  {
    key: "3",
    text: "Setting",
    link: "/Profile",
    icon: <AiFillSetting />,
    submenu: false,
  },
];
const Sidebar = (props) => {

  let displayImage =null;
  if(props.userData && props.userData.displayImage){
    displayImage = props.userData.displayImage
  }
  const showSidebar = sidebarItems.map((item, key) => {
      return (
        <li key={item.key}>
          {item.icon}
          <Link to={item.link}><span>{item.text}</span></Link>
        </li>
      );
  });
  return (
    <div className="sidebar">
      <div className="logo">
        <img alt={""} src="https://gust-production.s3.amazonaws.com/uploads/startup/panoramic_image/870810/linkedin_banner.jpeg" />

      </div>
      <div className="d-flex flex-column justify-content-center align-items-center profile mb-4">
        <div className="circle">
        {
          displayImage  ? <img alt={""} src={displayImage }/>
          :
          <FcPortraitMode size="72px" />
        }
          
        </div>
        <div>Title</div>
        <div className="profile_description">General Practitioner</div>
      </div>
      <ul className="sidebar-items">{showSidebar}</ul>
      <div className="sidebar_footer d-flex flex-column">
        <div className="footer_text">Powered by</div>{" "}
        
        <img alt={""} src={FooterImg} className="footer-img" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userData: state.userData,
});

export default connect(mapStateToProps, null)(Sidebar);
