import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getUserById();
    }, []);

    const editUser = async (id, e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/users/${id}`, {
                username,
                email
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    const getUserById = async () => {
        const response = await axios.get(`http://localhost:3000/users/${id}`);
        console.log(response);
        setUsername(response.data.user.username);
        setEmail(response.data.user.email);
    };

    return(
        <Container>
            <h1>Edit User</h1>
            <Form className='pt-2'>
                    <Form.Label htmlFor="inputEmail">Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        id="inputEmail" 
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />

                    <Form.Label className="pt-4" htmlFor="inputUsername">Username</Form.Label>
                    <Form.Control 
                        className="mb-3"
                        type="text" 
                        id="inputUsername" 
                        placeholder="Username" 
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />

                    <Button variant='success' onClick={(e) => editUser(id, e)}>Submit</Button>
                </Form>
        </Container>
    );
};

export default EditUser;