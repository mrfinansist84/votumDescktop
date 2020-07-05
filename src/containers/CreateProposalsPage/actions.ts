import {
    CREATE_PROPOSALS_REQUEST,
    CREATE_PROPOSALS_SUCCESS, 
} from './constants';

export const createProposalRequest = (
    proposal: {
        title: string,
        text: string
    }, userId: string) => ({
    type: CREATE_PROPOSALS_REQUEST,
    proposal,
    userId
} as const);

export const createProposalSuccess = () => ({
    type: CREATE_PROPOSALS_SUCCESS,
} as const);

export type CreateProposalActions = 
  | ReturnType<typeof createProposalRequest>
  | ReturnType<typeof createProposalSuccess>;