import "../App.css"
import {useState} from "react"

function POSTModal(props){
    const [filename, setFilename] = useState("Selecionar imagem");

    async function postUser(e){
        e.preventDefault();
        const formData = new FormData(e.target);

        if(formData.get("file").size == 0){
            alert("Selecione uma imagem");
        }else if(formData.get("name").length == 0){
            alert("Nome não pode ser vazio");
        }else if(formData.get("author").length == 0){
            alert("Autor não pode ser vazio");
        }else if(formData.get("album").length == 0){
            alert("Álbum não pode ser vazio");
        }else if(formData.get("year_release_date").length == 0){
            alert("Ano de lançamento não pode ser vazio");
        }else if(formData.get("plays") == []){
            alert("Reproduções não pode ser vazio");
        }else{
            await fetch("http://localhost:8800/insert", {
                method: "POST",
                body: formData
            });

            window.location.reload();
        }
    }

    function uploadFile(e){
        const uploadedFile = e.target.files[0];

        if(uploadedFile != undefined){
            setFilename(uploadedFile.name);
        }
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <form onSubmit={postUser}>
                    <h1> Adicionar Usuário </h1>
                    <div className="file-div">
                        <label for="file"> {filename} </label>
                        <input id="file" className="modal-content-file-input" name="file" type="file" onChange={uploadFile}></input>
                    </div>
                    
                    <input className="modal-content-input" name="name" type="text" placeholder="Nome"></input>
                    <input className="modal-content-input" name="author" type="text" placeholder="Autor"></input>
                    <input className="modal-content-input" name="album" type="text" placeholder="Álbum"></input>
                    <input className="modal-content-input" name="year_release_date" type="text" placeholder="Ano de Lançamento"></input>
                    <input className="modal-content-input" name="plays" type="text" placeholder="Reproduções"></input>
                    <button type="submit" className="modal-btn POSTModal-add-btn"> Adicionar </button>
                    <button className="modal-btn modal-close-btn" onClick={() => props.closeModal()}> Fechar </button>
                </form>
            </div>
        </div>
    )
}

export default POSTModal