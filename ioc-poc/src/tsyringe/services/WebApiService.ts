import 'reflect-metadata';
import { inject, injectable } from "tsyringe";
import IWebApiService from "../../interfaces/IWebApiService"
import IHttpService from "../../interfaces/IHttpService"
import IOC, { IOC_TYPES } from "../IOC";
import ILoggerService from "../../interfaces/ILoggerService";

@injectable()
export default class WebApiService implements IWebApiService
{

    private _httpService: IHttpService = IOC.Resolve<IHttpService>(IOC_TYPES.http);
    private _loggerService: ILoggerService = IOC.Resolve<ILoggerService>(IOC_TYPES.logger);


    // constructor(@inject(IOC_TYPES.http) httpService: IHttpService)
    // {
    //     this._httpService = httpService;
    //     //this._loggerService = loggerService;
    // }

    getAllAsset(): any
    {
        this._httpService.getInstance();
        this._loggerService.log("WebApiService");
        return ""
    }
}