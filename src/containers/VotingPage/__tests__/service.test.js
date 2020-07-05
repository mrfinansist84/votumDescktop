import VotingPageService from '../service';

describe('VotingPageService', () => {
    it('should be defined', () => {
        expect(VotingPageService).toBeDefined();
    });

    it('should have a getVotingProtocols method', () => {
        expect(VotingPageService.getVotingProtocols).toBeDefined();
    });

    it('should have a setVotingResult method', () => {
        expect(VotingPageService.setVotingResult).toBeDefined();
    });
});