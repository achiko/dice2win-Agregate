import React, { Component } from 'react'
import ApolloClient, { gql, InMemoryCache } from 'apollo-boost'
import { ApolloProvider, Query } from 'react-apollo'
import {
  Grid,
  LinearProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core'
import './App.css'
import Header from './components/Header'
import Error from './components/Error'
import Gravatars from './components/Gravatars'
import Filter from './components/Filter'

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

  toggleHelpDialog = () => {
    this.setState(state => ({ ...state, showHelpDialog: !state.showHelpDialog }))
  }

  gotoQuickStartGuide = () => {
    window.location.href = 'https://thegraph.com/docs/quick-start'
  }


  

  render() {
    const { withImage, withName, orderBy, showHelpDialog } = this.state

    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Grid container direction="column">
            <Header onHelp={this.toggleHelpDialog} />
            {/* <Filter
              orderBy={orderBy}
              withImage={withImage}
              withName={withName}
              onOrderBy={field => this.setState(state => ({ ...state, orderBy: field }))}
              onToggleWithImage={() =>
                this.setState(state => ({ ...state, withImage: !state.withImage }))
              }
              onToggleWithName={() =>
                this.setState(state => ({ ...state, withName: !state.withName }))
              }
            /> */}
            <Grid item>
              <Grid container>
                <Query
                  query={PaymentsQuery}
                  variables={{ orderBy: orderBy,}}
                >
                  {({ data, error, loading }) => {
                    console.log('Loading :  ', loading);

                    if(loading) {
                      return (
                        <LinearProgress variant="query" style={{ width: '100%' }} />
                      )
                    }

                    if(!loading) {
                        console.log(data.payments)
                        return (
                          <List>
                          { 
                            data.payments.map( (item, key) => {
                              return (
                                <ListItem key={key} alignItems="flex-start">
                                  <ListItemText primary={item.amount / 10 ** 18 } />
                                  <ListItemText secondary={item._beneficiary} />
                                </ListItem>
                              )
                          })}
                          </List>
                        )
                    }

                  }}
                </Query>
              </Grid>
            </Grid>
          </Grid>

        </div>
      </ApolloProvider>
    )
  }
}

export default App
