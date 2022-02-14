
import { container, Lifecycle } from "tsyringe";

export const IOC_TYPES = {
    http: "Http",
    httpMock: "HttpMock",
    logger: "Logger",
    loggerMock: "LoggerMock",
    webApi: "WebApi",
    webApiMock: "WebApiMock"
};


/*

*/
class IOC
{
    private static _container = container

    public static get container()
    {
        return IOC._container;
    }

    static register<TService>(instance: any, identifier: string = "")
    {
        if (this._container.isRegistered(identifier))
        {
            return;
        }
        this._container.register<TService>(identifier, { useClass: instance }, { lifecycle: Lifecycle.Singleton });
    }

    static Resolve<T>(identifier: string = ""): T
    {
        var instance = this._container.resolve<T>(identifier);
        return instance;
    }

    // static async ResolveAsync<T>(identifier: string = ""): Promise<T>
    // {
    //     var instance = await this._container.getAsync<T>(identifier);
    //     return instance;
    // }

    // static applyMiddleware(...middlewares: interfaces.Middleware[]): void
    // {
    //     this._container.applyMiddleware(...middlewares);
    // }

    // static isBound(identifier: string): boolean
    // {
    //     return this.container.isBound(identifier);
    // }

}

export default IOC;
