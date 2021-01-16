import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaCamera } from "react-icons/fa";
import Webcam from "react-webcam";

const WebcamCapture = ({ handleClose, handleCapture }) => {
  const webcamRef = React.useRef(null);

  // const capture = React.useCallback(() => {
  //   const imageSrc = webcamRef.current.getScreenshot();
  //   if (handleCapture){} handleCapture(imageSrc);
  // }, [webcamRef]);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (handleCapture){} handleCapture(imageSrc);
  }, [webcamRef]);
  return (
    <div className="web-cam">
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-lg btn-primary  rounded-circle mr-3"
          onClick={capture}
        >
          <FaCamera />
        </button>
        <button
          className="btn btn-lg btn-danger  rounded-circle"
          onClick={handleClose}
        >
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
};

export default WebcamCapture;
