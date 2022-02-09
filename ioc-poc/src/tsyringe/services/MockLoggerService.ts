import { injectable } from "tsyringe";
import ILoggerService from "../../interfaces/ILoggerService";

@injectable()
export default class MockLoggerService implements ILoggerService
{
    log(message: string): void
    {
        console.log(message);
    }
}