import { createStore,compose,applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk"
import { rootReducer } from "./root";
// import persistReducer from "redux-persist/es/persistReducer";
const persistConfig = {
    key: "root",
    storage: storage,
    blacklist:['user']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const middleWares = [process.env.NODE_ENV === 'development' && logger, thunk].filter(Boolean)
const composedEnhancers = compose(applyMiddleware(...middleWares))
export const store = createStore(persistedReducer, undefined, composedEnhancers)
export const persistor = persistStore(store)