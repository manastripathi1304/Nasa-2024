import React, { useState, useRef, useEffect } from 'react';
import '../App.css';

const VideoComponent = () => {
  const [currentVideo, setCurrentVideo] = useState(1);
  const [isDeployButtonVisible, setIsDeployButtonVisible] = useState(false);
  const [isJWSTButtonVisible, setIsJWSTButtonVisible] = useState(false);
  const [isCaptureButtonVisible, setIsCaptureButtonVisible] = useState(false);
  const videoRef = useRef(null);

  const handleVideo1Ended = () => {
    setCurrentVideo(2);
  };

  const handleVideo3Ended = () => {
    setCurrentVideo(4);
  };

  const handleVideo4EndedOnce = () => {
    setIsDeployButtonVisible(true);
  };

  const handleLaunch = () => {
    setCurrentVideo(3);
  };

  const handleDeploy = () => {
    setIsDeployButtonVisible(false);
    setCurrentVideo(5);
  };

  const handleVideo5Ended = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pause Video 5 at the last frame
    }
    setIsJWSTButtonVisible(true); // Show JWST button
    setIsCaptureButtonVisible(true); // Show Capture button
  };

  const handleJWSTButtonClick = () => {
    setIsJWSTButtonVisible(false); // Hide JWST button
    setIsCaptureButtonVisible(true); // Show Capture button
    setCurrentVideo(6); // Start playing Video 6
  };

  const handleCaptureButtonClick = () => {
    setIsCaptureButtonVisible(false); // Hide Capture button
    setCurrentVideo(7); // Start playing Video 7
  };

  const handleVideo6Ended = () => {
    setIsCaptureButtonVisible(true); // Show Capture button after Video 6 ends
  };

  const handleVideo7Ended = () => {
    setIsJWSTButtonVisible(true); // Show JWST button after Video 7 ends
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [currentVideo]);

  return (
    <div className="video-container">
      {currentVideo === 1 && (
        <video
          ref={videoRef}
          className="video"
          autoPlay
          onEnded={handleVideo1Ended}
          playsInline
        >
          <source src="/videos/video1.mp4" type="video/mp4" />
        </video>
      )}

      {currentVideo === 2 && (
        <video
          ref={videoRef}
          className="video"
          autoPlay
          loop
          playsInline
        >
          <source src="/videos/video2.mp4" type="video/mp4" />
        </video>
      )}

      {currentVideo === 2 && (
        <button className="launch-button" onClick={handleLaunch}>
          Launch
        </button>
      )}

      {currentVideo === 3 && (
        <video
          ref={videoRef}
          className="video fade-in full-screen"
          autoPlay
          onEnded={handleVideo3Ended}
          playsInline
        >
          <source src="/videos/video3.mp4" type="video/mp4" />
        </video>
      )}

      {currentVideo === 4 && (
        <video
          ref={videoRef}
          className="video fade-in full-screen"
          autoPlay
          onPlay={handleVideo4EndedOnce}
          playsInline
        >
          <source src="/videos/video4.mp4" type="video/mp4" />
        </video>
      )}

      {isDeployButtonVisible && (
        <button className="deploy-button" onClick={handleDeploy}>
          Deploy
        </button>
      )}

      {currentVideo === 5 && (
        <video
          ref={videoRef}
          className="video fade-in full-screen"
          autoPlay
          onEnded={handleVideo5Ended}
          playsInline
        >
          <source src="/videos/video5.mp4" type="video/mp4" />
        </video>
      )}

      {isJWSTButtonVisible && (
        <button className="jwst-button" onClick={handleJWSTButtonClick}>
          JWST Trajectory
        </button>
      )}

      {isCaptureButtonVisible && (
        <button className="capture-button" onClick={handleCaptureButtonClick}>
          Capture Image
        </button>
      )}

      {currentVideo === 6 && (
        <video
          ref={videoRef}
          className="video fade-in full-screen"
          autoPlay
          onEnded={handleVideo6Ended}
          playsInline
        >
          <source src="/videos/video6.mp4" type="video/mp4" />
        </video>
      )}

      {currentVideo === 7 && (
        <video
          ref={videoRef}
          className="video fade-in full-screen"
          autoPlay
          onEnded={handleVideo7Ended}
          playsInline
        >
          <source src="/videos/video7.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default VideoComponent;
