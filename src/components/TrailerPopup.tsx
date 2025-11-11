import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  youtubeKey?: string;
  title?: string;
}

const TrailerPopup = ({ isOpen, onClose, youtubeKey, title }: Props) => {
  if (!isOpen) return null;

  const popupRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const startDrag = (e: React.MouseEvent) => {
    setDragging(true);
    const rect = popupRef.current!.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const duringDrag = (e: React.MouseEvent) => {
    if (!dragging) return;
    popupRef.current!.style.left = `${e.clientX - offset.x}px`;
    popupRef.current!.style.top = `${e.clientY - offset.y}px`;
  };

  const stopDrag = () => setDragging(false);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
      }}
      onMouseMove={duringDrag}
      onMouseUp={stopDrag}
    >
      <div
        ref={popupRef}
        style={{
          position: "absolute",
          left: "calc(50% - 450px)",
          top: "calc(50% - 275px)",
          width: "900px",
          height: "550px",
          background: "black",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)",
        }}
      >
        {/* Header for dragging */}
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
          <span>{title}</span>
          <button
            onClick={onClose}
            style={{
              border: "none",
              background: "transparent",
              color: "white",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>

        {/* VIDEO */}
        <div style={{ width: "100%", height: "calc(100% - 40px)" }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${youtubeKey}`}
            width="100%"
            height="100%"
            controls
            playing={true}
            config={{
              youtube: {
                playerVars: { autoplay: 1 },
              },
            }}
            iframeAttrs={{
              allow:
                "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TrailerPopup;
