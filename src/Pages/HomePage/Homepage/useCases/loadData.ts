import { data } from './../../../mockdata';
import { AxiosResponse } from 'axios';
import {  ItemList } from '../../../common';
import { IHTTPService } from './../../../../services/HTTPService/interfaces/IHTTPService';
export class LoadData {
    readonly dataFetchUrl = 'https://gist.githubusercontent.com/felipeokino/ffbaf36f8a2480b45dcc9a57aecd21ca/raw/4862f01dc5b9234df24565eaa143a7cda1bef296/Products'
    constructor(private httpService: IHTTPService) {}

    async run(): Promise<ItemList> {
        // const response =  await this.httpService.get<undefined, ItemList>(this.dataFetchUrl);
        const response = data;
        return response;
    }
}