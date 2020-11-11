export const trasmitterParam = 
    {
        maxTxPower: {
            value: {dl: "", ul: ""},
            valid: true,
            label: "Max Tx Power(dBm)",
            validationRules: {
                minLength: 1,
            },
            touched: false,
        },
        rbToDistPower: {
            value: {dl: "", ul: ""},
            valid: true,
            label: "RB to dist Power",
            validationRules: {
                minLength: 1,
            },
            touched: false,
        },
        subcarriersPower: {
            value: {dl: "", ul: ""},
            valid: true,
            label: "Subcarriers Power(dBm)",
            validationRules: {
                minLength: 1,
            },
            touched: false,
        },
        txAntennaGain: {
            value: {dl: "", ul: ""},
            valid: true,
            label: "Tx Antenna gain(dBi)",
            validationRules: {
                minLength: 1,
            },
            touched: false,
        },
        txCableLoss: {
            value: {dl: "", ul: ""},
            valid: true,
            label: "Tx Cable Loss(dB)",
            validationRules: {
                minLength: 1,
            },
            touched: false,
        },
        eirp: {
            value: "",
            valid: true,
            label: "EIRP Per Subcarrier(dBm)",
            validationRules: {
                minLength: 1,
            },
            touched: false,
        },
    };

export const receiverParam = 
    {
        rxNoise: {
            value: {dl: "", ul: ""},
            valid: true,
            label: "Rx Noise Figure(dB)",
            validationRules: {
                minLength: 1,
            },
            touched: false,
        },
        sinr: {
            value: {dl: "", ul: ""},
            valid: true,
            label: "SINR(dB)",
            validationRules: {
                minLength: 1,
            },
            touched: false,
        },
        rxSensibility: {
            value: {dl: "", ul: ""},
            valid: true,
            label: "Rx Sensibility(dB)",
            validationRules: {
                minLength: 1,
            },
            touched: false,
        },
        rxCableLoss: {
            value: {dl: "", ul: ""},
            valid: true,
            label: "Rx Cable Loss(dB)",
            validationRules: {
                minLength: 1,
            },
            touched: false,
        },
        rxAntennaGain: {
            value: {dl: "", ul: ""},
            valid: true,
            label: "Rx Antenna Gain(dB)",
            validationRules: {
                minLength: 1,
            },
            touched: false,
        }
    };


    
export const additionalParam = 
{
    penLoss: {
        value: "",
        valid: true,
        label: "Penetration Loss(dB)",
        validationRules: {
            minLength: 1,
        },
        touched: false,
    },
    shadowFading: {
        value: "",
        valid: true,
        label: "Shadow Fading(dB)",
        validationRules: {
            minLength: 1,
        },
        touched: false,
    }
};
    
export const pathLossParam = 
{
    mapl: {
        value: "",
        valid: true,
        label: "MAPL(dB)",
        validationRules: {
            minLength: 1,
        },
        touched: false,
    },
    pathLoss: {
        value: "",
        valid: true,
        label: "Path Loss(dB)",
        validationRules: {
            minLength: 1,
        },
        touched: false,
    }
};