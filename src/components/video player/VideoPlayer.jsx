import React, { useRef, useEffect } from 'react'
import video from '../../assets/video.mp4'

const VideoPlayer = ({ playState, setPlayState }) => {
  const overlayRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setPlayState(false);
      }
    };

    if (playState) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [playState, setPlayState]);

  // Ensure playback starts when the player opens. Some browsers block
  // autoplay unless play() is invoked programmatically (even when muted).
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    if (playState) {
      // try to play; catch promise rejection silently
      const p = v.play();
      if (p && typeof p.then === 'function') {
        p.catch((err) => {
          // Autoplay failed (browser policy) — keep muted and show controls
          console.debug('Video play() rejected:', err);
        });
      }
    } else {
      v.pause();
      try { v.currentTime = 0; } catch {}
    }
  }, [playState]);

  const closePlayer = (e) => {
    // close only when clicking the overlay (not when interacting with the video)
    if (e.target === overlayRef.current) {
      if (videoRef.current) videoRef.current.pause();
      setPlayState(false);
    }
  };

  return (
    <div
      ref={overlayRef}
      onClick={closePlayer}
      className={`fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.9)] z-[100] ${
        playState ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
      } transition-opacity duration-300`}
      aria-hidden={!playState}
    >
      <video
        ref={videoRef}
        className="w-[50%] h-auto"
        autoPlay={playState}
        muted
        controls
        playsInline
        src={video}
      />
    </div>
  );
}

export default VideoPlayer