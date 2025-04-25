import DataList from "./components/DataList"
import Modal from "./components/Modal"
import POSTModal from "./components/POSTModal"
import UPDATEModal from "./components/UPDATEModal"
import Footer from "./components/Footer"
import { useState, useEffect } from "react";

function App(){
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [POSTModalIsOpen, setPOSTModalIsOpen] = useState(false);
  const [UPDATEModalIsOpen, setUPDATEModalIsOpen] = useState(false);
  const [itemClicked, setItemClicked] = useState(null);

  function clicked(item){
    setModalIsOpen(true);
    setItemClicked(item);
  }

  function addUserClick(){
    setPOSTModalIsOpen(true);
  }

  function updateUserClick(user){
    setUPDATEModalIsOpen(true);
    setItemClicked(user);
  }

  function closeModal(){
    setModalIsOpen(false);
    setItemClicked(null);
  }

  function closePOSTModal(){
    setPOSTModalIsOpen(false);
  }

  function closeUPDATEModal(){
    setUPDATEModalIsOpen(false);
  }

  return (
    <div>
      <DataList clicked={clicked} addUserClick={addUserClick} updateUserClick={updateUserClick} />

      {modalIsOpen && <Modal itemClicked={itemClicked} closeModal={closeModal} />}

      {POSTModalIsOpen && <POSTModal closeModal={closePOSTModal} />}

      {UPDATEModalIsOpen && <UPDATEModal itemClicked={itemClicked} closeModal={closeUPDATEModal} />}

      <Footer/>
    </div>
  )
}

export default App