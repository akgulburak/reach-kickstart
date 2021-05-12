import React, { useState, createContext } from "react";

export const Context = createContext(null);

export const ContextProvider = props => {
    const [account, setAccount] = useState("");
    const [balance, setBalance] = useState(0);
    const [ctcInfo, setctcInfo] = useState("");
    const [ctc, setCtc] = useState([]);
    const [ctcArgs, setCtcArgs] = useState([]);

    return (
        <Context.Provider value={[
            account, setAccount,
            balance, setBalance,
            ctcInfo, setctcInfo,
            ctc, setCtc,
            ctcArgs, setCtcArgs
        ]}>
            {props.children}
        </Context.Provider>
    );
}