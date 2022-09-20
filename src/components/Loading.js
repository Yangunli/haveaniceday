import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        width: "99vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="dots-bars-3"></div>
    </div>
  );
};

export default Loading;
