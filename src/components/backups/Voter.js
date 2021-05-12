import {Component} from "react";
import * as Backend from "../../build/index.main.mjs";
import * as Reach from "@reach-sh/stdlib/ALGO";

import { Context } from "../../Context";
import VoterViews from "./VoterViews";

export class Voter extends Component {
    static contextType = Context;

    constructor(props){
        super(props);

        this.state = {
            appState: "",
            args: [],
            /* Resolves */

        }

        // Bind functions

    }

    componentDidMount() {
        //const [, , , , , ,ctc, ,ctcArgs] = this.context;
        const [, , , , , ,ctc,] = this.context;
        // Paranın 20 saniyede güncellenmesi
        this.interval = setInterval(async () => await this.updateBalance(), 20000);
        
        // Kontrat argümanları
/*        this.argument1 = ctc.ctcArgs[0];
        this.wager = ctc.A*/

        // Reach'e bağlan
        Backend.Voter(ctc[0],this);
    }

    async updateBalance() {
        const [account, , , setBalance] = this.context;

        const balance = Reach.formatCurrency(await Reach.balanceOf(account), 4);
        setBalance(balance);
    }

    async getChoice() {
        this.setState({
            appState: "getChoice",
            args: null
        })
    }

    render(){
        return(<VoterViews
            appState={this.state.appState}
            args={this.state.args}
            />);
    }
}