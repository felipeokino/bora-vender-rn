export interface IHTTPService {
    get<I, O>(url: string, data?: I): Promise<O>;
    post<I, O>(url: string, data: I): Promise<O>;
    put<I, O>(url: string, data: I): Promise<O>;
    delete<O>(url: string): Promise<O>;
}