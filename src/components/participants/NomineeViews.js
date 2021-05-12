import React, { useState } from "react";
import { parseCurrency, balanceOf } from "@reach-sh/stdlib/ALGO";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const NomineeViews = ({ appState, args, getParamsReady,announceReady, getParams, announce }) => {
    console.log(appState, args,"sadsaddas");
    switch (appState) {
        case "announce":
            return (
                announceReady
                    ? <GetAnnounce addr={args[1]} title={args[0]} functionToCall={announce} />
                    : <h1>Loading the getParams page</h1>
            );
        case "getParams":
            return (
                getParamsReady
                    ? <GetParams address={args[0]} functionToCall={getParams} />
                    : <h1>Loading the getParams page</h1>
            );
        case "showOutcome":
            return (<ShowOutcome address={args[0]} />);
        default:
            return (<h1>Waiting for contract</h1>);
    }
}

const GetParams = ({ functionToCall }) => {

    const [titleName, setTicketPrice] = useState(1);

    const handleClick = () => {
        functionToCall({
            deadline: 1,
            titleName: titleName
        });
    }

    return (
        <Container>
            <Form.Group>
                {/* <p>Deadline</p>
                <Form.Control
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    type="number"
                    placeholder="Deadline in blocks" /> */}
                <p>Ticketname</p>
                <Form.Control
                    value={titleName}
                    onChange={(e) => setTicketPrice(e.target.value)}
                    type="number"
                    placeholder="Ticket price" />
            </Form.Group>
            <Button onClick={handleClick}>Set Parameters</Button>
        </Container>
    );
}


const GetAnnounce = ({ addr , title, functionToCall }) => {

    const handleClick = () => {
        functionToCall({
            balance: 1
        });
    }

    return (
        <Container>
            <h1>Winner total amount: <small>{ parseCurrency(balanceOf(addr))}</small></h1>
            <h1>Winner title: <small>{ title}</small></h1>
            <Button onClick={handleClick}>Set Parameters</Button>
        </Container>
    );
}


const ShowOutcome = ({ address }) => {
    return (
        <Container>
            <h1>Winner address: <small>{address}</small></h1>
        </Container>
    );
}

export default NomineeViews;