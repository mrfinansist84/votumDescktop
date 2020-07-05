export interface FilterProps {
    filterAction: (
        basicFilterName: string,
        advancedFilterName: string,
        displayedItems: any,
        userId: string
    ) => void;
    settings:{
        basic: {
        value: string,
        label: string
    }[],
    advanced: {
        value: string,
        label: string
    }[]
}
    ;
    userId: string;
};

export interface RadioButtonBoxProps {
    filterHandler: (value: string) => void, 
    value: string, 
    filters: {value: string, label: string}[]
};