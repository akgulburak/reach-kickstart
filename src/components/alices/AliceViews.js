import React from "react";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

import { GetHand, InformTimeout, SeeOutcome } from "./PlayerViews";

const AliceViews = ({ appState, args, getHandReady, getHand }) => {
    switch (appState) {
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

export default AliceViews;