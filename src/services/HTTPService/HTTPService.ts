import { AxiosInstance, HeadersDefaults } from 'axios';
import { IHTTPService } from './interfaces/IHTTPService';

type CustomHeaders = HeadersDefaults & {
    authorization: string
}
export class HTTPService implements IHTTPService {
    constructor(private api: AxiosInstance) {}

    async get<I, O>(url: string, data?: I | undefined): Promise<O> {
        const getResponse = await this.api.get(url);

        return getResponse.data;
    }
    post<I, O>(url: string, data: I): Promise<O> {
        throw new Error('Method not implemented.');
    }
    put<I, O>(url: string, data: I): Promise<O> {
        throw new Error('Method not implemented.');
    }
    delete<O>(url: string): Promise<O> {
        throw new Error('Method not implemented.');
    }
    
}