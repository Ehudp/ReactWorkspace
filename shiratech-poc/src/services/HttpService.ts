import { injectable } from "inversify";
import IHttpService from "../interfaces/IHttpService"

@injectable()
export default class HttpService implements IHttpService
{
    private _name: string = "HttpService";

    public get = () =>
    {
        console.log("get")
    }

    public set = () =>
    {
        console.log("set")
    }
    public post = () =>
    {
        console.log("post")
    }

    public delete = () =>
    {
        console.log("delete")
    }

    getInstance = () =>
    {
        console.log(this._name);
    }


}