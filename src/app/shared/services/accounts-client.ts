import { userFieldsFragment } from '../../graphql/queries/user.fragment';
import { getApolloClient } from '../../graphql/client/apollo-client';

import GraphQLClient from '@accounts/graphql-client';
import {AccountsClient} from '@accounts/client';
import {TokenStorage} from '@accounts/client/lib/types';


const client = getApolloClient();
const graphQLInterface = new GraphQLClient({
  graphQLClient: client,
  userFieldsFragment,
});

// @ts-ignore
const storage: TokenStorage = localStorage;


const accountsClient = new AccountsClient({
  tokenStorage: storage,
}, graphQLInterface);

export function getAccountsClient() {
  return accountsClient;
}

