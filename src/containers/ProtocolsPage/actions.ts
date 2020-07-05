import {
    FILTERED_PROTOCOLS_REQUEST,
    FILTERED_PROTOCOLS_SUCCESS,
    CONTROLS_ACTION
} from './constants';
import { Protocol } from './interface';

export const filteredProtocolsRequest = (
    basicFilterName: string, 
    advancedFilterName: string, 
    advancedFilterValue: any,
    userId: string) => ({
    type: FILTERED_PROTOCOLS_REQUEST,
    basicFilterName, 
    advancedFilterName, 
    advancedFilterValue,
    userId
} as const);

export const filteredProtocolsSuccess = (filteredProtocols: Protocol[] | []) => ({
    type: FILTERED_PROTOCOLS_SUCCESS,
    filteredProtocols
} as const);

export const controlsAction = (cardId?: number, controlName?: string, userId?: string, defenition?: string, filteredParams?: any, voteParams?: any) => {
    console.log(cardId,
        controlName,
        userId,
        voteParams,
        filteredParams
        )
    return ({
    type: CONTROLS_ACTION,
    cardId,
    controlName,
    userId,
    voteParams,
    filteredParams,
} as const)};

export type ProtocolsPageActions = 
  | ReturnType<typeof filteredProtocolsRequest>
  | ReturnType<typeof filteredProtocolsSuccess>
  | ReturnType<typeof controlsAction>;