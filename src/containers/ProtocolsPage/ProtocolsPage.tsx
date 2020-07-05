import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ProtocolsPageProps, Protocol } from './interface';
import BallotIcon from "@material-ui/icons/Ballot";
import { limitString } from '../../global/helpers';
import { votingAction } from '../VotingPage/actions';
import { filteredProtocolsRequest, controlsAction } from './actions';
import { calcDocumentAmount, openModalWithDetail } from '../MainPage/actions.js';
import Card from '../../components/Card';
import Filter from '../../components/Filter';
import { buildProtocolDataStructure, filterSettingProtocol } from './helpers';
import './ProtocolsPage.scss';
import translater from '../../global/translation.json';

export const ProtocolsPage: React.FC<ProtocolsPageProps> = props => {
  const { controlsAction, filteredProtocolsRequest, filteredProtocols, openModalWithDetail, calcDocumentAmount } = props;
  const userId = '23';
  const cardIcon = <BallotIcon style={{ color: "#0076e4" }} fontSize="large" />;
  
  useEffect(() => {
    const documentsAmount = filteredProtocols ? filteredProtocols.length : 0;
    calcDocumentAmount(documentsAmount);
  }, [filteredProtocols]);

  return (
    <div className="protocols-page-container">
      <Filter
        settings={filterSettingProtocol(translater)}
        filterAction={filteredProtocolsRequest}
        userId={userId}
      />

      <div className="protocols-page-content-container">
        {!filteredProtocols.length && <div>Выберете выше критерии поиска протоколов</div>}
        {filteredProtocols.length !== 0 && (filteredProtocols.map((protocol: Protocol, i: number) => (
          <Card
            key={i}
            userId={userId}
            defenition={"protocols"}
            icon={cardIcon}
            title={limitString(protocol.title, 50)}
            info={protocol}
            canReadDetails={true}
            isDetailsInPDF={true}
            isAdmin={true}
            openModalWithDetail={openModalWithDetail}
            votingAction={controlsAction}
            dataStructure ={buildProtocolDataStructure(protocol, translater)}
          />
        )))}
      </div>
    </div>
  )
};

const mapStateToProps = (state: any) => ({
  filteredProtocols: state.protocolsPageReducer.filteredProtocols,
});

const mapDispatchToProps = {
  filteredProtocolsRequest,
  calcDocumentAmount,
  votingAction,
  openModalWithDetail,
  controlsAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ProtocolsPage);