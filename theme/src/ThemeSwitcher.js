import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './store';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <button onClick={handleToggle}>
        Переключить на {isDarkTheme ? 'светлую' : 'темную'} тему
      </button>
    </div>
  );
};

export default ThemeSwitcher;