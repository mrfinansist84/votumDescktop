import React from 'react';
import { connect } from 'react-redux';
//import { VotingPageProps, Protocol } from './interface';
import PersonIcon from "@material-ui/icons/Person";
import { buildTenantDataStructure } from './helpers';
import Card from '../../components/Card';
import { tenantsProfileRequest } from './actions';
import './TenantsProfile.scss';
import translater from '../../global/translation.json';

export const TenantsProfile = (props: any) => {
  const userId = 'tenantId15';
  const cardIcon = <PersonIcon style={{ color: "#0076e4" }} fontSize="large" />;
  
  React.useEffect(() => {
    props.tenantsProfileRequest();
  }, [])

  return (
      <div className="tenant-page-content-container">
        {props.profiles.map((tenant: any, i: number) => (
          <Card 
            key={i}
            userId={userId}
            defenition={"tenants"}
            info={tenant}
            icon={cardIcon}
            title={`${translater.tenantsProfile.startCardTitle}${tenant.flatNumber}`}
            dataStructure ={buildTenantDataStructure(tenant, translater)}
          />
        ))}
      </div>
  )
};

const mapStateToProps = (state: any) => ({
  profiles: state.tenantsProfileReducer.profiles,
});

const mapDispatchToProps = {
  tenantsProfileRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(TenantsProfile);