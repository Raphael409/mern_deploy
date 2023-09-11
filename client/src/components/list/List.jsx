import { useRef } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";

export default function List({ list }) {

  const listRef = useRef();

  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <div className="container" ref={listRef}>
          <div className="flex-wrap">
            {list.content.map((item, i) => (
              <div className="videoItem">
                <ListItem index={i} item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
