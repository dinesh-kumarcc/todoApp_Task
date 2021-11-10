import React, { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import Table from 'react-bootstrap/Table';
import { Form, Button, Row, Col, Card } from "react-bootstrap";


function ItemList() {
    const [list, setList] = useState([]);
    const [nameToBeUpdate, setNameToUpdate] = useState('');
    const [id, setId] = useState(null);

    useEffect(() => {
        setList(JSON.parse(localStorage.getItem('data')));
    }, [list]);

    const handleDelete = (id) => {
        setList(list.splice(id, 1));
        localStorage.setItem('data', JSON.stringify(list));
    }

    const handleUpdate = (item, id) => {
        setNameToUpdate(item.name);
        setId(id);
    }

    const handleSave = (id) => {
        let prevData = JSON.parse(localStorage.getItem('data'));
        let objectToBeUpdate = prevData[id];
        objectToBeUpdate['name'] = nameToBeUpdate;
        prevData.splice(id, 1, objectToBeUpdate);
        localStorage.setItem('data', JSON.stringify(prevData));
    }

    return (
        <div>
            {/* <Table striped bordered hover size="sm">
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => {
                        return (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>
                                    <Button variant="primary" size="sm" onClick={() => handleDelete(index)}>
                                    Delete
                                    </Button>
                                    <Button variant="primary" size="sm" onClick={() => handleUpdate(item, index)}>
                                    Update
                                    </Button>
                                    
                                    <button onClick={() => handleDelete(index)} style={{ marginLeft: '10px' }}>Delete</button>
                                    <button onClick={() => handleUpdate(item, index)} style={{ marginLeft: '5px' }}>Update</button>
                                </td>
                            </tr>
                        )
                    })}


                </tbody>
            </Table> */}
            {(list.map((item, index) => {
                return (
                    <div key={index}>
                        <input hidden={id !== index} type="text" defaultValue={nameToBeUpdate} onChange={(e) => setNameToUpdate(e.target.value)}></input>
                        <button disabled={!nameToBeUpdate} hidden={id !== index} onClick={() => handleSave(index)}>Save</button>
                        <li>{item.name} is {item.age} years old.
                            <button onClick={() => handleDelete(index)} style={{ marginLeft: '10px' }}>Delete</button>
                            <button onClick={() => handleUpdate(item, index)} style={{ marginLeft: '5px' }}>Update</button>
                        </li>
                    </div>
                )
            }))}
        </div>
    )
}

export default ItemList
