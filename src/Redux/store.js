  
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

const middleware = applyMiddleware(thunk, logger);

const initialUserData = {
  title : null,
  firstName : null,
  middleName : null,
  lastName : null,
  RichTextData : null,
  profileImage : null,
  displayImage: null
    // profileImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
  };  


  
  function rootReducer(state = initialUserData, action) {
    switch(action.type) {
      case 'USER_DATA':
        return { ...state, userData : action.payload.userData}
      default:
        return state;
    }
  };


  const persistConfig = {
    key: 'userData',
    storage: storage,
    blacklist: ['addUserData'] // which reducer want to store
  };

  const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer,middleware);

export const persistor = persistStore(store, null, () => {
  // if you want to get restoredState
  console.log("uploadProfileImage", store.getState());
});

// export default { store, persistor};