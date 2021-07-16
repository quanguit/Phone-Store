import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './root-reducer';

const persistConfig = {
	key: 'cart',
	storage: storage,
	whitelist: ['cart'],
};

const pReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(thunk, logger);
const store = createStore(pReducer, middleware);

const persistor = persistStore(store);

export { persistor, store };
