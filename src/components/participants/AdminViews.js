import React, { useState } from "react";
import { parseCurrency, balanceOf } from "@reach-sh/stdlib/ALGO";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AdminViews = ({ appState, args, getParamsReady,announceReady, getParams, announce, 
    update, updateReady }) => {
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
                    ? <GetParams functionToCall={getParams} />
                    : <h1>Loading the getParams page</h1>
            );
        case "showOutcome":
            return (<ShowOutcome address={args[0]} />);

        case "update":
            return (
                updateReady
                    ? <Update title={args[0]} amount={args[1]} functionToCall={update} />
                    : <h1>Loading the Update page</h1>
            );

        default:
            return (<h1>Waiting for contract</h1>);
    }
}

const Update = ({ title, amount , functionToCall }) => {
    const title1 = parseCurrency(title);
    const amount1 = parseCurrency(amount);
    return (
        <Container>
            <h1>Winner is: {title1}</h1>
            <h1>Amount is: {amount1}</h1>
        </Container>
    );
}

const GetParams = ({ functionToCall }) => {

    const [titleName, setTicketPrice] = useState(1);

    const handleClick = () => {
        functionToCall({
            deadline: 1,
            titleName: parseCurrency(titleName)
        });
    }

    return (
        <Container>
            <h1>This is admin view</h1>
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

export default AdminViews;