import { Component } from "react";
import * as Backend from "../../build/index.main.mjs";
import * as Reach from "@reach-sh/stdlib/ALGO";

import { Context } from "../../Context";
import AliceViews from "./AliceViews";

export class Alice extends Component {
    static contextType = Context;

    constructor(props) {
        super(props);

        this.state = {
            appState: "",
            args: [],
            resGetHand: null,
        };

        this.getHandExt = this.getHandExt.bind(this);
    }

    componentDidMount() {
        const [, , , , , , ctc, , ctcArgs,] = this.context;
        this.interval = setInterval(async () => this.updateBalance(), 20000);

        const wagerNumber = Reach.parseCurrency(ctcArgs[0].wager);
        this.wager = wagerNumber;

        Backend.Alice(ctc[0], this);
    }

    async updateBalance() {
        const [account, , , setBalance] = this.context;

        const balance = Reach.formatCurrency(await Reach.balanceOf(account), 4);
        setBalance(balance);
    }

    random() { return Reach.hasRandom.random(); }

    async getHand() {
        const hand = await new Promise(res => {
            console.log("getHand is called");
            this.setState({
                appState: "getHand",
                resGetHand: res,
            });
        });
        console.log(hand);
        return hand;
    }
    getHandExt(hand) {
        console.log("getHandExt is called");
        this.state.resGetHand(hand);
    }

    async informTimeout() {
        this.setState({
            appState: "informTimeout",
        });
    }

    async seeOutcome(outcome) {
        const outcomeNumber = Reach.bigNumberToNumber(outcome);
        this.setState({
            appState: "seeOutcome",
            args: [outcomeNumber],
        });
    }

    render() {
        return (<AliceViews
            appState={this.state.appState}
            args={this.state.args}
            getHandReady={this.state.resGetHand !== null}
            getHand={this.getHandExt} />);
    }
}