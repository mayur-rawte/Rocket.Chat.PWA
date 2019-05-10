import {ApolloClient, createNetworkInterface} from 'apollo-client';
import {SubscriptionClient} from 'subscriptions-transport-ws';

import {environment} from '../../../environments/environment';
import {AuthorizationMiddleware} from '../../shared/services/authorization-middleware';

const networkInterface = createNetworkInterface({
  uri: environment.server + '/api/graphql'
});

networkInterface.use([new AuthorizationMiddleware()]);

export const wsClient = new SubscriptionClient(environment.subscriptionServer, {
  reconnect: true,
  connectionParams() {
    return {
      Authorization: AuthorizationMiddleware.token
    };
  },
  lazy: true
});
//
// const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
//   networkInterface,
//   wsClient
// );

const apolloClient = new ApolloClient({
  networkInterface: networkInterface
});

export function getApolloClient(): ApolloClient {
  return apolloClient;
}
