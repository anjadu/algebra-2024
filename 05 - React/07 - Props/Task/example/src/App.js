import './App.css';


import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function App() {
  const korisnici = [
    { ime: 'Marko', godine: 25 },
    { ime: 'Ana', godine: 30 },
    { ime: 'Ivan', godine: 22 },
  ];

  return (
    <div>
      <UserFunctionComponent ime={korisnici[0].ime} godine={korisnici[0].godine} />
      <UserClassComponent ime={korisnici[1].ime} godine={korisnici[1].godine} />
      <UserWithChildrenComponent ime={korisnici[2].ime} godine={korisnici[2].godine}>
        <p>Ovo je dodatni sadržaj proslijeđen kao children.</p>
      </UserWithChildrenComponent>
    </div>
  );
}