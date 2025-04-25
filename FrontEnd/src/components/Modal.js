import "../App.css"

function Modal(props){
    return(
        <div className="modal">
            <div className="modal-content">
                <h1> Mais informações </h1>
                <p><strong> Álbum:  </strong> {props.itemClicked.album} </p>
                <p><strong> Ano de Lançamento:  </strong> {props.itemClicked.year_release_date} </p>
                <p><strong> Reproduções:  </strong> {props.itemClicked.plays} </p>
                <button className="modal-btn modal-close-btn" onClick={() => props.closeModal()}> Fechar </button>
            </div>
        </div>
    )
}

export default Modal;