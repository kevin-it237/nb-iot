// Parse to float

// Coverage planning

/**
 * 
 * @param {Object} param 
 * @param {Object} trasmitterParam 
 * @param {Object} receiverParam 
 * @param {Object} additionalParam 
 * @param {Object} pathLossParam 
 * @param {Object} propModel 
 */

export const bilanDeLiaison = (param, trasmitterParam, receiverParam, additionalParam) => {
    let {bandwidth, numberSubcarrier, modCodDL, modCodUL, targetName, targetType, targetArea, population} = param
    let {maxTxPower, txAntennaGain, txCableLoss } = trasmitterParam
    let {rxNoise, sinr, rxCableLoss, rxAntennaGain} = receiverParam
    let {penLoss, shadowFading, interferenceMargin} = additionalParam
    // let {frequency, eNodeBheight, ueheight, cellType} = propModel

    // Parse to float
    targetArea = parseFloat(targetArea.value)
    maxTxPower = maxTxPower.value; txAntennaGain = txAntennaGain.value; txCableLoss = txCableLoss.value;
    rxNoise = rxNoise.value; sinr = sinr.value; rxCableLoss = rxCableLoss.value; rxAntennaGain = rxAntennaGain.value
    penLoss = parseFloat(penLoss.value); shadowFading = parseFloat(shadowFading.value); interferenceMargin = parseFloat(interferenceMargin.value)
    // End parsing

    // C = 3
    // A = 46.3 + 33.9*Math.log10(frequency) - 13*Math.log10(eNodeBheight) - (1.1*Math.log10(frequency)-0.7)*ueheight - (1.56*Math.log10(frequency)-0.8)
    // B = (44.9-6.55*log(eNodeBheight)-0.8)

    // Downlink
    var Psc = parseFloat(maxTxPower.dl) - 10*Math.log10(12) 
    var SrxDL =  parseFloat(rxNoise.dl) - 174 + 10*Math.log10(15000)  + parseFloat(sinr.dl)
    var MAPL_DL = Psc + parseFloat(txAntennaGain.ul)  + parseFloat(txAntennaGain.dl) - SrxDL
    var expDL = (MAPL_DL - (136.20 + 3 + penLoss + interferenceMargin + shadowFading + parseFloat(txCableLoss.ul) + parseFloat(txCableLoss.dl)))/35.22
    var R_DL = Math.pow(10, expDL)

    // UPlink
    var SrxUL =  parseFloat(rxNoise.ul) - 174 + 10*Math.log10(15000)  + parseFloat(sinr.ul)
    var MAPL_UL = parseFloat(maxTxPower.ul) + parseFloat(rxAntennaGain.ul) + parseFloat(rxAntennaGain.dl) - SrxUL
    var expUL = (MAPL_UL - (136.20 + 3 + penLoss + interferenceMargin + shadowFading + parseFloat(rxCableLoss.ul) + parseFloat(rxCableLoss.dl)))/35.22
    var R_UL = Math.pow(10, expUL)

    var R = R_DL > R_UL ? R_UL: R_DL

    // Calcul de l'air
    var AIR = (9*Math.sqrt(3)/8*R*R).toFixed(2)
    // Number of nodeB

    var eNODEB = Math.round(targetArea/AIR)

    return {
        R: R_DL > R_UL ? R_UL.toFixed(2) : R_DL.toFixed(2),
        MAPL: MAPL_DL > MAPL_UL ? MAPL_UL.toFixed(2) : MAPL_DL.toFixed(2),
        AIR,
        eNODEB
    }
}


export const densityPlanning = (data) => {
    let houseHoldDensity = parseFloat(data.houseHoldDensity.value) 
    let areaOfCellSite = parseFloat(data.areaOfCellSite.value)
    let numberOfDevicesHousehold = parseFloat(data.numberOfDevicesHousehold.value)
    let numberOfHousehold = parseFloat(data.numberOfHousehold.value)

    var Nap_sec = areaOfCellSite * houseHoldDensity * numberOfDevicesHousehold

    var Nap_cell = Nap_sec * 3

    var Nap = numberOfHousehold * numberOfDevicesHousehold

    NeNodeB = Nap / Nap_cell

    return {
        finalDevicesInCellSite: Math.round(Nap_sec),
        finalDevicesInCell: Math.round(Nap_cell),
        finalNumberOfSite: Math.round(NeNodeB),
        finalTotalDevices: Math.round(Nap)
    }
}


export const servicePlanning = (formData) => {
    const data = {}
    let totalPackets = 0
    for (const key in formData) {
        if (formData.hasOwnProperty(key)) {
            const element = formData[key];
            let {ptf, end, npd, bm, sm} = element.value
            ptf = parseFloat(ptf);
            end = parseFloat(end);
            npd = parseFloat(npd);
            bm = parseFloat(bm);
            sm = parseFloat(sm);

            // var Np = 24*ptf * (end*npd)*(1 + bm*0.1)*(1 + sm*0.1)
            var Np = 31.68*ptf * (end*npd)
            totalPackets += Np
            data[key] = {...element['value'], np: Math.round(Np)}
        }
    }

    const NenodeB = Math.round(totalPackets / 1800000)

    return {
        totalPackets,
        NenodeB,
        data
    }
}