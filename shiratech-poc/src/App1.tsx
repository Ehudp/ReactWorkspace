import 'reflect-metadata';
import React from 'react';
import DiagramComponentSample from './DiagramComponentSample';
import { tryIoc } from './ioc/iocPoc';

const App1 = () => {
  tryIoc();
  return <DiagramComponentSample />;
};

export default App1;
