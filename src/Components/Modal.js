import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import swal from 'sweetalert';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement')

function Modals() {
  let history = useHistory();
  const [user, setUser] = useState([{ userName: '', age: '' }]);


  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleAdd = () => {
    let items = [];
    let itemsData = JSON.parse(localStorage.getItem('data'));
    if (itemsData === null) {
      let obj = {};
      obj['id'] = Math.random();
      obj['name'] = user.userName;
      obj['age'] = user.age;
      if (obj['age'] === undefined) {
        swal('Please enter age');
        return;
      }
      items.push(obj);
      localStorage.setItem('data', JSON.stringify(items));
    }
    else {
      let names = itemsData.map(item => item.name.toLowerCase());
      if (names.indexOf(user.userName.toLowerCase()) >= 0) {
        swal('Name already exist!');
        return;
      }
      let obj = {};
      obj['id'] = Math.random();
      obj['name'] = user.userName;
      obj['age'] = user.age;
      if (obj['age'] === undefined) {
        alert('Please enter age');
        return;
      }
      itemsData.push(obj);
      localStorage.setItem('data', JSON.stringify(itemsData));
      swal('Data added successfully', history.push('/ItemData'))
    }


  }

  return (
    <>
      <div className="text">
        <Button variant="primary" size="lg" onClick={openModal}>
          Add item
        </Button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={_subtitle => (subtitle = _subtitle)} className="form_text">Add items</h2>
          <Button variant="primary" size="sm" onClick={closeModal}>
            close
          </Button>

          <form>
            <input type="text" placeholder="Enter item to add" value={user.userName} onChange={e => setUser({ ...user, userName: e.target.value })}></input>
            <input type="text" placeholder="Enter age" value={user.age} onChange={e => setUser({ ...user, age: e.target.value })}></input>
            <Button variant="primary" size="sm" onClick={handleAdd}>
              Add
            </Button>
          </form>
        </Modal>
      </div>

    </>
  );
}

export default Modals