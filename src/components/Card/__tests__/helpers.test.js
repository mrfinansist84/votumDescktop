import {
    checkIfTheUserVoted
} from '../helpers';

describe('Cards helpers', () => {

    it('checkIfTheUserVoted', () => {
       const userId = '23', 
       card = {
        agrees: ['23'],
        against: ['88'],
        abstained: ['15']
       };
       
       expect(checkIfTheUserVoted(userId, card)).toBeTruthy();
    });

})