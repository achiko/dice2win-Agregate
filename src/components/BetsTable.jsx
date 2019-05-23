import React, {Component} from 'react'

class BetsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

        
          // <strong> Last 100 bets  </strong>
          <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Site</th>
                  <th scope="col">BetAmount</th>
                  <th scope="col">Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>EtherRoll</td>
                  <td>0.12 ETH</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>EtherRoll</td>
                  <td>0.12 ETH</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Dice2Win</td>
                  <td>0.12 ETH</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Dice2Win</td>
                  <td>0.11 ETH</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          // </div>
         );
    }
}
 
export default BetsTable;