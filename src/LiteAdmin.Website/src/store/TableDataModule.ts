﻿import { Module } from 'vuex';
import { MutationTree } from 'vuex';
import { GetterTree } from 'vuex';
import { ActionContext } from 'vuex';
import { ActionTree } from 'vuex';
import { IStoreState } from '@/store/index';
import { TableDataService } from '@/services';
import * as ActionTypes from '@/store/ActionTypes';
import * as MutationTypes from '@/store/MutationTypes';

export interface ITableDataState
{
    tableName: string;
    item: any;
    items: any[];
}

export interface ITableDataGetters
{
    tableName: string;
    item: any;
    items: any[];
}

export interface ITableItem
{
    tableName: string;
    itemId: string;
}

const actions: ActionTree<ITableDataState, IStoreState> = {
    [ActionTypes.getTableItems](context: ActionContext<ITableDataState, IStoreState>, tableName: string): Promise<void>
    {
        context.commit(MutationTypes.updateTableItems, new Array());
        context.commit(MutationTypes.updateTableName, tableName);

        return new Promise<void>((resolve, reject) =>
        {
            TableDataService.getItems(tableName)
                .then((items: any[]) =>
                {
                    context.commit(MutationTypes.updateTableItems, items);
                    resolve();
                })
                .catch(reject);
        });
    },

    [ActionTypes.getTableItem](context: ActionContext<ITableDataState, IStoreState>, payload: ITableItem): Promise<void>
    {
        context.commit(MutationTypes.updateTableItem, new Object());
        context.commit(MutationTypes.updateTableName, payload.tableName);

        return new Promise<void>((resolve, reject) =>
        {
            TableDataService.getItem(payload.tableName, payload.itemId)
                .then((item: any) =>
                {
                    context.commit(MutationTypes.updateTableItem, item);
                    resolve();
                })
                .catch(reject);
        });
    },
};

const getters: GetterTree<ITableDataState, IStoreState> = {

    items(state: ITableDataState): any[]
    {
        return state.items;
    },

    item(state: ITableDataState): any[]
    {
        return state.item;
    },
};

const mutations: MutationTree<ITableDataState> = {
    [MutationTypes.updateTableItems](state: ITableDataState, items: any[]): void
    {
        state.items = items;
    },

    [MutationTypes.updateTableItem](state: ITableDataState, item: any): void
    {
        state.item = item;
    },

    [MutationTypes.updateTableName](state: ITableDataState, tableName: string): void
    {
        state.tableName = tableName;
    },
};

export const module: Module<ITableDataState, IStoreState> = {

    state: {
        item: new Object(),
        items: new Array(),
        tableName: '',
    },
    getters,
    actions,
    mutations,
};

export default module;