import React, { Component } from "react";
import Context from "./Context";
import Web3 from "web3";

const HOST = process.env.REACT_APP_BLOCKCHAIN_HOST;

class Provider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            web3 : null,
            walletAddress : null,
            walletBalance : 0.0,
            tokenBalance : 0,
            funds : 0.0
        };
    }

    async componentDidMount () {
        await this.connectWeb3AndWalet();
    }

    connectWeb3AndWalet = async () => {
        
        console.log("Connect Web3 Wallet Provider .... ");
        //console.log("%cNon-Ethereum browser detected. You should consider trying MetaMask!", "color: red; background-color: yellow; font-size: large");
        await this.setState({ isWeb3Browser : false });
        const web3 = new Web3(new Web3.providers.HttpProvider(HOST));

        console.log(web3);
        await this.setState({ web3 : web3 });

        // if (window.ethereum) {
        //     window.web3 = new Web3(window.ethereum);
        //     await window.ethereum.enable();  // Request account access if needed
        //     await this.setState({ web3: window.web3 });
        //     console.log('Window Ethereum ... ')
        //     await this.getContract( window.web3 )
        //     console.log("Global State :  ", this.state)
        // }
        // // Legacy dapp browsers ...
        // else if (window.web3) {
        //     console.log('Window Web3 ?  ', window.web3 );
        //     window.web3 = new Web3( new Web3.providers.HttpProvider(HOST) );
        //     await this.setState({ web3 : window.web3 });
        //     await this.getContract( window.web3 )
        // }
        // else {
        //     console.log("%cNon-Ethereum browser detected. You should consider trying MetaMask!", "color: red; background-color: yellow; font-size: large");
        //     await this.setState({ isWeb3Browser : false });
        //     const web3 = new Web3(new Web3.providers.HttpProvider(HOST));
        //     await this.setState({ web3 : web3 });
        // }
    }

    render() {
        const handlers = { }
        return (
            <Context.Provider value={{ globalstate : this.state, handlers : handlers}}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Provider;
