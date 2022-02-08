
import { Container, interfaces } from "inversify";

export const IOC_TYPES = {
    http: "Http",
    httpMock: "HttpMock",
    logger: "Logger",
    loggerMock: "LoggerMock",
    webApi: "WebApi",
    webApiMock: "WebApiMock"
};
class IOC
{
    private static _container = new Container({ defaultScope: "Singleton" });

    public static get container()
    {
        return IOC._container;
    }

    static register<TService>(instance: { new(...args: never[]): TService }, identifier: string = "")
    {
        this._container.bind<TService>(identifier).to(instance);
    }

    static Resolve<T>(identifier: string = ""): T
    {
        var instance = this._container.get<T>(identifier);
        return instance;
    }

    static async ResolveAsync<T>(identifier: string = ""): Promise<T>
    {
        var instance = await this._container.getAsync<T>(identifier);
        return instance;
    }

    static applyMiddleware(...middlewares: interfaces.Middleware[]): void
    {
        this._container.applyMiddleware(...middlewares);
    }

    static isBound(identifier: string): boolean
    {
        return this.container.isBound(identifier);
    }

}

export default IOC;
