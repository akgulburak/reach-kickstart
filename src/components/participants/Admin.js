import { Component } from "react";
import * as Backend from "../../build/index.main.mjs";
import * as Reach from "@reach-sh/stdlib/ALGO";

import { parseCurrency } from "@reach-sh/stdlib/ALGO";
import { Context } from "../../Context";
import AdminViews from "./AdminViews";

export class Admin extends Component {
    static contextType = Context;

    constructor(props) {
        super(props);

        this.state = {
            appState: "",
            args: [],
            /* Resolves */
            resGetParams: null,
            resUpdate: null,
            resAnnounce: null,
        }

        // Bind functions
        this.getParamsExt = this.getParamsExt.bind(this);
        this.announceExt = this.announceExt.bind(this);
    }

    componentDidMount() {
        const [, , , , , , ctc, , ] = this.context;

        // Parayı her 50 saniyede güncellemesi
        this.interval = setInterval(async () => await this.updateBalance(), 1000);

        // Kontrat argümanları

        // Reach'a bağlan
        Backend.Admin(ctc[0], this);
    }

    async updateBalance() {
        const [account, , , setBalance] = this.context;

        const balance = Reach.formatCurrency(await Reach.balanceOf(account), 4);
        setBalance(balance);
    }

    async getParams() {
        const params = await new Promise(res => {
            this.setState({
                appState: "getParams",
                resGetParams: res
            });
        });

        this.updateBalance();
        return params.titleName;
    }

    async update(title, amount) {
        console.log(title);
        console.log(amount);
        const params = await new Promise(res => {
            this.setState({
                appState: "update",
                args: [title,amount],
                resUpdate: res
            });
        });

        this.updateBalance();
        return true;
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
        this.state.resUpdate(params);
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
        return <AdminViews
            appState={this.state.appState}
            args={this.state.args}
            /* Resolves */
            getParamsReady={this.state.resGetParams !== null}
            announceReady={this.state.resAnnounce !== null}
            getParams={this.getParamsExt}

            updateReady={this.state.resUpdate !== null}
            update={this.updateExt}
            announce={this.announceExt} />
    }
}