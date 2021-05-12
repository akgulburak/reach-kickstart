import {Component} from "react";
import * as Backend from "../../build/index.main.mjs";
import * as Reach from "@reach-sh/stdlib/ALGO";

import { Context } from "../../Context";
import NomineeViews from "./NomineeViews";
/*import { addressEq } from "@reach-sh/stdlib/ALGO_compiled";*/

export class Nominee extends Component{
    static contextType = Context;

    constructor(props){
        super(props);

        this.state = {
            appState: "",
            args: [],
            /* Resolves */
            resGetParams: null,

        }

        // Bind functions
        this.getParamsExt = this.getParamsExt.bind(this);

    }

    componentDidMount() {
        //const [, , , , , ,ctc, ,ctcArgs] = this.context;
        const [, , , , , ,ctc, ,] = this.context;
        // Paranın 20 saniyede güncellenmesi
        this.interval = setInterval(async () => await this.updateBalance(), 20000);
        
        // Kontrat argümanları
/*        this.argument1 = ctc.ctcArgs[0];
        this.wager = ctc.A*/

        // Reach'e bağlan
        Backend.Nominee(ctc[0],this);
    }

    async updateBalance() {
        const [account, , , setBalance] = this.context;

        const balance = Reach.formatCurrency(await Reach.balanceOf(account), 4);
        setBalance(balance);
    }
    
    async getTitle() {
        const params = await new Promise(res => {
            this.setState({
                appState: "getTitle",
                resGetParams: res
            });
        });

        this.updateBalance();
        return params;
    }
    getParamsExt(params) {
        this.state.resGetParams(params);
    }
/*
    async showOutcome(address){
        this.setState({
            appState: "showOutcome",
            args: [address]
        })
    }
*/
    render() {
        return <NomineeViews
        appState={this.state.appState}
        args={this.state.args}
        getParamsReady={true}
        getTitle={this.getParamsExt}
        />
    }

}