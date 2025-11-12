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

  const isMobile = window.innerWidth < 768;
  const popupRef = useRef<HTMLDivElement>(null);

  // Pozicioni (vetëm për desktop)
  const [position, setPosition] = useState({
    x: window.innerWidth / 2 - 450,
    y: window.innerHeight / 2 - 300,
  });

  // Drag (desktop)
  const dragOffset = useRef({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const startDrag = (e: React.MouseEvent) => {
    if (isMobile) return;
    setDragging(true);
    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const duringDrag = (e: MouseEvent) => {
    if (!dragging || isMobile) return;
    setPosition({
      x: e.clientX - dragOffset.current.x,
      y: e.clientY - dragOffset.current.y,
    });
  };

  const stopDrag = () => setDragging(false);

  useEffect(() => {
    window.addEventListener("mousemove", duringDrag);
    window.addEventListener("mouseup", stopDrag);
    return () => {
      window.removeEventListener("mousemove", duringDrag);
      window.removeEventListener("mouseup", stopDrag);
    };
  }, [dragging, isMobile]);

  // ESC për mbyllje
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.45)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      <div
        ref={popupRef}
        style={{
          position: "absolute",
          left: isMobile ? "5%" : position.x,
          top: isMobile ? "5%" : position.y,
          width: isMobile ? "90%" : 900,
          height: isMobile ? "80%" : 550,
          background: "#000",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)",
          cursor: isMobile ? "default" : "grab",
          transition: "all 0.2s ease",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
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
            userSelect: "none",
          }}
        >
          <span
            style={{
              maxWidth: "75%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </span>
          <button onClick={onClose} style={btnStyle}>
            ✕
          </button>
        </div>

        {/* Player */}
        <div style={{ width: "100%", height: "calc(100% - 40px)" }}>
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
      </div>
    </div>
  );
};

// Butoni ✕
const btnStyle: React.CSSProperties = {
  background: "transparent",
  border: "none",
  color: "white",
  cursor: "pointer",
  fontSize: "18px",
  lineHeight: 1,
};

export default TrailerPopup;
