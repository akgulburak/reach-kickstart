import React, {useState} from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const VoterViews = ({ appState, args, shouldBuyTicketRead,shouldBuyTicket}) =>{
    switch(appState) {
        case "shouldBuyTicket":
            return(<BuyTicket price={args[0]} functionToCall={shouldBuyTicket}/>);
/*        case "shouldBuyTicket":
            return();
        case "shouldBuyTicket":
            return();*/
        default:
            return (<h1>Waiting for contract</h1>)
    }
}

const BuyTicket = ({price, functionToCall}) => {

    const [clickedYes, setClickedYes] = useState(false);
    const [clickedNo, setClickedNo] = useState(false);

    const handleYes = () => {
        functionToCall(true);
        setClickedYes(true);
    };

    const handleNo = () => {
        functionToCall(false);
        setClickedNo(true);
    };

    return(
        <Container>
            <h2>Do you accept?</h2>
            <Button onClick={handleYes}>
                {
                    clickedYes ? <Spinner animation="border" size="sm" as="span" variant="light" />
                    : "Yes"
                }
            </Button>
            <Button onClick={handleNo}>
                {
                    clickedNo ? <Spinner animation="border" size="sm" as="span" variant="light" />
                    : "No"
                }

            </Button>
            <h2>asd</h2>
        </Container>
    );
}

export default VoterViews;