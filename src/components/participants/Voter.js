import { Component } from "react";
import * as Backend from "../../build/index.main.mjs";
import * as Reach from "@reach-sh/stdlib/ALGO";

import { Context } from "../../Context";
import VoterViews from "./VoterViews";

export class Voter extends Component {
    static contextType = Context;

    constructor(props) {
        super(props);

        this.state = {
            appState: "",
            args: [],
            /* Resolves */
            resshouldBuyTicket: null,
            resgetTitles: null,
            resshouldPay: null,
        }

        // Bind functions
        this.shouldBuyTicketExt = this.shouldBuyTicketExt.bind(this);
        this.getTitlesExt = this.getTitlesExt.bind(this);
        this.shouldPayExt = this.shouldPayExt.bind(this);
    }

    componentDidMount() {
        const [, , , , , , ctc, , ] = this.context;

        // Parayı her 50 saniyede güncellemesi
        this.interval = setInterval(async () => await this.updateBalance(), 1000);

        // Kontrat argümanları

        // Reach'a bağlan
        Backend.Voter(ctc[0], this);
    }

    async updateBalance() {
        const [account, , , setBalance] = this.context;

        const balance = Reach.formatCurrency(await Reach.balanceOf(account), 4);
        setBalance(balance);
    }

    async shouldPay() {
        const response = await new Promise(res => {
            this.setState({
                appState: "shouldPay",
                resshouldPay: res
            });
        });

        return true;
    }

    async updateV(title, amount) {

        const [account, , , setBalance] = this.context;

        const balance = Reach.formatCurrency(await Reach.balanceOf(account), 4);
        const title1 = Reach.bigNumberToNumber(title);
        const amount1 = Reach.formatCurrency(amount);
        this.setState({
            appState: "winner",
            args: [title1,amount1]
        });

        this.updateBalance();
        console.log("11111")

    }

    async shouldBuyTicket(titles,votes) {
        const response = await new Promise(res => {
            this.setState({
                appState: "shouldBuyTicket",
                args: [titles,votes],
                resshouldBuyTicket: res
            });
        });

        return [response.index,response.donation];
    }

    async getTitles() {
        const response = await new Promise(res => {
            this.setState({
                appState: "getTitles",
                resgetTitles: res
            });
        });

        return true;
    }

    shouldBuyTicketExt(response) {
        this.state.resshouldBuyTicket(response);
    }
    getTitlesExt(response) {
        this.state.resgetTitles(response);
    }
    shouldPayExt(response) {
        this.state.resshouldPay(response);
    }

    async showOutcome(address) {
        this.setState({
            appState: "showOutcome",
            args: [address]
        });
    }

    async showPurchase(address) {
        this.setState({
            appState: "showPurchase",
            args: [address]
        });
    }

    render() {
        return (<VoterViews
            appState={this.state.appState}
            args={this.state.args}
            /* Resolves */
            shouldBuyTicketReady={this.state.resshouldBuyTicket !== null}
            shouldBuyTicket={this.shouldBuyTicketExt} 
            getTitlesReady={this.state.resgetTitles !== null}
            getTitles={this.getTitlesExt} 
            />);
        }
}