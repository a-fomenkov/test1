import { useEffect } from 'react';
import { useLocalStorage } from './../../utils/useHook/useLocalStorage';
import detectDarkMode from './../../utils/detectDarkMode';

import sun from './sun.svg';
import moon from './moon.svg';
import './style.css';

function BtnDarkMode() {

  const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

  useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      const newColorScheme = event.matches ? 'dark' : 'light';
      setDarkMode(newColorScheme);
    });
  }, [setDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === 'light' ? 'dark' : 'light';
    });
  }

  const btnNormal = 'dark-mode-btn';
  const btnActiv = 'dark-mode-btn dark-mode-btn--activ';

  return (
    <button className={darkMode === 'dark' ? btnActiv : btnNormal} onClick={toggleDarkMode}>
      <img
        className="dark-mode-btn__icon"
        src={sun}
        alt="Иконка-солнце"
      />
      <img
        className="dark-mode-btn__icon"
        src={moon}
        alt="Иконка-луны"
      />
    </button>
  );
}

export default BtnDarkMode;