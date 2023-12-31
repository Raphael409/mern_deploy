import { PlayArrow } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./featured.scss";

export default function Featured({ type }) {

  const [movie, setMovie] = useState({});
  const [content, setContent] = useState({});
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL })

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axiosInstance.get(`/movies/random?type=${type}`);
        setContent(res.data[0]);
        setMovie(res.data[0])
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img className="imgTitle"
        src={content.img}
        alt=""
      />
      <div className="info">
        <span className="desc">
          {content.desc}
        </span>
        <Link to="/watch" state={{ movie: movie }} className="link">
          <div className="buttons">
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
            {/* <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button> */}
          </div>
        </Link>
      </div>
    </div>
  );
}
