export const additionalParam = 
{
    frequency: {
        value: "",
        valid: true,
        label: "Frequency",
        validationRules: {
            minLength: 1,
        },
        touched: false,
        keyboardType:'numeric'
    },
    eNodeBheight: {
        value: "",
        valid: true,
        label: "Height of eNodeB",
        validationRules: {
            minLength: 1,
        },
        touched: false,
        keyboardType:'numeric'
    },
    ueheight: {
        value: "",
        valid: true,
        label: "Height of UE",
        validationRules: {
            minLength: 1,
        },
        touched: false,
        keyboardType:'numeric'
    },
    cellType: {
        value: "Trisectoriel",
        valid: true,
        label: "Cell Type",
        validationRules: {
            minLength: 1,
        },
        touched: false,
        keyboardType:'default'
    },
    // cellRadius: {
    //     value: "",
    //     valid: true,
    //     label: "Cell Radius",
    //     validationRules: {
    //         minLength: 1,
    //     },
    //     touched: false,
    //     keyboardType:'numeric'
    // },
    // cellArea: {
    //     value: "",
    //     valid: true,
    //     label: "Cell Area",
    //     validationRules: {
    //         minLength: 1,
    //     },
    //     touched: false,
    //     keyboardType:'numeric'
    // },
    // numberOfSites: {
    //     value: "",
    //     valid: true,
    //     label: "Number Of Sites",
    //     validationRules: {
    //         minLength: 1,
    //     },
    //     touched: false,
    //     keyboardType:'numeric'
    // },
    propagationModel: {
        value: "COST231",
        valid: true,
        label: "Propagation Model",
        validationRules: {
            minLength: 1,
        },
        touched: false,
    },
};