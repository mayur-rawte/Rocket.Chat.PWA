import {getApolloClient} from '../../graphql/client/apollo-client';
import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore} from 'redux-persist';
import {persistCombineReducers} from 'redux-persist/es/persistCombineReducers';
import storage from 'redux-persist/es/storage';


const apolloClient = getApolloClient();

export const store = createStore(
  persistCombineReducers({key: 'primary', storage},
    {
    apollo: apolloClient.reducer()
  }),
  compose(
    applyMiddleware(apolloClient.middleware())
  ),
);

let persistor;

export const reduxPersist = () => new Promise((resolve) => {
  persistor = persistStore(
    store, {},
    () => resolve()
  );
});

export const getPersistor = () => persistor;
