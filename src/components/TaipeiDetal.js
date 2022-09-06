import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { taipeiView } from "../assets/taipei";
const TaipeiDetal = () => {
  const navigate = useNavigate();
  const { Id } = useParams();
  console.log(Id);
  const taipei = taipeiView.filter((item) => item.id == Id);
  return (
    <>
      {taipei.map((tpe) => (
        <div className="info" key={tpe.id}>
          <div className="desc-container">
            <img className="pic" src={tpe.images[0].src} alt={tpe.name} />
          </div>

          <div className="desc-container">
            <h2 className="desc">
              <div
                style={{
                  display: "flex",
                  width: "60vw",
                }}
              >
                <img
                  alt=""
                  onClick={() => navigate(-1)}
                  src="https://img.icons8.com/wired/30/FD7E14/chevron-left.png"
                />

                <p
                  style={{
                    display: "flex",
                    alignContent: "center",
                  }}
                >
                  {tpe.name}
                </p>
              </div>
            </h2>
            <p className="desc">{tpe.introduction}</p>
            <div className="desc">
              <p>開放時間</p>
              <p>{tpe.open_time}</p>
            </div>
            <div className="desc">
              <p>景點地址</p>
              <p>{tpe.address}</p>
            </div>
            {tpe?.Parkinginfo && (
              <div className="desc">
                <p>{tpe.Parkinginfo}</p>
              </div>
            )}
            {tpe?.Travellinginfo && (
              <div className="desc">
                <p>{tpe.Travellinginfo}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default TaipeiDetal;
