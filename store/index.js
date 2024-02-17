import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import expandSidebar from "./expandSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { thunk } from "redux-thunk";
const reducers = combineReducers({ expandSidebar });

const config = {
  key: "root",
  storage,
};

const reducer = persistReducer(config, reducers);

const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== "production",
  // middleware: [thunk],
});

export default store;
