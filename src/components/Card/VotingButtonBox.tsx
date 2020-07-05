import React from 'react';
import { useStore } from 'react-redux';
import Box from '@material-ui/core/Box';
import ClearIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { VotingButtonBoxProps } from './interface';
import { useStyles } from './styles';
import { calcVoteResults } from './helpers';
import translater from '../../global/translation.json';

const VotingButtonBox: React.FC<VotingButtonBoxProps> = ({ isAdmin, cardInfo, userId, votingAction, isUserVoted, defenition}) => {
    const classes = useStyles();

    const { getState } = useStore();
    const store = getState()[`${defenition}PageReducer`];
    const filteredParams = {
    basicFilterName: store.basicFilterName, 
    advancedFilterName: store.advancedFilterName, 
    advancedFilterValue: store.advancedFilterValue
    };
    
    const handleClick = (votingName: string) => {
        const voteParams = votingName === 'agrees' ? calcVoteResults(cardInfo): null;
        votingAction(cardInfo.id, votingName, userId, defenition, filteredParams, voteParams);
    };

    return (
        <Box className={classes.voteBox}>
            {!isUserVoted &&
                <div>
                    <Typography paragraph className={classes.cardContentList}>
                        {isAdmin 
                        ? translater.card.votingButtonBox.titleForAdmin
                        : translater.card.votingButtonBox.title}
                    </Typography>
                    <Button
                        onClick={handleClick.bind(null, 'agrees')}
                        variant="outlined"
                        size="medium"
                        className={classes.cardContentButton}
                        startIcon={<CheckIcon style={{ color: "#4caf50" }} />}
                    >
                        {isAdmin 
                        ? translater.card.votingButtonBox.agreesBtnForAdmin
                        : translater.card.votingButtonBox.agreesBtn}
                    </Button>
                    <Button
                        onClick={handleClick.bind(null, 'against')}
                        variant="outlined"
                        size="medium"
                        className={classes.cardContentButton}
                        startIcon={<ClearIcon style={{ color: "#ff0000" }} />}
                    >
                        {isAdmin 
                        ? translater.card.votingButtonBox.againstBtnForAdmin 
                        : translater.card.votingButtonBox.againstBtn}
                    </Button>
                    <Button
                        onClick={handleClick.bind(null, 'abstained')}
                        variant="outlined"
                        size="medium"
                        className={classes.cardContentButton}
                        startIcon={<HomeIcon style={{ color: "#0000ff" }} />}
                    >
                        {isAdmin 
                        ? translater.card.votingButtonBox.abstainedBtnForAdmin
                        : translater.card.votingButtonBox.abstainedBtn}
                    </Button>
                </div>}
            {isUserVoted && <Typography paragraph className={classes.cardAfterVoiteText}>
                {translater.card.votingButtonBox.userVotedText}
      </Typography>}
        </Box>
    )
};

export default VotingButtonBox;