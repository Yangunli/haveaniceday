import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const Keelung = () => {
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchView = async () => {
    const { data } = await axios.get(
      ` https://cors.eu.org/https://tour.klcg.gov.tw/data/attractions.json/`
    );

    // console.log(data.attractions);
    setContent(data.attractions);
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
    <div className="list-container">
      {content
        .filter((c) => c.title !== "大武崙砲台")
        .map((c) => {
          return (
            <div key={c.id} className="list">
              <Link className="link" to={`/haveaniceday/keelung/${c.id}`}>
                <img className="pic2" src={c.cover_image} alt={c.title} />
                <p>{c.title}</p>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Keelung;
