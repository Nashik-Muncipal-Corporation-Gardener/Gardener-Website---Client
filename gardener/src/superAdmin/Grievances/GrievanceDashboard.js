import React from "react";
import { Container,Card, Row, Col, Button } from "react-bootstrap";
import './GrievanceDashboard.css'
import SuperAdminHome from '../home/SuperAdminHome'
function GrievanceDashboard(){
    
    return(
        <div>
            <SuperAdminHome/>
            <Button>Marathi</Button>

            <Container>
            <h1>Grievance Dashboard</h1>
            <Row>
                <Col >
                    <Card
                    
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header className="cardheader" style={{backgroundColor:"#337AB7"}}>All Grievances</Card.Header>
                    <Card.Body style={{height:80}}>
                        <Card.Title style={{textAlign:"center"}}>21358</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card
                    
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header className="cardheader" style={{backgroundColor:"#F0AD4E"}}>Pending Grievances</Card.Header>
                    <Card.Body style={{height:80}}>
                        <Card.Title style={{textAlign:"center"}}>21358</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card
                    
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header className="cardheader" style={{backgroundColor:"#5CB85C"}}>Resolved Grievances</Card.Header>
                    <Card.Body style={{height:80}}>
                        <Card.Title style={{textAlign:"center"}}>21358</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card
                    
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header className="cardheader" style={{backgroundColor:"#337AB7"}}>Maximum Grievances Resolve Category</Card.Header>
                    <Card.Body style={{height:80}}>
                        <Card.Title style={{textAlign:"center"}}>21358</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
                </Row>
                <br/>
                <Row>
                <Col >
                    <Card
                    
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header className="cardheader" style={{backgroundColor:"#5CB85C"}}>% Grievance Resolved</Card.Header>
                    <Card.Body style={{height:80}}>
                        <Card.Title style={{textAlign:"center"}}>60%</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card
                    
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header className="cardheader" style={{backgroundColor:"#D9534F"}}>Escalated Grievances</Card.Header>
                    <Card.Body style={{height:80}}>
                        <Card.Title style={{textAlign:"center"}}>21358</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
                
                <Col >
                    <Card
                    
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header className="cardheader" style={{backgroundColor:"#D9534F"}}>Reopen Grievances</Card.Header>
                    <Card.Body style={{height:80}}>
                        <Card.Title style={{textAlign:"center"}}>21358</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card
                    
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header className="cardheader" style={{backgroundColor:"#D9534F"}}>Grievances Pending greater than 7 days and less than 30 days</Card.Header>
                    <Card.Body style={{height:80}}>
                        <Card.Title style={{textAlign:"center"}}>21358</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
                
            </Row>
            <br/>
            <Row>
            <Col >
                    <Card
                    
                    // style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header className="cardheader" style={{backgroundColor:"#3399FF"}}>Citizen Satisfaction</Card.Header>
                    <Card.Body style={{height:80}}>
                        <Card.Title style={{textAlign:"center"}}>58.23%</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card
                    
                    // style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header className="cardheader" style={{backgroundColor:"#3399FF"}}>Average Rating</Card.Header>
                    <Card.Body style={{height:80}}>
                        <Card.Title style={{textAlign:"center"}}>3.55</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card
                    
                    // style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header className="cardheader" style={{backgroundColor:"#3399FF"}}>%feedback recieved</Card.Header>
                    <Card.Body style={{height:80}}>
                        <Card.Title style={{textAlign:"center"}}>47.35%</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container>
        </div>
    );
}

export default GrievanceDashboard;