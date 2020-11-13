export const inputs = 
    {
        bandwidth: {
            value: "1500",
            valid: true,
            label: "Bandwidth",
            validationRules: {
                minLength: 1,
            },
            touched: false,
            keyboardType: 'numeric'
        },
        numberSubcarrier: {
            value: "12",
            valid: true,
            label: "Number of subcarrier",
            validationRules: {
                minLength: 1,
            },
            touched: false,
            keyboardType: 'numeric'
        },
        modCodDL: {
            value: "",
            valid: true,
            label: "Mod & Cod scheme DL",
            validationRules: {
                minLength: 1,
            },
            touched: false,
            keyboardType: 'numeric'
        },
        modCodUL: {
            value: "",
            valid: true,
            label: "Mod & Cod scheme UL",
            validationRules: {
                minLength: 1,
            },
            touched: false,
            keyboardType: 'numeric'
        },
        targetName: {
            value: "",
            valid: true,
            label: "Target name",
            validationRules: {
                minLength: 1,
            },
            touched: false,
            keyboardType: 'default'
        },
        targetType: {
            value: "",
            valid: true,
            label: "Target type",
            validationRules: {
                minLength: 1,
            },
            touched: false,
            keyboardType: 'default'
        },
        targetArea: {
            value: "",
            valid: true,
            label: "Target area",
            validationRules: {
                minLength: 1,
            },
            touched: false,
            keyboardType:'numeric'
        },
        population: {
            value: "",
            valid: true,
            label: "Population",
            validationRules: {
                minLength: 1,
            },
            touched: false,
            keyboardType:'numeric'
        },
    };