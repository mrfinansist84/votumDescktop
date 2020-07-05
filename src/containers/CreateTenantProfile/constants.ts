export const CREATE_TENANTS_PROFILE_REQUEST = 'CREATE_TENANTS_PROFILE_REQUEST';
export const CREATE_TENANTS_PROFILE_SUCCESS = 'CREATE_TENANTS_PROFILE_SUCCESS';

export const fieldSettingsName = (translater: any) => [{
    label: translater.createTenantProfile.fieldSettings.flat,
    type: "number",
    value: "flatNumber",
    placeholder: translater.createTenantProfile.fieldSettings.inputFlat
},{
    label: translater.createTenantProfile.fieldSettings.secondName,
    type: "text",
    value: "secondName",
    placeholder: translater.createTenantProfile.fieldSettings.inputSecondName
},{
    label: translater.createTenantProfile.fieldSettings.name,
    type: "text",
    value: "name",
    placeholder: translater.createTenantProfile.fieldSettings.inputName
}];

export const fieldSettingsPersonalData = (translater: any) => [{
    label: translater.createTenantProfile.fieldSettings.email,
    type: "email",
    value: "email",
    placeholder: translater.createTenantProfile.fieldSettings.inputEmail
},{
    label: translater.createTenantProfile.fieldSettings.area,
    type: "number",
    value: "area",
    placeholder: translater.createTenantProfile.fieldSettings.inputArea
},{
    label: translater.createTenantProfile.fieldSettings.tel,
    type: "tel",
    value: "phoneNumber",
    placeholder: translater.createTenantProfile.fieldSettings.inputTel
}];