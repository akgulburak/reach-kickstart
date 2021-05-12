import React, {useState} from "react"
import {parseCurrency} from "@reach-sh/stdlib/ALGO"

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const NomineeViews = ({appState, args, getParamsReady, getTitle}) => {
    switch(appState){
        case "getTitle":
            return(
                getParamsReady 
                ? <GetTitle functionToCall={getTitle}/>
                : <h1> Loading the getParams page </h1>
            );
/*        case "getChoice":
            return (<getChoice />);*/
        default:
            //return(<h1>Waiting for contract</h1>);
            return(
                getParamsReady 
                ? <GetTitle functionToCall={getTitle} />
                : <h1> Loading the getParams page </h1>
            );
        }

}

const GetTitle = ({functionToCall}) => {

    const [deadline, setDeadline] = useState(500); //Standard deadline value
    const [ticketPrice, setTicketPrice] = useState(1); //Standard deadline value

    const handleClick = () =>{
        functionToCall({
            deadline: deadline,
            ticketPrice: parseCurrency(ticketPrice)
        });
    }

    return(
        <Container>
             <Form.Group>
                <p>Deadline</p>
                <Form.Control type="number" value={deadline} onChange={(e) => setDeadline(e.target.value)} placeholder="Deadline in blocks"/>
                <p>Ticket Price</p>
                <Form.Control type="number" value={ticketPrice} onChange={(e) => setTicketPrice(e.target.value)} placeholder="Ticket price"/>
             </Form.Group>
             <Button onClick={handleClick}>Set Parameters</Button>
        </Container>
    );
}
/*
const getChoice = () => {
    return (
        <Container>
            <h1>Winner is this</h1>
        </Container>
    );
}
*/
export default NomineeViews