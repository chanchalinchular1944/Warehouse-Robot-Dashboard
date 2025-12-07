import React, { useRef, useState } from "react";
import useStore from "../store/useStore";

export default function MapPage() {
  const bots = useStore(state => state.bots);
  const fileRef = useRef();
  const [svgContent, setSvgContent] = useState("");

  const handleUpload = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = (ev) => setSvgContent(ev.target.result);
    reader.readAsText(f);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Map (Bonus)</h1>
      <div className="mb-4">
        <input type="file" accept=".svg" ref={fileRef} onChange={handleUpload} />
      </div>

      <div className="bg-white rounded p-4 shadow">
        {svgContent ? (
          <div style={{ position: "relative" }}>
            <div dangerouslySetInnerHTML={{ __html: svgContent }} />
            {/* Overlay bots as absolute-positioned circles for demo.
                In real app you'd parse viewbox and convert coords. */}
            <div style={{ position: "absolute", left: 0, top: 0, pointerEvents: "none" }}>
              {bots.map(b => (
                <div key={b.id} style={{
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                  left: `${b.coords.x}px`,
                  top: `${b.coords.y}px`
                }}>
                  <div className="w-4 h-4 rounded-full bg-blue-600 border-2 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-gray-500">Upload an SVG warehouse layout to render bots on the map.</div>
        )}
      </div>
    </div>
  );
}
