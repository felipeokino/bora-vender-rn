import {  ItemList } from '../../../common';
import { IHTTPService } from './../../../../services/HTTPService/interfaces/IHTTPService';
export class LoadData {
    readonly dataFetchUrl = 'https://gist.githubusercontent.com/felipeokino/ffbaf36f8a2480b45dcc9a57aecd21ca/raw/72b4b07270b0379950ef146be94a106fddf0667e/Products.json'
    constructor(private httpService: IHTTPService) {}

    async run(): Promise<ItemList> {
        const response =  await this.httpService.get<undefined, ItemList>(this.dataFetchUrl);
        return response;
    }
}
