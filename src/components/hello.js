import React from 'react';

function Hello() {
  const style = {
    fontSize: '2rem',
    color: '#fff',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    padding: '30px 50px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
    textAlign: 'center',
    margin: '20px auto',
    maxWidth: '400px'
  };

  return (
    <div style={style}>
      Hello Atharv
    </div>
  );
}

export default Hello;

