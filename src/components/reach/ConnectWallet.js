import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import * as Reach from "@reach-sh/stdlib/ALGO";

import Algorand from "../../assets/algorand.png";

import { Context } from "../../Context";


const ConnectWallet = () => {

    const [account, setAccount, , setBalance] = useContext(Context);

    const connectWallet = async () => {
        const acc = await Reach.getDefaultAccount();

        const balAtomic = await Reach.balanceOf(acc);
        const bal = Reach.formatCurrency(balAtomic, 4);

        setAccount(Object.assign({}, acc));

        setBalance(bal);
    }

    const buttonStyle = {
        bottom: "2em",
        right: "2em",
    }



    return Object.keys(account).length === 0 ? (
        <Button variant="dark"
            style={buttonStyle}
            className="position-absolute m-3"
            onClick={connectWallet}
            size="lg">
            <img src={Algorand} alt="Algorand Logo" width="30" />
            {" "}<p className="d-inline-block mb-1 ml-1">Connect Wallet</p>
        </Button>
    ) : <div />;
}

export default ConnectWallet;