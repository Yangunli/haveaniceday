import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "./Loading";

const KeelungDetail = () => {
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { Id } = useParams();
  const navigate = useNavigate();
  const fetchView = async () => {
    const { data } = await axios.get(
      `https://cors.eu.org/https://tour.klcg.gov.tw/data/attractions.json`
    );
    const Info = data.attractions.filter((item) => item.id === Id);
    setContent(Info);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchView();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {content.map((c) => (
        <div className="info">
          <div className="desc-container">
            <img className="pic" src={c.cover_image} alt={c.title} />
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

                <p style={{ display: "flex", alignContent: "center" }}>
                  {c.title}
                </p>
              </div>
            </h2>
            {/* <p className="desc">{c.Description}</p> */}
            <div className="desc">
              <p>開放時間</p>
              <p>{c.visit_hours}</p>
            </div>
            <div className="desc">
              <p>景點地址</p>
              <p>{c.address}</p>
            </div>
            {/* {c?.Parkinginfo && (
              <div className="desc">
                <p>{c.Parkinginfo}</p>
              </div>
            )}
            {c?.Travellinginfo && (
              <div className="desc">
                <p>{c.Travellinginfo}</p>
              </div>
            )} */}
          </div>
        </div>
      ))}
    </>
  );
};

export default KeelungDetail;
