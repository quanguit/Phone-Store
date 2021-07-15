import { combineReducers } from 'redux';
import CartReducers from './cart/cart.reducers';
import UserReducers from './user/user.reducers';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
// 	key: 'root',
// 	storage,
// 	whitelist: ['cart'],
// };

const rootReducer = combineReducers({
	cart: CartReducers,
	user: UserReducers,
});

// export default persistReducer(persistConfig, rootReducer);
export default rootReducer;
