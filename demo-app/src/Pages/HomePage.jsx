
import React from 'react';
import NavBar from '../Components/NavBar';
import Chat from '../Components/ChatBot';
import Logo from '../Components/Logo';

const HomePage = () => {
  return (
    <div className='background'>
      <NavBar />
      <Logo />
      <Chat />
    </div>
  );
};

export default HomePage;
