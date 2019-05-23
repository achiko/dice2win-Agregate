import React, {Component} from 'react';
import _ from 'lodash';
import { ArrowRight } from 'react-feather';
import Context from '../../context/Context'

class EtherRoll extends Component {

    static contextType = Context;

    constructor(props) {
        super(props);
            this.state = { 
                totalPayouts : 0
            }
    }

    componentDidMount () {
    }

    render() { 
        return (  
            <div className="card shadow-lg">

            <div className="card-body">

                {/* <!-- Preheading --> */}
                <div className="text-center mb-3">
                    <span className="badge badge-pill badge-primary-soft">
                        <span className="h6 text-uppercase">Etheroll</span>
                    </span>
                </div>

                {/* <!-- Price --> */}
                <div className="d-flex justify-content-center">
                    <span className="h2 mb-0 mt-2"></span>
                    <span className="price display-2 mb-0" data-annual="0" data-monthly="0">
                        { 0.0 }
                    </span>
                    <span className="h2 align-self-end mb-1">ETH</span>
                </div>

                {/* <!-- Text --> */}
                <p className="text-center text-muted mb-5">Total Wagered</p>

                <div className="d-flex">
                    <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                        <i className="fe fe-check"></i>
                    </div>
                    <p>Ethereum dice game</p>
                </div>

                
                <a href="https://etheroll.com" className="btn btn-block btn-primary-soft">
                    Play Game <i className="fe fe-arrow-right ml-3"></i>
                </a>
    
                </div>
            </div>
        );
    }
}
 
export default EtherRoll;