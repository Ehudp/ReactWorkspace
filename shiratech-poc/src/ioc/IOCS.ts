import { Container, interfaces } from "inversify";

class IOCInternal
{
    private _container = new Container({ defaultScope: "Singleton" });

    public get container()
    {
        return this._container;
    }

    register<TService>(instance: { new(...args: never[]): TService }, identifier: string = "")
    {
        this._container.bind<TService>(identifier).to(instance);
    }

    registerSafe<TService>(instance: { new(...args: never[]): TService }, identifier: string)
    {
        if (identifier && this.isBound(identifier))
        {
            console.log("Bound");
            return;
        }

        this._container.bind<TService>(identifier).to(instance);
    }


    Resolve<T>(identifier: string = ""): T
    {
        var instance = this._container.get<T>(identifier);
        return instance;
    }

    async ResolveAsync<T>(identifier: string = ""): Promise<T>
    {
        var instance = await this._container.getAsync<T>(identifier);
        return instance;
    }

    applyMiddleware(...middlewares: interfaces.Middleware[]): void
    {
        this._container.applyMiddleware(...middlewares);
    }

    isBound(identifier: string): boolean
    {
        return this.container.isBound(identifier);
    }

}


export default class IOCS
{
    // Use the `Logger` type
    private static instance: IOCInternal
    // Use a private constructor
    private constructor() { }
    // Ensure that there is only one instance created
    public static getInstance(): IOCInternal
    {
        if (!IOCS.instance)
        {
            IOCS.instance = new IOCInternal()
        }
        return IOCS.instance
    }
}