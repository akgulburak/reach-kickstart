import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
    return (
        <Container className="h-100">
            <Row>
                <Col xs={2} />
                <Col xs={8} className="mt-4">
                    <h1 className="display-4">About the Project</h1>
                    <hr style={{ width: "10rem" }} />
                    <p className="text-left mt-3">Qui amet irure cillum proident consequat exercitation excepteur qui commodo eu tempor sunt laboris amet.
                 Voluptate aliqua nisi tempor fugiat minim. Consequat incididunt ut elit do mollit id quis est enim pariatur.</p>
                    <p className="text-left mt-3">Qui amet irure cillum proident consequat exercitation excepteur qui commodo eu tempor sunt laboris amet.
                 Voluptate aliqua nisi tempor fugiat minim. Consequat incididunt ut elit do mollit id quis est enim pariatur.</p>
                    <p className="text-left mt-3">Qui amet irure cillum proident consequat exercitation excepteur qui commodo eu tempor sunt laboris amet.
                 Voluptate aliqua nisi tempor fugiat minim. Consequat incididunt ut elit do mollit id quis est enim pariatur.</p>

                    <h2 className="text-left">How to Use</h2>
                    <p className="text-left mt-3">Qui amet irure cillum proident consequat exercitation excepteur qui commodo eu tempor sunt laboris amet.
                 Voluptate aliqua nisi tempor fugiat minim. Consequat incididunt ut elit do mollit id quis est enim pariatur.</p>
                    <p className="text-left mt-3">Qui amet irure cillum proident consequat exercitation excepteur qui commodo eu tempor sunt laboris amet.
                 Voluptate aliqua nisi tempor fugiat minim. Consequat incididunt ut elit do mollit id quis est enim pariatur.</p>
                    <p className="text-left mt-3">Qui amet irure cillum proident consequat exercitation excepteur qui commodo eu tempor sunt laboris amet.
                 Voluptate aliqua nisi tempor fugiat minim. Consequat incididunt ut elit do mollit id quis est enim pariatur.</p>
                </Col>
                <Col xs={2} />
            </Row>
        </Container>
    );
}

export default About;