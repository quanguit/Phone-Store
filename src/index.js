import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/root-reducer';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const loggerMiddleware = createLogger();

const store = createStore(
	rootReducer,
	applyMiddleware(thunkMiddleware, loggerMiddleware)
);

// const persistor = persistStore(store);

ReactDOM.render(
	<Provider store={store}>
		{/* <PersistGate persistor={persistor}> */}
		<BrowserRouter>
			<App />
		</BrowserRouter>
		{/* </PersistGate> */}
	</Provider>,
	document.getElementById('root')
);
