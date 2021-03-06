import { Component, Vue } from 'vue-property-decorator';
import { IStoreState } from '@/store';
import { IStore } from '@/store';
import VueRouter from 'vue-router';
import { Route } from 'vue-router';
import * as ActionTypes from '@/store/ActionTypes';
import * as ParamNames from '@/ParamNames';
import { ITable } from '@/store/SchemaModule';
import { IColumn } from '@/store/SchemaModule';
import { ITableItem } from '@/store/TableDataModule';
import { IAddTableItem } from '@/store/TableDataModule';
import { stringHelper } from '@/helpers/StringHelper';
import { guidHelper } from '@/helpers/GuidHelper';
import FormBase from '@/views/FormBase';
import { LookupService } from '@/services/LookupService';
import { ILookup } from '@/services/LookupService';

@Component
export default class Edit extends FormBase
{
    public sending: boolean = false;

    public item: any = new Object();

    public mounted(): void
    {
        this.$store.dispatch(ActionTypes.getLookups, this.tableSchema);
        this.item = this.createNewItem();
    }

    public validateUser(): boolean
    {
        return false;
    }

    public save(): void
    {
        const payload: IAddTableItem = {
            tableName: this.tableName,
            item: this.item,
        };
        this.$store.dispatch(ActionTypes.addTableItem, payload)
            .then(() => this.close());
    }

    public cancel(): void
    {
        this.close();
    }

    public generateGuid(columnName: string)
    {
        this.item[columnName] = guidHelper.generate();
    }

    public get lookups(): any
    {
        return this.$store.getters.lookups;
    }
}
