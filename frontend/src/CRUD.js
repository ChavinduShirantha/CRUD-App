import React, {Fragment, useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

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

    useEffect(() => {
        setData(empData);
    }, [])

    const handleEdit = (id) => {
        alert(id);
    }

    const handleDelete = (id) => {
        alert(id);
    }

    return (
        <Fragment>
            <Table striped bordered hover>
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
                                        <button className="btn btn-primary" onClick={() => handleEdit(item.id)}>Edit
                                        </button>
                                        &nbsp;
                                        <button className="btn btn-danger"
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
        </Fragment>
    )
}

export default CRUD;
