import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Rock from "../../assets/rock.png";
import Paper from "../../assets/paper.png";
import Scissors from "../../assets/scissors.png";

const GameButton = ({ src, txt, action }) => {
    return (
        <Col sm={4}>
            <button style={{ borderRadius: "10px" }} onClick={action} className="p-3">
                <img height="120em" className="mb-3" src={src} alt="" />
                <h3>{txt}</h3>
            </button>
        </Col>
    );
}

export const GetHand = ({ getHand }) => {
    return (
        <Container className="mt-4">
            <h2>Make a move:</h2>
            <br />
            <Row>
                <GameButton src={Rock} txt="Rock" action={() => getHand(0)} />
                <GameButton src={Paper} txt="Paper" action={() => getHand(1)} />
                <GameButton src={Scissors} txt="Scissors" action={() => getHand(2)} />
            </Row>
        </Container>
    );
}

export const SeeOutcome = ({ outcome }) => {

    const txts = [
        "Bob has won!",
        "Draw!",
        "Alice has won!"
    ];

    return (
        <Container className="mt-4">
            <h2>{txts[outcome]}</h2>
        </Container>
    );
}

export const InformTimeout = () => {
    return (
        <Container className="mt-4">
            <h2>Observed timeout</h2>
        </Container>
    );
}