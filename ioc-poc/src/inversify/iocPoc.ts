import { Container, interfaces } from 'inversify';
import IHttpService from '../interfaces/IHttpService';
import ILoggerService from '../interfaces/ILoggerService';
import IWebApiService from '../interfaces/IWebApiService';
import IOC, { IOC_TYPES } from './IOC';
import IOCS from './IOCS';
import HttpService from './services/HttpService';
import LoggerService from './services/LoggerService';
import MockHttpService from './services/MockHttpService';
import MockLoggerService from './services/MockLoggerService';
import MockWebApiService from './services/MockWebApiService';
import WebApiService from './services/WebApiService';


/* message:'Ambiguous match found for serviceIdentifier: 
   if hot reload it try register again and not protect
   we can try protect this but not sure we want 
   or not working in static/singleton 

   lots of warning need to investigate 
*/

const container = new Container({ defaultScope: 'Singleton' });

export const tryIoc = async () =>
{


    try
    {
        //registerWebApiMockServiceSingleton();


        //applyMiddleware();
        registerWebApiService();
        //registerWebApiMockService();
        //registerContainer();
        //registerHttpService();
        //registerMockHttpService();
        //await resolveHttpServiceAsync();
        //await resolveMockHttpServiceAsync();
        //printContainer();

    } catch (error)
    {
        console.log(error);
    }
}

const registerWebApiMockServiceSingleton = () =>
{
    const ioc = IOCS.getInstance();

    ioc.registerSafe<IHttpService>(MockHttpService, IOC_TYPES.httpMock);
    ioc.registerSafe<ILoggerService>(MockLoggerService, IOC_TYPES.loggerMock);
    ioc.registerSafe<IWebApiService>(MockWebApiService, IOC_TYPES.webApiMock);

    const webApiService = ioc.Resolve<IWebApiService>(IOC_TYPES.webApiMock);
    console.log(ioc.isBound(IOC_TYPES.httpMock));
    webApiService.getAllAsset();
}

const registerWebApiMockService = () =>
{
    IOC.register<IHttpService>(MockHttpService, IOC_TYPES.httpMock);
    IOC.register<ILoggerService>(MockLoggerService, IOC_TYPES.loggerMock);
    IOC.register<IWebApiService>(MockWebApiService);

    const webApiService = IOC.Resolve<IWebApiService>();
    console.log(IOC.isBound(IOC_TYPES.httpMock));
    webApiService.getAllAsset();
}

const registerWebApiService = () =>
{
    IOC.register<IHttpService>(HttpService, IOC_TYPES.http);
    IOC.register<ILoggerService>(LoggerService, IOC_TYPES.logger);
    IOC.register<IWebApiService>(WebApiService);

    const webApiService = IOC.Resolve<IWebApiService>();
    const webApiService1 = IOC.Resolve<IWebApiService>();

    console.log(`isEqual ${webApiService === webApiService1}`);

    webApiService.getAllAsset();
}

const printContainer = () =>
{
    //console.log(container);
    console.log(IOC.container);
}

const applyMiddleware = () =>
{
    //container.applyMiddleware(logger);
    IOC.applyMiddleware(logger);
}

const registerMockHttpService = () =>
{
    IOC.register<IHttpService>(MockHttpService, IOC_TYPES.httpMock);
    const service = IOC.Resolve<IHttpService>(IOC_TYPES.httpMock);
    service.get();
    service.getInstance();
    console.log(service);
}

const resolveMockHttpServiceAsync = async () =>
{
    IOC.register<IHttpService>(MockHttpService, IOC_TYPES.httpMock);
    const service = await IOC.ResolveAsync<IHttpService>(IOC_TYPES.httpMock);
    service.get();
    service.getInstance();
    console.log(service);
}

const resolveHttpServiceAsync = async () =>
{
    IOC.register<IHttpService>(HttpService);
    const service = await IOC.ResolveAsync<IHttpService>();
    service.get();
    service.getInstance();
    console.log(service);
}

const registerHttpService = () =>
{
    IOC.register<IHttpService>(HttpService);
    const service = IOC.Resolve<IHttpService>();
    service.get();
    service.getInstance();
    console.log(service);
}

const registerContainer = () =>
{
    container.bind<IHttpService>('').to(HttpService);
    const instance = container.get<IHttpService>('');
    console.log(instance);
}

function logger(planAndResolve: interfaces.Next): interfaces.Next
{
    return (args: interfaces.NextArgs) =>
    {
        let start = new Date().getTime();
        let result = planAndResolve(args);
        let end = new Date().getTime();
        console.log(`resolve time  ${end - start}`);
        return result;
    }
};