export const trasmitterParam = 
    {
        maxTxPower: {
            value: {dl: "46", ul: "23"},
            valid: true,
            label: "Max Tx Power(dBm)",
            validationRules: {
                minLength: 1,
            },
            touched: false,
        },
        // rbToDistPower: {
        //     value: {dl: "", ul: ""},
        //     valid: true,
        //     label: "RB to dist Power",
        //     validationRules: {
        //         minLength: 1,
        //     },
        //     touched: false,
        // },
        // subcarriersPower: {
        //     value: {dl: "", ul: ""},
        //     valid: true,
        //     label: "Subcarriers Power(dBm)",
        //     validationRules: {
        //         minLength: 1,
        //     },
        //     touched: false,
        // },
        txAntennaGain: {
            value: {dl: "18", ul: "0"},
            valid: true,
            label: "Tx Antenna gain(dBi)",
            validationRules: {
                minLength: 1,
            },
            touched: false,
        },
        txCableLoss: {
            value: {dl: "0.5", ul: "0"},
            valid: true,
            label: "Tx Cable Loss(dB)",
            validationRules: {
                minLength: 1,
            },
            touched: false,
        },
        // eirp: {
        //     value: "",
        //     valid: true,
        //     label: "EIRP Per Subcarrier(dBm)",
        //     validationRules: {
        //         minLength: 1,
        //     },
        //     touched: false,
        // },
    };

export const receiverParam = 
    {
        rxNoise: {
            value: {dl: "5", ul: "3"},
            valid: true,
            label: "Rx Noise Figure(dB)",
            validationRules: {
                minLength: 1,
            },
            touched: false,
        },
        sinr: {
            value: {dl: "-12", ul: "-12"},
            valid: true,
            label: "SINR(dB)",
            validationRules: {
                minLength: 1,
            },
            touched: false,
        },
        // rxSensibility: {
        //     value: {dl: "", ul: ""},
        //     valid: true,
        //     label: "Rx Sensibility(dB)",
        //     validationRules: {
        //         minLength: 1,
        //     },
        //     touched: false,
        // },
        rxCableLoss: {
            value: {dl: "0", ul: "-0.5"},
            valid: true,
            label: "Rx Cable Loss(dB)",
            validationRules: {
                minLength: 1,
            },
            touched: false,
        },
        rxAntennaGain: {
            value: {dl: "0", ul: "18"},
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
        value: "20",
        valid: true,
        label: "Penetration Loss(dB)",
        validationRules: {
            minLength: 1,
        },
        touched: false,
    },
    shadowFading: {
        value: "9.48",
        valid: true,
        label: "Slow Fading(dB)",
        validationRules: {
            minLength: 1,
        },
        touched: false,
    },
    interferenceMargin: {
        value: "0",
        valid: true,
        label: "Interference Margin",
        validationRules: {
            minLength: 1,
        },
        touched: false,
    },
};
    
export const pathLossParam = 
{
    // pathLoss: {
    //     value: "",
    //     valid: true,
    //     label: "Path Loss(dB)",
    //     validationRules: {
    //         minLength: 1,
    //     },
    //     touched: false,
    // },
    mapl: {
        value: "",
        valid: true,
        label: "MAPL(dB)",
        validationRules: {
            minLength: 1,
        },
        touched: false,
    },
};