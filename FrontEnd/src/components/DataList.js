import { useState, useEffect } from "react";
import { deleteUser } from "./DELETE";
import "../App.css";

function DataList(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8800/")
    .then(response => response.json())
    .then(data => setData(data));
  }, []);

  return (
    <div className="listContainer">
      <h2> Listagem de Músicas </h2>
      <ul className="user-grid">
        <button className="addUserBtn" onClick={() => props.addUserClick()}> + </button>
        {data.map((music) => 
            <li key={music.id}>
                <img className="card-img" src={`http://localhost:8800/uploads/${music.image_name}`} />
                <div> {music.name} </div>
                <div> {music.author} </div>
                <div className="update-delete-div">
                  <div className="modal-btn POSTModal-add-btn" onClick={() => props.updateUserClick(music)}> Editar </div>
                  <div className="modal-btn delete-btn" onClick={() => deleteUser(music)}> Excluir </div>
                </div>
                <button className="modal-btn modal-close-btn" onClick={() => props.clicked(music)}>
                  Mais detalhes
                </button>
            </li>
        )}
      </ul>
    </div>
  );
}

export default DataList;