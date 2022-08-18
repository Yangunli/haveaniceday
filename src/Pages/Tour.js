import { Outlet } from "react-router-dom";

const Tour = () => {
  return (
    <div className="container">
      <h1
        style={{
          position: "fixed",
          width: "100%",
          backgroundColor: "inherit",
          top: "15vh",
          color: "rgb(122, 93, 7)",
          fontWeight: "500",
        }}
      >
        來去高雄
      </h1>

      <Outlet />
    </div>
  );
};

export default Tour;
