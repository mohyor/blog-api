import * as dataModel from '../../../data-model'

export interface Super extends dataModel.DataModel {
    userId: string;
    subscription: string;
}