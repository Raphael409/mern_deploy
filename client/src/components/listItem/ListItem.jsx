import {
  PlayArrow
} from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./listItem.scss";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL })

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axiosInstance.get("/movies/find/" + item);
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getMovie();
  }, [item])

  return (
    <Link to="/watch" state={{ movie: movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={movie.imgTitle}
          alt="img"
        />
        {isHovered && (
          <>
            <video src={movie.video} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
              </div>
              <div className="desc">
                {movie.desc}
              </div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
