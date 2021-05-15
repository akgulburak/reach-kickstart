import { Component } from "react";
import * as Backend from "../../build/index.main.mjs";
import * as Reach from "@reach-sh/stdlib/ALGO";

import { Context } from "../../Context";
import NomineeViews from "./NomineeViews";

export class Nominee extends Component {
    static contextType = Context;

    constructor(props) {
        super(props);

        this.state = {
            appState: "",
            args: [],
            /* Resolves */
            resGetParams: null,
            resAnnounce: null,
            resUpdateReady: null,
        }

        // Bind functions
        this.getParamsExt = this.getParamsExt.bind(this);
        this.announceExt = this.announceExt.bind(this);
        this.updateExt = this.updateExt.bind(this);
    }

    componentDidMount() {
        const [, , , , , , ctc, , ] = this.context;

        // Parayı her 50 saniyede güncellemesi
        this.interval = setInterval(async () => await this.updateBalance(), 1000);

        // Kontrat argümanları

        // Reach'a bağlan
        Backend.Nominee(ctc[0], this);
        console.log(ctc[0]);
    }

    async updateBalance() {
        const [account, , , setBalance] = this.context;

        const balance = Reach.formatCurrency(await Reach.balanceOf(account), 4);
        setBalance(balance);
    }

    async updateN(title, amount) {

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

    async getParams(address) {
        console.log("asdadsdsaasdasdasddsa");
        const params = await new Promise(res => {
            this.setState({
                appState: "getParams",
                resGetParams: res
            });
        });

        this.updateBalance();
        return params.titleName;
    }
    
    async announce(addr, title) {
        console.log("111a");
        console.log(addr);
        console.log(title);
        const params = await new Promise(res => {
            this.setState({
                appState: "announce",
                resAnnounce: res
            });
        });

        return params.balance;
    }

    getParamsExt(params) {
        this.state.resGetParams(params);
    }

    updateExt(params) {
        this.state.resUpdateReady(params);
    }

    announceExt(params) {
        this.state.resAnnounce(params);
    }
    async showOutcome(address) {
        this.setState({
            appState: "showOutcome",
            args: [address]
        });
    }

    render() {
        return <NomineeViews
            appState={this.state.appState}
            args={this.state.args}
            /* Resolves */
            getParamsReady={this.state.resGetParams !== null}
            announceReady={this.state.resAnnounce !== null}
            updateReady={this.state.resUpdateReady !== null}

            update={this.updateExt}
            getParams={this.getParamsExt}
            updateBalance={this.updateBalance}
            announce={this.announceExt} />
    }
}