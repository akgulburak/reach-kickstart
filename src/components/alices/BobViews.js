import React from "react";
import { useHistory } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import { GetHand, InformTimeout, SeeOutcome } from "./PlayerViews";

const BobViews = ({ appState, args, getHandReady, getHand, acceptWagerReady, acceptWager }) => {
    switch (appState) {
        case "acceptWager":
            return (
                acceptWagerReady
                    ? <AcceptWager wager={args[0]} acceptWager={acceptWager} />
                    : <h1>Loading the contract</h1>);
        case "getHand":
            return (
                getHandReady
                    ? <GetHand getHand={getHand} />
                    : <h1>Loading the contract</h1>);

        case "informTimeout":
            return (<InformTimeout />);
        case "seeOutcome":
            return (<SeeOutcome outcome={args[0]} />);
        default:
            break;
    }
    return (
        <Container className="mt-4">
            <h2>Waiting for contract</h2>
            <Spinner animation="border" />
        </Container>
    );
}

export const AcceptWager = ({ wager, acceptWager }) => {

    const history = useHistory();

    const handleReject = () => {
        history.push("/");
    }

    return (
        <Container className="mt-4">
            <h2 className="text-center">Wager is {wager} ALGO.</h2>
            <p className="text-center">Do you accept it?</p>
            <Row>
                <Col sm={6} >
                    <Button block variant="success" onClick={acceptWager}>Yes</Button>
                </Col>
                <Col sm={6} >
                    <Button block variant="danger" onClick={handleReject}>No</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default BobViews;