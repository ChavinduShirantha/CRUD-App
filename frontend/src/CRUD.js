import React, {Fragment, useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Container} from "react-bootstrap";

const CRUD = () => {
    const empData = [
        {
            id: 1,
            name: 'Chavindu',
            age: 23,
            isActive: 'Yes'
        },
        {
            id: 2,
            name: 'Shirantha',
            age: 23,
            isActive: 'Yes'
        },
        {
            id: 3,
            name: 'Silva',
            age: 23,
            isActive: 'No'
        }
    ]

    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [isActive, setIsActive] = useState(0);

    const [editName, setEditName] = useState('');
    const [editAge, setEditAge] = useState('');
    const [editIsActive, setEditIsActive] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setData(empData);
    }, [])

    const handleEdit = (id) => {
        handleShow();
    }

    const handleDelete = (id) => {
        if (window.confirm("Are you sure to delete this employee") === true) {
            alert(id);
        }
    }

    const handleUpdate = (id) => {
        handleShow();
    }


    return (
        <Fragment>
            <Container className="flex flex-wrap w-25 mb-5 mt-5">
                <h3 className="mb-2">Employee Form</h3>
                <Col className="mb-2">
                    <input type="text" className="form-control" placeholder="Enter Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </Col>
                <Col className="mb-2">
                    <input type="text" className="form-control" placeholder="Enter Age" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
                </Col>
                <Col className="flex flex-row mb-2">
                    <input type="checkbox"
                           checked={isActive === 0 ? true : false}
                           onChange={(e)=> setIsActive(e)}
                           value={isActive}
                    />
                    <label>IsActive</label>
                </Col>
                <Col>
                    <button className="btn btn-outline-primary">Submit</button>
                </Col>
            </Container>
            <Table striped bordered hover className="w-75 flex m-auto justify-content-center align-content-center">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>IsActive</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    data && data.length > 0 ?
                        data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.isActive}</td>
                                    <td colSpan={2}>
                                        <button className="btn btn-outline-primary"
                                                onClick={() => handleEdit(item.id)}>Edit
                                        </button>
                                        &nbsp;
                                        <button className="btn btn-outline-danger"
                                                onClick={() => handleDelete(item.id)}>Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        'No Available Data'
                }
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modify / Update Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body className="w-75 flex m-auto justify-content-center align-content-center">
                    <Col className="mb-2">
                        <input type="text" className="form-control" placeholder="Enter Name" value={editName} onChange={(e)=>{setEditName(e.target.value)}}/>
                    </Col>
                    <Col className="mb-2">
                        <input type="text" className="form-control" placeholder="Enter Age" value={editAge} onChange={(e)=>{setEditAge(e.target.value)}}/>
                    </Col>
                    <Col className="flex flex-row mb-2">
                        <input type="checkbox"
                               checked={editIsActive === 0 ? true : false}
                               onChange={(e)=> setEditIsActive(e)}
                               value={editIsActive}
                        />
                        <label>IsActive</label>
                    </Col>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="outline-warning" onClick={handleUpdate}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default CRUD;
