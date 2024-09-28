import React from 'react';
import { Provider, useSelector } from 'react-redux';
import store from './store';
import ThemeSwitcher from './ThemeSwitcher';
import './App.css';

const AppContent = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  return (
    <div className={isDarkTheme ? 'dark' : 'light'}>
      <h1>Переключатель тем</h1>
      <ThemeSwitcher />
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;