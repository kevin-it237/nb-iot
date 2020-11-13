export const densityForm = 
{
    city: {
        value: "",
        valid: true,
        label: "City",
        validationRules: {
            minLength: 1,
        },
        touched: false
    },
    houseHoldDensity: {
        value: "",
        valid: true,
        label: "Household density/km2",
        validationRules: {
            minLength: 1,
        },
        touched: false,
        keyboardType:'numeric'
    },
    areaOfCellSite: {
        value: "",
        valid: true,
        label: "Area Of Cell Site",
        validationRules: {
            minLength: 1,
        },
        touched: false,
        keyboardType:'numeric'
    },
    numberOfDevicesHousehold: {
        value: "",
        valid: true,
        label: "Number Of Devices/ Household",
        validationRules: {
            minLength: 1,
        },
        touched: false,
        keyboardType:'numeric'
    },
    numberOfHousehold: {
        value: "",
        valid: true,
        label: "Number Of Household",
        validationRules: {
            minLength: 1,
        },
        touched: false,
        keyboardType:'numeric'
    },
    // numberOfDevicesInCell: {
    //     value: "",
    //     valid: true,
    //     label: "Number of devices in a cell",
    //     validationRules: {
    //         minLength: 1,
    //     },
    //     touched: false,
    //     keyboardType:'numeric'
    // },
    // numberOfSites: {
    //     value: "",
    //     valid: true,
    //     label: "Number Of Sites (eNodeB)",
    //     validationRules: {
    //         minLength: 1,
    //     },
    //     touched: false,
    //     keyboardType:'numeric'
    // }
};