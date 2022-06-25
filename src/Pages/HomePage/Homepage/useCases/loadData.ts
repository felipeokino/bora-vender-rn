import {  ItemList } from '../../../common';
import { IHTTPService } from './../../../../services/HTTPService/interfaces/IHTTPService';
export class LoadData {
    readonly dataFetchUrl = 'https://gist.githubusercontent.com/felipeokino/ffbaf36f8a2480b45dcc9a57aecd21ca/raw/213de2d64ffa64a1bb92d9d59452983faed28269/Products.json'
    constructor(private httpService: IHTTPService) {}

    async run(): Promise<ItemList> {
        const response =  await this.httpService.get<undefined, ItemList>(this.dataFetchUrl);
        return response;
    }
}
