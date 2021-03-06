﻿import ApiService from '@/services/ApiService';

export class TableDataService extends ApiService
{
    public static getItems(tableName: string): Promise<any[]>
    {
        return new Promise((resolve, reject) =>
        {
            const url = tableName;
            this.httpClient().get(url)
                .then((response) => resolve(response.data))
                .catch(reject);
        });
    }

    public static getItem(tableName: string, itemId: string): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            const url = tableName + '/' + itemId;
            this.httpClient().get(url)
                .then((response) => resolve(response.data))
                .catch(reject);
        });
    }

    public static updateItem(tableName: string, itemId: string, item: any): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            const url = tableName + '/' + itemId;
            this.httpClient().put(url, item)
                .then(resolve)
                .catch(reject);
        });
    }

    public static addItem(tableName: string, item: any): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            const url = tableName;
            this.httpClient().post(url, item)
                .then(resolve)
                .catch(reject);
        });
    }

    public static deleteItem(tableName: string, id: string): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            const url = tableName + '/' + id;
            this.httpClient().delete(url)
                .then(resolve)
                .catch(reject);
        });
    }
}
