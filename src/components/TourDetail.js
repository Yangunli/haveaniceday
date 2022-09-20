import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "./Loading";

const TourDetail = () => {
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { Id } = useParams();
  const fetchView = async () => {
    const { data } = await axios.get(
      `https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c`
    );
    const Info = data.data.XML_Head.Infos.Info.filter((item) => item.Id === Id);
    setContent(Info);
  };
  const navigate = useNavigate();

  useEffect(() => {
    fetchView();
    setIsLoading(false);
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
            <img className="pic" src={c.Picture1} alt={c.Name} />
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
                    alignItems: "center",
                  }}
                >
                  {c.Name}
                </p>
              </div>
            </h2>
            <p className="desc">{c.Description}</p>
            <div className="desc">
              <p>開放時間</p>
              <p>{c.Opentime}</p>
            </div>
            <div className="desc">
              <p>景點地址</p>
              <p>{c.Add}</p>
            </div>
            {c?.Parkinginfo && (
              <div className="desc">
                <p>{c.Parkinginfo}</p>
              </div>
            )}
            {c?.Travellinginfo && (
              <div className="desc">
                <p>{c.Travellinginfo}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default TourDetail;
