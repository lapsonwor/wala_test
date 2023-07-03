export type IAverageEuiTypes = IAverageEui[];

export type IAverageEui = {
    type: string;
    average_eui: string;
};

export type IBuilding = {
    PrimaryPropertyType: string;
    PropertyName: string;
    Address: string;
    NumberOfFloors: number;
    CouncilDistrictCode: number;
    YearBuilt: number;
};