//import 'reflect-metadata';
import { inject, injectable } from "inversify";
import IWebApiService from "../../interfaces/IWebApiService"
import IHttpService from "../../interfaces/IHttpService"
import { IOC_TYPES } from "../IOC";
import ILoggerService from "../../interfaces/ILoggerService";

@injectable()
export default class WebApiService implements IWebApiService
{
    //Must have this named injection 
    //Must have this named injection 
    @inject(IOC_TYPES.http)
    private _httpService!: IHttpService;

    @inject(IOC_TYPES.logger)
    private _loggerService!: ILoggerService;
    //have bug in ctor injection in babel  
    //https://github.com/inversify/InversifyJS/issues/1007
    // constructor(@inject(IOC_MOCK_TYPES.http) private _httpService: IHttpService)
    // {
    //     //this._httpService = httpService;
    // }

    getAllAsset(): any
    {
        this._httpService.getInstance();
        this._loggerService.log("WebApiService");
        return ""
    }
}