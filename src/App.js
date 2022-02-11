import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo from './logo.svg';
import './App.css';
import Select from 'react-select';

const options = [
  { value: 'en', label: 'EN' },
  { value: 'ru', label: 'RU' },
];

function App() {
  const { t, i18n } = useTranslation();
  const [nameOptionSelect, setNameOptionSelect] = useState('en');
  const changeLanguage = (language = 'en') => {
    i18n.changeLanguage(language);
  };
  useEffect(() => {
    changeLanguage(nameOptionSelect);
    // eslint-disable-next-line
  }, [nameOptionSelect]);

  const onChangeValue = e => {
    setNameOptionSelect(e.target.value);
  };
  const onValueChange = e => {
    setNameOptionSelect(e.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t('headline')}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('link')}
        </a>
      </header>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('ru')}>RU</button>
      <hr />
      <select defaultValue="en" name="select" onChange={onChangeValue}>
        {options.map((option, idx) => (
          <option key={idx} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <hr />
      <Select
        className="selectReact"
        options={options}
        onChange={onValueChange}
        defaultValue="en"
        name="select"
        placeholder="EN"
      />
      <hr />
      <>
        {i18n.language === 'en' && (
          <button onClick={() => i18n.changeLanguage('ru')}>EN</button>
        )}
        {i18n.language === 'ru' && (
          <button onClick={() => i18n.changeLanguage('en')}>RU</button>
        )}
      </>
      <hr />
      <div>
        <h1>{t('title')}</h1>
      </div>
      <div>{t('description.part1')}</div>
      <div>{t('description.part2')}</div>
    </div>
  );
}

export default App;
