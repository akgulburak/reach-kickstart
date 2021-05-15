import React, { useState } from "react";
import * as Reach from "@reach-sh/stdlib/ALGO";

import { parseCurrency } from "@reach-sh/stdlib/ALGO";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
/*import Spinner from "react-bootstrap/Spinner";*/

const VoterViews = ({ appState, args, shouldBuyTicketReady, shouldBuyTicket,shouldPay,shouldPayReady, getTitles, getTitlesReady }) => {
    switch (appState) {
        case "shouldBuyTicket":
            return (
                shouldBuyTicketReady
                    ? <ShoulBuyTicket titles ={args[0]} votes={args[1]} functionToCall={shouldBuyTicket} />
                    : <h1>Loading the shouldBuyTicket page</h1>);
        case "shouldPay":
            return (
                shouldPayReady
                    ? <ShouldPay functionToCall={shouldPay} />
                    : <h1>Loading the shouldBuyTicket page</h1>);
        case "showOutcome":
            return (<ShowOutcome address={args[0]} />);
        case "showPurchase":
            return (<ShowPurchase address={args[0]} />);
        case "winner":
            return <Winner title={args[0]} amount={args[1]} />
        default:
            return (<h1>Waiting for contract</h1>);
    }
}

const ShoulBuyTicket = ({ titles, votes, functionToCall }) => {

    const [index, setIndex] = useState(0);
    const [donation, setDonation] = useState(0);

    const title1 = Reach.bigNumberToNumber(titles[0]);
    const vote1 = Reach.bigNumberToNumber(votes[0]);

    const title2 = Reach.bigNumberToNumber(titles[1]);
    const vote2 = Reach.bigNumberToNumber(votes[1]);

    console.log(title1);

    const handleClick = () => {
        functionToCall({
            index: index,
            donation: parseCurrency(donation)
        });
    }

    return (
        <Container>
            <Form.Group>
                <p>Index</p>
                <Form.Control
                    value={index}
                    onChange={(e) => setIndex(e.target.value)}
                    type="number"
                    placeholder="Vote for a title" />
                <p>Donation Amount</p>
                <Form.Control
                    value={donation}
                    onChange={(e) => setDonation(e.target.value)}
                    type="number"
                    placeholder="Voting amount" />
                <p>Title1: <h1>{title1}</h1> has {vote1} votes</p>
                <p>Title2: <h1>{title2}</h1> has {vote2} votes</p>
            </Form.Group>
            <Button onClick={handleClick}>Set Parameters</Button>
        </Container>
    );
}

const ShouldPay = ({}) => {
}

const Winner = ({ title,amount}) => {

    return (
        <Container>
            <h1>Winner total amount: <small>{amount}</small></h1>
            <h1>Winner title: <small>{ title}</small></h1>
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

const ShowPurchase = ({ address }) => {
    return (
        <Container>
            <h1><small>{address}</small> bought ticket</h1>
        </Container>
    );
}

export default VoterViews;

