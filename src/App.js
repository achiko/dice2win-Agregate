import React, { Component } from 'react'
import ApolloClient, { gql, InMemoryCache } from 'apollo-boost'
import { ApolloProvider, Query } from 'react-apollo'
import './App.css'
import Header from './components/Header'
import Dice2WinCard from './components/dice2win/dice2wincard'
import EtherRoll from './components/etherroll/Etherollcard'
import BetsTable from './components/BetsTable'


if (!process.env.REACT_APP_GRAPHQL_ENDPOINT) {
  throw new Error('REACT_APP_GRAPHQL_ENDPOINT environment variable not defined')
}

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
})

const PaymentsQuery = gql`{
  payments {
    id
    _beneficiary
    amount
  }
}
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      withImage: false,
      withName: false,
      orderBy: 'displayName',
      showHelpDialog: false,
    }
  }


  render() {

    return (
	
	<div>
	
		<Header /> 
		
		<ApolloProvider client={client}>

		<div className="container">
			<div className="alert alert-secondary" role="alert">
				Total 54 670 ether wagered and 39 450 ether won in the past 30 days 
			</div>
		</div>

      	<div className="container">
			<div className="row">
				<div className="col-12 col-xl-12 d-flex">
					<hr />
					<br />
				</div>
	 			<div className="col-12 col-xl-6 d-flex">
				 <Query query={PaymentsQuery} >
                   {({ data, error, loading }) => {
                    
                     if(loading) {
                       return (
							<p> Loading ... </p>
                       )
                     }

                     if(!loading) {

                         return (
							<Dice2WinCard data={data} />
							//    <List>
							//    { 
							//      data.payments.map( (item, key) => {
							//        return (
							//          <ListItem key={key} alignItems="flex-start">
							//            <ListItemText primary={item.amount / 10 ** 18 } />
							//            <ListItemText secondary={item._beneficiary} />
							//          </ListItem>
							//        )
							//    })}
							//    </List>
                         )
                     }

                   }}
                 </Query>

	 				
		  		</div>
				<div className="col-12 col-xl-6 d-flex">
					{/* <!-- EtherRoll Card  -->  */}
					<EtherRoll /> 
		  		</div>	 
			</div> {/* <!-- Row  -->  */}

			<div className="row">
				<hr />
				<BetsTable />
			</div>
		
		</div> {/* <!-- Container -->  */}
		
		</ApolloProvider>


	</div>

    )
  }
}

export default App
