import 'reflect-metadata';
import React from 'react';
import DiagramComponentSample from './DiagramComponentSample';
import { tryIoc } from './inversify/iocPoc';
//import { tryIoc } from './tsyringe/iocPoc';

const App1 = () => {
  tryIoc();
  return <DiagramComponentSample />;
};

export default App1;
