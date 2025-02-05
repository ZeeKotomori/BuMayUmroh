import axios from 'axios';
import { useState } from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/users", {
                username,
                email,
                password
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <Container>
            <Row className='pt-4'>
                <h1>Add User</h1>
                <Form className='pt-2' action="">
                    <Form.Label htmlFor="inputEmail">Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        id="inputEmail" 
                        placeholder="Email" 
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Form.Label className="pt-4" htmlFor="inputUsername">Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        id="inputUsername" 
                        placeholder="Username" 
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <Form.Label className="pt-4" htmlFor="inputPassword">Password</Form.Label>
                    <Form.Control className="mb-3"
                        type="text" 
                        id="inputPassword" 
                        placeholder="Password" 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button variant='success' onClick={(e) => saveUser(e)}>Submit</Button>
                </Form>
            </Row>
        </Container>
    )
}

export default AddUser;