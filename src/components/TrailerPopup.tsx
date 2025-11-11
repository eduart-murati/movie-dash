import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  youtubeKey?: string;
  title?: string;
}

const TrailerPopup = ({ isOpen, onClose, youtubeKey, title }: Props) => {
  if (!isOpen) return null;

  // POSITION STATE
  const popupRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({
    x: window.innerWidth / 2 - 450,
    y: window.innerHeight / 2 - 300,
  });

  // SIZE STATE
  const [size, setSize] = useState({ width: 900, height: 550 });
  const minSize = { width: 400, height: 250 };

  // DRAGGING
  const dragOffset = useRef({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const startDrag = (e: React.MouseEvent) => {
    setDragging(true);
    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const duringDrag = (e: MouseEvent) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - dragOffset.current.x,
      y: e.clientY - dragOffset.current.y,
    });
  };

  const stopDrag = () => setDragging(false);

  // RESIZING
  const [resizing, setResizing] = useState(false);
  const resizeStart = useRef({ w: 0, h: 0, x: 0, y: 0 });

  const startResize = (e: React.MouseEvent) => {
    setResizing(true);
    resizeStart.current = {
      w: size.width,
      h: size.height,
      x: e.clientX,
      y: e.clientY,
    };
  };

  const duringResize = (e: MouseEvent) => {
    if (!resizing) return;
    const deltaX = e.clientX - resizeStart.current.x;
    const deltaY = e.clientY - resizeStart.current.y;

    setSize({
      width: Math.max(minSize.width, resizeStart.current.w + deltaX),
      height: Math.max(minSize.height, resizeStart.current.h + deltaY),
    });
  };

  const stopResize = () => setResizing(false);

  // ESC CLOSE
  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, []);

  // GLOBAL MOUSE LISTENERS FOR DRAG + RESIZE
  useEffect(() => {
    window.addEventListener("mousemove", duringDrag);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("mousemove", duringResize);
    window.addEventListener("mouseup", stopResize);

    return () => {
      window.removeEventListener("mousemove", duringDrag);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("mousemove", duringResize);
      window.removeEventListener("mouseup", stopResize);
    };
  });

  // MINIMIZE STATE
  const [minimized, setMinimized] = useState(false);

  const toggleMinimize = () => {
    if (!minimized) {
      setSize({ width: 300, height: 170 });
      setPosition({ x: window.innerWidth - 320, y: window.innerHeight - 200 });
    } else {
      setSize({ width: 900, height: 550 });
      setPosition({
        x: window.innerWidth / 2 - 450,
        y: window.innerHeight / 2 - 300,
      });
    }
    setMinimized(!minimized);
  };

  // FULLSCREEN TOGGLE
  const [fullscreen, setFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!fullscreen) {
      setSize({
        width: window.innerWidth - 40,
        height: window.innerHeight - 40,
      });
      setPosition({ x: 20, y: 20 });
    } else {
      setSize({ width: 900, height: 550 });
      setPosition({
        x: window.innerWidth / 2 - 450,
        y: window.innerHeight / 2 - 300,
      });
    }
    setFullscreen(!fullscreen);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.45)",
        zIndex: 9999,
        animation: "fadeIn 0.2s",
      }}
      onClick={onClose}
    >
      <div
        ref={popupRef}
        style={{
          position: "absolute",
          left: position.x,
          top: position.y,
          width: size.width,
          height: size.height,
          background: "#000",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)",
          cursor: dragging ? "grabbing" : "default",
          transition: fullscreen ? "all 0.2s ease" : undefined,
          animation: "zoomIn 0.15s",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER FOR DRAG */}
        <div
          onMouseDown={startDrag}
          style={{
            height: "40px",
            background: "#111",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 12px",
            cursor: "grab",
            userSelect: "none",
          }}
        >
          <span
            style={{
              maxWidth: "75%",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </span>

          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={toggleMinimize} style={btnStyle}>
              —
            </button>
            <button onClick={toggleFullscreen} style={btnStyle}>
              ⛶
            </button>
            <button onClick={onClose} style={btnStyle}>
              ✕
            </button>
          </div>
        </div>

        {/* VIDEO */}
        <div style={{ width: "100%", height: size.height - 40 }}>
          {youtubeKey && (
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${youtubeKey}`}
              width="100%"
              height="100%"
              controls
              playing
              config={{ youtube: { playerVars: { autoplay: 1 } } }}
              iframeAttrs={{
                allow:
                  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen",
              }}
            />
          )}
        </div>

        {/* RESIZE HANDLE */}
        <div
          onMouseDown={startResize}
          style={{
            position: "absolute",
            width: "20px",
            height: "20px",
            right: 0,
            bottom: 0,
            cursor: "nwse-resize",
            background: "rgba(255,255,255,0.1)",
          }}
        />
      </div>
    </div>
  );
};

const btnStyle: React.CSSProperties = {
  background: "transparent",
  border: "none",
  color: "white",
  cursor: "pointer",
  fontSize: "16px",
};

export default TrailerPopup;
