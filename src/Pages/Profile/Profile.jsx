import React from "react";
import "./Profile.scss";
import ProfileImg from "../../images/profile_1.jpeg";
import SignatureImg from "../../images/signature.svg";
import { FaCamera, FaUpload } from "react-icons/fa";
import RichTextEditor from "react-rte";
import { connect } from "react-redux";
import { FileUploader } from "../../Components/FileUploader/fileUploader";
import TakePhoto from "../../Components/Take Photo/WebCam";
import { addUserData } from "../../Redux/actions";

const toolbarConfig = {
  // Optionally specify the groups to display (displayed in the order listed).
  display: [
    "INLINE_STYLE_BUTTONS",
    "BLOCK_TYPE_BUTTONS",
    "LINK_BUTTONS",
    "BLOCK_TYPE_DROPDOWN",
    "HISTORY_BUTTONS",
  ],
  INLINE_STYLE_BUTTONS: [
    { label: "Bold", style: "BOLD", className: "custom-css-class" },
    { label: "Italic", style: "ITALIC" },
    { label: "Underline", style: "UNDERLINE" },
  ],
  BLOCK_TYPE_DROPDOWN: [
    { label: "Normal", style: "unstyled" },
    { label: "Heading Large", style: "header-one" },
    { label: "Heading Medium", style: "header-two" },
    { label: "Heading Small", style: "header-three" },
  ],
  BLOCK_TYPE_BUTTONS: [
    { label: "UL", style: "unordered-list-item" },
    { label: "OL", style: "ordered-list-item" },
  ],
};

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {startCamera: false, CurrPhoto : false, textDoc : RichTextEditor.createEmptyValue()};
  }

  componentDidMount() {
  }

  takeUserPhoto = (e, name) => {
    if (!window.mobileCheck()) {
      e.preventDefault();
      console.log("Coming");
      this.setState({ startCamera: true, CurrPhoto : name });
    }
    // TakePhoto();
  };
  detectMob() {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i,
    ];

    return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    });
  }

  handleCameraSubmit = (imageSrc) => {
    const {CurrPhoto} = this.state;
    if(CurrPhoto){
      console.log(imageSrc)
      console.log({...this.props.userData, [CurrPhoto] : imageSrc })
      this.props.addUserData({...this.props.userData, [CurrPhoto] : imageSrc });
      this.setState({ startCamera: false , CurrPhoto : false});
    }
  };

  
  FileOnChange = (e, name) => {
    this.props.addUserData({...this.props.userData,  [name] : window.URL.createObjectURL(e.target.files[0])});
  };

  onInputChange = (e) => {
    this.props.addUserData({...this.props.userData,  [e.target.name]: e.target.value });
  };

  onRichTextChange = (value) => {
    // console.log(value.toString('html'))
    this.setState({textDoc : value})
    // this.props.addUserData({...this.props.userData,  RichTextData: value });
  };

  render() {
    const {startCamera} = this.state;
    let title,firstName, middleName,lastName,displayImage,signatureUrl = "";
    let RichTextData = RichTextEditor.createEmptyValue();
    console.log(this.props)
    if(this.props.userData && this.props.userData["title"]){
      title = this.props.userData["title"]
    }
    if(this.props.userData && this.props.userData["firstName"]){
      firstName = this.props.userData["firstName"]
    }
    if(this.props.userData && this.props.userData["middleName"]){
      middleName = this.props.userData["middleName"]
    }
    if(this.props.userData && this.props.userData["lastName"]){
      lastName = this.props.userData["lastName"]
    }
    if(this.props.userData && this.props.userData["signatureUrl"]){
      signatureUrl = this.props.userData["signatureUrl"]
    }
    if(this.props.userData && this.props.userData["RichTextData"]){
      // RichTextData = this.props.userData["RichTextData"] //RichTextEditor.createValueFromString()
    }
    if(this.props.userData && this.props.userData["displayImage"]){
      displayImage = this.props.userData["displayImage"]
    }
    if(this.props.userData && this.props.userData["signatureUrl"]){
      signatureUrl = this.props.userData["signatureUrl"]
    }
    return (
      <>
        {startCamera && (
          <TakePhoto
            handleClose={() => {
              this.setState({ startCamera: false });
            }}
            handleCapture={(imageSrc) => {
              this.handleCameraSubmit(imageSrc);
            }}
          />
        )}
        <h6 className="text-white">Setting</h6>
        <div className=" d-flex  Profile">
          <div
            className="mx-2 p-0 border profile_left d-none d-lg-block">
            <div className="profile_left_Header text-center p-2 ">
              Professional Profile
            </div>
          </div>
          <div className="mx-2 border profile_right" >
            <div className="profile_form_container border row mx-2 my-3">
              <div className="col-md-4 pl-3 pr-0  py-2">
                <div className="d-flex flex-column">
                  <div className="profile_form_left_top">
                    <div className="profile_form_left_title">
                      Profile Picture
                    </div>
                    <div className="profile_form_left_image my-2">
                      <img
                        src={displayImage || ProfileImg}
                        alt="profile-img"
                        className="profile-img"
                        accept="image/*"
                      />
                    </div>
                    <div className="d-flex justify-content-center">
                      <FileUploader
                        name="profileUrl"
                        onChange={(e) => this.FileOnChange(e, "displayImage")}
                        className="upload-btn-fill btn btn-sm mr-2"
                        label="Upload"
                        icon={<FaUpload className="mr-2" 
                        accept="image/*"/>}
                      />
                      <FileUploader
                        label="Take Photo"
                        onClick={(e) => this.takeUserPhoto(e,"displayImage")}
                        className="upload-btn-outline btn btn-sm mr-2"
                        icon={<FaCamera className="mr-2" />}
                        capture
                        accept="image/*"
                      />
                    </div>
                    <div className="info-text">
                      For best results,use image at least 128px by 128px in jpg
                      format
                    </div>
                  </div>
                  <hr />
                  <div className="profile_form_left_bottom">
                    <div className="profile_form_left_title">Signature</div>
                    <div className="profile_form_left_image my-2">
                      <img
                        src={signatureUrl || SignatureImg}
                        alt="signature-img"
                        className="signature-img"
                      />
                    </div>
                    <div className="d-flex justify-content-center">
                      <FileUploader
                        name="signatureUrl"
                        onChange={(e) => this.FileOnChange(e, "signatureUrl")}
                        className="upload-btn-fill btn btn-sm mr-2"
                        label="Upload"
                        icon={<FaUpload className="mr-2" 
                        accept="image/*"/>}
                      />
                      {window.mobileCheck() && (
                        <FileUploader
                          name="signatureUrl"
                          onClick={(e) => this.takeUserPhoto(e,"signatureUrl")}
                          className="upload-btn-outline btn btn-sm mr-2"
                          label="Take Photo"
                          icon={<FaUpload className="mr-2" />}
                          capture
                          accept="image/*"
                        />
                      )}
                    </div>
                    <div className="info-text">
                      For best results,use image at least 256px in jpg format
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8 p-0 my-2">
                <div className="d-flex flex-column flex-wrap h-100">
                  <div className="d-flex profile_right_form_container">
                    <div className="mx-2">
                      <label htmlFor="Title" className="form-label">
                        Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => this.onInputChange(e)}
                        className="form-control form-control-sm"
                        placeholder="Dr."
                      />
                    </div>
                    <div className="mx-2 ">
                      <label htmlFor="FirstName" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        onChange={(e) => this.onInputChange(e)}
                        className="form-control form-control-sm"
                        name="firstName"
                        value={firstName}
                        placeholder="First Name"
                      />
                    </div>
                    <div className="mx-2">
                      <label htmlFor="MiddleName" className="form-label">
                        Middle Name
                      </label>
                      <input
                        type="text"
                        onChange={(e) => this.onInputChange(e)}
                        className="form-control form-control-sm"
                        name="middleName"
                        value={middleName}
                        placeholder="Middle Name"
                      />
                    </div>
                    <div className="mx-2">
                      <label htmlFor="Last Name" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        onChange={(e) => this.onInputChange(e)}
                        className="form-control form-control-sm"
                        name="lastName"
                        value={lastName}
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="text-editor flex-column flex_1 m-2 d-flex">
                    <label className="form-label">Profile</label>
                    <RichTextEditor
                      className="flex_1"
                      toolbarConfig={toolbarConfig}
                      value={this.state.textDoc}
                      onChange={this.onRichTextChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.userData,
});

const mapActionsToProps = {
  addUserData: addUserData
};

export default connect(mapStateToProps, mapActionsToProps)(Profile);
