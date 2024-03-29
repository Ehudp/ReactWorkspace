//import 'reflect-metadata';
import { inject, injectable } from "tsyringe";
import IWebApiService from "../../interfaces/IWebApiService"
import IHttpService from "../../interfaces/IHttpService"
import { IOC_TYPES } from "../IOC";
import ILoggerService from "../../interfaces/ILoggerService";

@injectable()
export default class MockWebApiService implements IWebApiService
{

    constructor(@inject(IOC_TYPES.httpMock) private _httpService: IHttpService,
        @inject(IOC_TYPES.loggerMock) private _loggerService: ILoggerService)
    {

    }

    getAllAsset(): any
    {
        this._httpService.getInstance();
        this._loggerService.log("MockWebApiService");
        return ""
    }
}