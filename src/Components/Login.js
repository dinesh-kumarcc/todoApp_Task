import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react/cjs/react.development'
import PostData from '../data/posts.json';
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import swal from 'sweetalert';


function Login() {

    let history = useHistory();

    const [user, setUser] = useState([{ userName: '', Password: '' }]);

    useEffect(() => {
        console.log(PostData, 'postdata')
        console.log(JSON.parse(localStorage.getItem(user)))
        console.log('kkkkkk', JSON.parse(localStorage.getItem(user)))
    }, [])

    const check = () => {
        // console.log('kkkkkk',JSON.parse(localStorage.getItem('user')))
        // let data = JSON.parse(localStorage.getItem('user'))
        console.log(PostData[0].username, 'name');
        for (let i = 0; i < PostData.length; i++) {
            if (PostData[i].username !== user.userName) {
                swal('Check your Username')
            }
            if (PostData[i].password !== user.Password) {
                swal('Check your password')
            }
            if (!user.Password && !user.userName) {
                swal('fields cannot be empty')
            }
            if (PostData[i].username == user.userName && PostData[i].password == user.Password) {
                swal('Successfully Logged In')
                history.push('/Modals')
                break;
            }
            // history.push("/");
            // history.push('/user-details')
        }
    }

    return (
        <>
            <Card className="text-center">
                <Card.Header>Welcome to Login Page</Card.Header>
                <Card.Body>
                    <Card.Title className="text">Login Here</Card.Title>
                    <Card.Text>
                        <Form className="text-center">
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" className="form_text">
                                <Form.Label column sm="2">
                                    User Name
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="text" placeholder="username" value={user.userName} onChange={e => setUser({ ...user, userName: e.target.value })} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword" className="form_text">
                                <Form.Label column sm="2">
                                    Password
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="password" placeholder="password" value={user.Password} onChange={e => setUser({ ...user, Password: e.target.value })} />
                                </Col>
                            </Form.Group>
                        </Form>
                    </Card.Text>
                    <Button variant="primary" size="lg" onClick={check}>
                        check
                    </Button>
                    
                </Card.Body>
            </Card>


            {/* <div>
            <p>Username</p>
            <input type="text" placeholder="username" value={user.userName} onChange={e => setUser({...user, userName: e.target.value})}/>

            <p>Password</p>

            <input type="password" placeholder="password" value={user.Password} onChange={e => setUser({...user, Password: e.target.value})}/>
            
            
            <button onClick={check}>check</button>
        </div> */}
        </>
    )
}
export default Login;