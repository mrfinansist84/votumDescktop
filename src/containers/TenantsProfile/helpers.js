export const buildTenantDataStructure = (tenant, translater) => [
    {
      fieldName: translater.tenantsProfile.dataStructure.nameAndSecondName,
      value: `${tenant.name} ${tenant.secondName}`,
    },
    {
      fieldName: translater.tenantsProfile.dataStructure.area,
      value: tenant.area,
    },
    {
      fieldName: translater.tenantsProfile.dataStructure.phoneNumber,
      value: tenant.phoneNumber 
      ? tenant.phoneNumber 
      : translater.tenantsProfile.dataStructure.empty,
    },
    {
      fieldName: translater.tenantsProfile.dataStructure.statusConnected,
      value: tenant.status 
      ? translater.tenantsProfile.dataStructure.connected
      : translater.tenantsProfile.dataStructure.notConnected,
    },
  ];