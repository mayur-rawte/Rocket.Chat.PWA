import { getApolloClient } from '../../graphql/client/apollo-client';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as accounts } from '@accounts/client';
import { persistStore, autoRehydrate } from 'redux-persist';
import * as immutableTransform from 'redux-persist-transform-immutable';

const apolloClient = getApolloClient();

export const store = createStore(
  combineReducers({
    apollo: apolloClient.reducer(),
    accounts
  }),
  compose(
    applyMiddleware(apolloClient.middleware()),
    autoRehydrate(),
  ),
);

let persistor;

export const reduxPersist = () => new Promise((resolve) => {
  persistor = persistStore(
    store,
    {
      transforms: [immutableTransform({ whitelist: ['accounts'] })]
    },
    () => resolve()
  );
});

export const getPersistor = () => persistor;
