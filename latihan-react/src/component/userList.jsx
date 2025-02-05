/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Button, Container, Row, Col } from "react-bootstrap";

const UserList = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        getUser();
    }, [users]);

    const getUser = async () => {
        try {
            const response = await axios.get("http://localhost:3000/users");
            setUser(response.data.users);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteUser = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/users/${id}`);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
            <Container>
                <Row xs={"auto"} className="pt-4">
                    <h1>Daftar User</h1>
                    <Col className="align-self-end pb-2">
                        <Link to="/user/add" >Add Data</Link>
                    </Col>
                </Row>
                <Table striped bordered hover className="pt-4 text-center">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th colSpan={2} >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td>
                                    <Link to={`user/edit/${user.id}`}><Button>Edit</Button></Link>
                                </td>
                                <td>
                                    <Button onClick={() => deleteUser(user.id) } variant="danger">delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tbody>
                        
                    </tbody>
                </Table>
            </Container>
        </>
    );
};

export default UserList;