import React from 'react';
import DiagramComponentSample from './DiagramComponentSample';
import IHttpService from './interfaces/IHttpService';
import IOC from './ioc/IOC';
import HttpService from './services/HttpService';

const tryIoc = () => {
  IOC.register<IHttpService>(HttpService);
  var service = IOC.Resolve<IHttpService>();
  service.get();
  service.getInstance();
};

const App1 = () => {
  tryIoc();
  return <DiagramComponentSample />;
};

export default App1;
