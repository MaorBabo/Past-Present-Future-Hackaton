import React from 'react';
import logoImage from '../Images/AppLogo.jpeg';

const Logo = () => {
  return (
    <div style={styles.container}>
      <img src={logoImage} alt="Logo" style={styles.logo} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  logo: {
    width: '200px',
    height: '200px',
    marginRight: '10px',
  },
  text: {
    fontSize: '24px',
  },
};

export default Logo;
