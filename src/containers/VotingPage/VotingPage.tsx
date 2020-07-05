import React from 'react';
import { connect } from 'react-redux';
import { VotingPageProps, Protocol } from './interface';
import { buildProtocolDataStructure } from '../ProtocolsPage/helpers';
import { limitString } from '../../global/helpers';
import BallotIcon from "@material-ui/icons/Ballot";
import Card from '../../components/Card';
import { votingProtocolsRequest, votingAction } from './actions';
import { openModalWithDetail } from '../MainPage/actions';
import './VotingPage.scss';
import translater from '../../global/translation.json';

export const VotingPage: React.FC<VotingPageProps> = ({ votingProtocolsRequest, protocols, votingAction }) => {
  const userId = 'tenantId15';
  const cardIcon = <BallotIcon style={{ color: "#0076e4" }} fontSize="large" />;
  React.useEffect(() => {
    votingProtocolsRequest();
  }, [])

  return (
    <div className="voting-page-container">
      <div className="voting-page-content-container">
        {protocols.map((protocol: Protocol, i: number) => (
          <Card
            key={i}
            userId={userId}
            defenition={"protocols"}
            info={protocol}
            icon={cardIcon}
            title={limitString(protocol.title, 50)}
            votingAction={votingAction}
            canVoteOnThisPage={true}
            canReadDetails={true}
            isDetailsInPDF={true}
            openModalWithDetail={openModalWithDetail}
            dataStructure ={buildProtocolDataStructure(protocol, translater)}
          />
        ))}
      </div>
    </div>
  )
};

const mapStateToProps = (state: any) => ({
  protocols: state.votingPageReducer.protocols,
});

const mapDispatchToProps = {
  votingProtocolsRequest,
  votingAction,
  openModalWithDetail
}

export default connect(mapStateToProps, mapDispatchToProps)(VotingPage);