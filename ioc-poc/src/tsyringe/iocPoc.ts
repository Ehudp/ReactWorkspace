//import { Container, interfaces } from 'inversify';
import IHttpService from '../interfaces/IHttpService';
import ILoggerService from '../interfaces/ILoggerService';
import IWebApiService from '../interfaces/IWebApiService';
import IOC, { IOC_TYPES } from './IOC';
//import IOCS from './IOCS';
import HttpService from './services/HttpService';
import LoggerService from './services/LoggerService';
import MockHttpService from './services/MockHttpService';
import MockLoggerService from './services/MockLoggerService';
import MockWebApiService from './services/MockWebApiService';
import WebApiService from './services/WebApiService';


/* not message:'Ambiguous match found for serviceIdentifier: 
   if hot reload it try register again 
    no async resolve 
*/



export const tryIoc = () =>
{


    try
    {

        //applyMiddleware();
        //registerWebApiService();
        //registerWebApiMockService();
        registerHttpService();
        //registerHttpService();
        //registerMockHttpService();
        //registerWebApiService();
        //registerWebApiMockService();
        //printContainer();

    } catch (error)
    {
        console.log(error);
    }
}

const registerWebApiMockService = () =>
{
    IOC.register<IHttpService>(MockHttpService, IOC_TYPES.httpMock);
    IOC.register<ILoggerService>(MockLoggerService, IOC_TYPES.loggerMock);
    IOC.register<IWebApiService>(MockWebApiService, IOC_TYPES.webApiMock);

    var webApiService = IOC.Resolve<IWebApiService>(IOC_TYPES.webApiMock);
    //console.log(IOC.isBound(IOC_TYPES.httpMock));
    webApiService.getAllAsset();
}

const registerWebApiService = () =>
{
    try
    {
        IOC.register<IHttpService>(HttpService, IOC_TYPES.http);
        IOC.register<ILoggerService>(LoggerService, IOC_TYPES.logger);
        IOC.register<IWebApiService>(WebApiService, IOC_TYPES.webApi);
        printContainer();
        var webApiService = IOC.Resolve<IWebApiService>(IOC_TYPES.webApi);

        webApiService.getAllAsset();
    }
    catch (error)
    {
        console.log(error);
    }

}

const printContainer = () =>
{
    //console.log(container);
    console.log(IOC.container);
}

const applyMiddleware = () =>
{
    //container.applyMiddleware(logger);
    // IOC.applyMiddleware(logger);
}

const registerMockHttpService = () =>
{
    IOC.register<IHttpService>(MockHttpService, IOC_TYPES.httpMock);
    var service = IOC.Resolve<IHttpService>(IOC_TYPES.httpMock);
    var service1 = IOC.Resolve<IHttpService>(IOC_TYPES.httpMock);
    console.log(`isEqual ${service === service1}`);
    service.get();

    service.getInstance();
    console.log(service);
}

const registerHttpService = () =>
{
    IOC.register<IHttpService>(HttpService, IOC_TYPES.http);
    var service = IOC.Resolve<IHttpService>(IOC_TYPES.http);
    service.get();
    service.getInstance();
    console.log(service);
}

// function logger(planAndResolve: interfaces.Next): interfaces.Next
// {
//     return (args: interfaces.NextArgs) =>
//     {
//         let start = new Date().getTime();
//         let result = planAndResolve(args);
//         let end = new Date().getTime();
//         console.log(`resolve time  ${end - start}`);
//         return result;
//     }
// };