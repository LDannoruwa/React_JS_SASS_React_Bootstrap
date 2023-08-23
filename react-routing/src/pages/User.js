import { useEffect, useState } from "react";
import { getUserById, getUsers } from "../services/UserService";

import Button from 'react-bootstrap/Button'; //add bootstrap styles for button
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Col, Row } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';

const User = () =>{
    const [users, setUsers] = useState(null);
    const [userDetail, setUserDetail] = useState(null);

    const userRequest = async ()=>{
        const res = await getUsers();
        await setUsers(res);

    }

    //send api request when loading the page
    useEffect (()=>{
        userRequest();
    },[]);

    const getUserDetails = async (id) =>{
        const res = await getUserById(id);
        setUserDetail(res);
    }

    return(
        <>
            <div>
                <Nav>
                    <Col lg={6}>
                        <ListGroup>
                            {users && users.map((user) =>{
                                return(
                                    <ListGroup.Item>
                                        <Row>
                                            <Col lg={6}>
                                                {user.username} 
                                            </Col>

                                            <Col lg={6} className="text-end">
                                                {/* Button - react bootstrap component*/}
                                                <Button variant="primary" className="ms-auto" onClick={()=>{
                                                    getUserDetails(user.id)
                                                }}>show</Button> 
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                );
                            })}
                        </ListGroup>
                    </Col>

                    <Col lg={6}>
                        <div>
                            <h3>user details</h3>
                            {userDetail && 
                                <div>
                                    <div>Username: {userDetail.username}</div>
                                    <div>Email: {userDetail.email}</div>
                                </div>
                            }
                        </div>
                    </Col>
                </Nav>
            </div>
        </>
    );
}
export default User;