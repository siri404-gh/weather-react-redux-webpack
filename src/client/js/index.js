import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import store from './data/store';
import { Provider } from 'react-redux';
import { WeatherApp } from './components/WeatherApp/WeatherApp';

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <WeatherApp />
        </Provider>
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
  module.hot.accept(() => {
    const nextRootReducer = require('./data/reducer');
    store.replaceReducer(nextRootReducer);
  });
}
