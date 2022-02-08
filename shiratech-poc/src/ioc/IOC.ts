
import { Container } from "inversify";

class IOC
{
    private static _container = new Container({ defaultScope: "Singleton" });

    static register<TService>(instance: { new(...args: never[]): TService })
    {
        this._container.bind<TService>("").to(instance);
    }

    static Resolve<T>(): T
    {
        var instance = this._container.get<T>("");
        return instance;
    }

    static async ResolveAsync<T>(): Promise<T>
    {
        var instance = await this._container.getAsync<T>("");
        return instance;
    }

}

export default IOC;