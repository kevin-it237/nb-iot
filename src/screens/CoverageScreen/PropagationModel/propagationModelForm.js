export const additionalParam = 
{
    frequency: {
        value: "1500",
        valid: true,
        label: "Frequency",
        validationRules: {
            minLength: 1,
        },
        touched: false,
        keyboardType:'numeric'
    },
    eNodeBheight: {
        value: "30",
        valid: true,
        label: "Height of eNodeB",
        validationRules: {
            minLength: 1,
        },
        touched: false,
        keyboardType:'numeric'
    },
    ueheight: {
        value: "1.5",
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
        value: "COST 231 HATA",
        valid: true,
        label: "Propagation Model",
        validationRules: {
            minLength: 1,
        },
        touched: false,
    },
};