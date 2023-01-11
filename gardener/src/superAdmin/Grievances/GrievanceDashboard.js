import React from "react";
import { Container,Card, Row, Col } from "react-bootstrap";

function GrievanceDashboard(){
    return(
        <div>
            <Container>
            <h1>Grievance Dashboard</h1>
            <br/>
            <br/>
            <Row>
                <Col >
                    <Card
                    
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header style={{height:80,textAlign:"center",backgroundColor:"#337AB7"}}>All Grievances</Card.Header>
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
                    <Card.Header style={{height:80,textAlign:"center",backgroundColor:"#337AB7"}}>Pending Grievances</Card.Header>
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
                    <Card.Header style={{height:80,textAlign:"center",backgroundColor:"#337AB7"}}>Resolved Grievances</Card.Header>
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
                    <Card.Header style={{height:80,textAlign:"center",backgroundColor:"#337AB7"}}>Maximum Grievances Resolve Category</Card.Header>
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
                    <Card.Header style={{height:80,textAlign:"center",backgroundColor:"#337AB7"}}>% Grievance Resolved</Card.Header>
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
                    <Card.Header style={{height:80,textAlign:"center",backgroundColor:"#337AB7"}}>Escalated Grievances</Card.Header>
                    <Card.Body style={{height:80}}>
                        <Card.Title style={{textAlign:"center"}}>21358</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
                
                
                <Col>
                    <Card
                    bg="Success"
                    key="Success"
                    
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header>Reopen Grievances</Card.Header>
                    <Card.Body>
                        <Card.Title>21358</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card
                    bg="Success"
                    key="Success"
                    
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header>Grievances Pending greater than 7 days and less than 30 days </Card.Header>
                    <Card.Body>
                        <Card.Title>21358</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <Card
                    bg="Success"
                    key="Success"

                    style={{width:"18rem"}}
                    className="mb-2"
                    >
                    <Card.Header>Citizen Satisfaction</Card.Header>
                    <Card.Body>
                        <Card.Title>58.23%</Card.Title>
                    </Card.Body>

                    </Card>
                </Col>
                <Col>
                    <Card
                    bg="Success"
                    key="Success"

                    style={{width:"18rem"}}
                    className="mb-2"
                    >
                    <Card.Header>Average Rating</Card.Header>
                    <Card.Body>
                        <Card.Title>3.55</Card.Title>
                    </Card.Body>

                    </Card>
                </Col>
                <Col>
                    <Card
                    bg="Success"
                    key="Success"

                    style={{width:"18rem"}}
                    className="mb-2"
                    >
                    <Card.Header>%feedback recieved</Card.Header>
                    <Card.Body>
                        <Card.Title>47.35%</Card.Title>
                    </Card.Body>

                    </Card>
                </Col>
            </Row>
            </Container>
        </div>
    );
}

export default GrievanceDashboard;