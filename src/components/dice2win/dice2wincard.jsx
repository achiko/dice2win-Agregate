import React, {Component} from 'react';
import _ from 'lodash';
import { ArrowRight } from 'react-feather';
import Context from '../../context/Context'

class Dice2WinCard extends Component {

    static contextType = Context;

    constructor(props) {
        super(props);
            this.state = { 
                totalPayouts : 0
            }
    }

    componentDidMount () {
        const {web3} = this.context.globalstate;
        const { payments } = this.props.data;
        let _total =  _.sumBy(payments,function(o) {  return  parseFloat(web3.utils.fromWei(o.amount));   });
        console.log('Total ::::  ', _total);
        this.setState({totalPayouts :  _total.toFixed(2) })
    }

    render() { 
        return (  
            <div className="card shadow-lg">

            <div className="card-body">

                {/* <!-- Preheading --> */}
                <div className="text-center mb-3">
                    <span className="badge badge-pill badge-primary-soft">
                        <span className="h6 text-uppercase">dice2.win</span>
                    </span>
                </div>

                {/* <!-- Price --> */}
                <div className="d-flex justify-content-center">
                    <span className="h2 mb-0 mt-2"></span>
                    <span className="price display-2 mb-0" data-annual="0" data-monthly="0">
                        { this.state.totalPayouts }
                    </span>
                    <span className="h2 align-self-end mb-1">ETH</span>
                </div>

                {/* <!-- Text --> */}
                <p className="text-center text-muted mb-5">Total Wagers</p>

                <div className="d-flex">
                    <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                        <i className="fe fe-check"></i>
                    </div>
                    <p>Provably fair bets backed by simple open-sourced contract</p>
                </div>

                <div className="d-flex">
                    <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                        <i className="fe fe-check"></i>
                    </div>
                    <p className="mb-5">
                        No sign-ups or deposits, just 1% edge and jackpot!
                    </p>
                </div>

                
                <a href="https://dice2.win/" className="btn btn-block btn-primary-soft">
                    Play Game <i className="fe fe-arrow-right ml-3"></i>
                </a>
    
                </div>
            </div>
        );
    }
}
 
export default Dice2WinCard;