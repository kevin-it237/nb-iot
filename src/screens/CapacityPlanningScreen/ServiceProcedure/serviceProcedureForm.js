export const serviceForm = 
{
    sensor: {
        value: {ptf: "1", end: "5000", npd: "24", bm: "20", sm: "10", np: ""},
        valid: true,
        label: "Sensor",
        validationRules: {
            minLength: 1,
        },
        touched: false
    },
    meteringWater: {
        value: {ptf: "0.04", end: "600000", npd: "1", bm: "20", sm: "10", np: ""},
        valid: true,
        label: "Metering Water",
        validationRules: {
            minLength: 1,
        },
        touched: false
    },
    meteringElectric: {
        value: {ptf: "0.04", end: "600000", npd: "1", bm: "20", sm: "10", np: ""},
        valid: true,
        label: "Metering Electric",
        validationRules: {
            minLength: 1,
        },
        touched: false
    },
    publicLightning: {
        value: {ptf: "0.04", end: "10000", npd: "1", bm: "20", sm: "10", np: ""},
        valid: true,
        label: "Public Lightning",
        validationRules: {
            minLength: 1,
        },
        touched: false
    },
    parkingManagement: {
        value: {ptf: "2", end: "4000", npd: "48", bm: "20", sm: "10", np: ""},
        valid: true,
        label: "Parking Management",
        validationRules: {
            minLength: 1,
        },
        touched: false
    },
    trackingLogistic: {
        value: {ptf: "2", end: "1000", npd: "48", bm: "20", sm: "10", np: ""},
        valid: true,
        label: "Tracking Logistic",
        validationRules: {
            minLength: 1,
        },
        touched: false
    },
    assetTracking: {
        value: {ptf: "3", end: "1000", npd: "72", bm: "20", sm: "10", np: ""},
        valid: true,
        label: "Asset Tracking",
        validationRules: {
            minLength: 1,
        },
        touched: false
    },
    agriculture: {
        value: {ptf: "1", end: "1800", npd: "24", bm: "20", sm: "10", np: ""},
        valid: true,
        label: "Agriculture",
        validationRules: {
            minLength: 1,
        },
        touched: false
    },
    wearables: {
        value: {ptf: "0.5", end: "6000", npd: "12", bm: "20", sm: "10", np: ""},
        valid: true,
        label: "Wearables",
        validationRules: {
            minLength: 1,
        },
        touched: false
    },
    homeAutomation: {
        value: {ptf: "0.5", end: "2500", npd: "12", bm: "20", sm: "10", np: ""},
        valid: true,
        label: "Home Automation",
        validationRules: {
            minLength: 1,
        },
        touched: false
    },
};