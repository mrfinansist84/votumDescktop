import React from 'react';
import { CardProps } from './interface';
import MaterialUICard from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import VotingButtonBox from './VotingButtonBox';
import { checkIfTheUserVoted } from './helpers';
import { BLUE_FOR_CARD } from '../../global/pallete';
import { useStyles } from './styles';
import './Card.scss';
import translater from '../../global/translation.json';

const Card = (props: any) => {
  const {
    userId,
    info,
    defenition,
    dataStructure,
    title = '',
    icon,
    isAdmin = false,
    votingAction = () => { },
    canVoteOnThisPage = false,
    openModalWithDetail = () => { },
    canReadDetails = false,
    isDetailsInPDF = false
  } = props;

  const classes = useStyles();
  const isUserVoted = canVoteOnThisPage ? checkIfTheUserVoted(userId, info) : false;

  return (
    <div className={`card-container-${defenition}`}>
      <MaterialUICard
        className={classes.root}
        style={{ borderLeftColor: BLUE_FOR_CARD }}
      >
        <CardHeader
          classes={{
            content: classes.cardHeaderContent,
            title: classes.cardHeaderTitle
          }}
          style={{ color: BLUE_FOR_CARD }}
          avatar={icon}
          title={title}
        />
        <CardContent className={classes.cardContentWrapper}>
          {dataStructure.map((card: any, i: number) => (
            <Typography paragraph className={classes.cardContentList} key={i}>
              {card.fieldName}
              <Typography
                color="textSecondary"
                component="span"
                className={classes.cardContentInnerText}>
                {card.value}
              </Typography>
            </Typography>
          ))}
        </CardContent>
        {canReadDetails && <CardActions
          disableSpacing
          className={classes.cardActionsWrapper}>
          {!isDetailsInPDF && <Button
            variant="outlined"
            size="medium"
            onClick={() => openModalWithDetail(info, isDetailsInPDF)}>
            {translater.card.detailsBtn}
      </Button>}
          {isDetailsInPDF && <a target='_blank' href={info.link} className="link-detail">
          {translater.card.detailsBtn}</a>}
          {(canVoteOnThisPage || isAdmin) &&
            (info.status === 'voting' || info.status === 'inDiscussion') &&
            <VotingButtonBox
              isUserVoted={isUserVoted}
              cardInfo={info}
              votingAction={votingAction}
              defenition={defenition}
              userId={userId}
              isAdmin={isAdmin}
            />}
        </CardActions>}
      </MaterialUICard>
    </div>
  );
}

export default Card;