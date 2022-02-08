//import "reflect-metadata";
import { injectable } from "inversify";
import IHttpService from "../../interfaces/IHttpService"


@injectable()
export default class MockHttpService implements IHttpService
{
    private _name: string = "MockHttpService";

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