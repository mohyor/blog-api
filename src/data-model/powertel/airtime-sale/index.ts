import * as dataModel from '../../../data-model'

export interface Super extends dataModel.DataModel {
    buyerName: string;
    card?: CardInfo;
    user?: dataModel.core.user.UserInfo;
    amount: number;
    bundles?: {
        gb: number;
        days: number;
    };
}

export interface CardInfo {
    cardId: string;
    min: number;
}