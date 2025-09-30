import flarePowerLevels from '@/data/solar_flare_power_levels.json'

export const getPowerLevel = ( solarFlareClass: string ) => {
    const powerLevels = ["A", "B", "C", "M", "X"]
    for (const index in powerLevels) {
        const powerLevel = powerLevels[index]
        if (solarFlareClass.includes(powerLevel)) {
            return powerLevel
        }
    }
    return "";
}

export const getPowerLevelDetails = ( powerLevel: string ) => {
    for (const flarePowerLevel in flarePowerLevels) {
        const flare = flarePowerLevels[flarePowerLevel]
        if (powerLevel === flare.flareClass) {
            return [ flare.flareTitle, flare.icon, flare.flareClassBackground ]
        }
    }
    return "";
}

export const formatTime = (isoString: string) => {
    const date = new Date(isoString)
    const now = new Date()
    const diffHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

    if (diffHours < 1) return "Just happened! 🚀"
    if (diffHours < 24) return `${diffHours} hours ago 🕐`
    if (diffHours < 48) return "Yesterday 📅"
    return `${Math.floor(diffHours / 24)} days ago 📆`
}

export const translateLocation = (location: string) => {
    if (location.includes("N") && location.includes("W")) return "North-West of the Sun 🧭"
    if (location.includes("N") && location.includes("E")) return "North-East of the Sun 🧭"
    if (location.includes("S") && location.includes("W")) return "South-West of the Sun 🧭"
    if (location.includes("S") && location.includes("E")) return "South-East of the Sun 🧭"
    return `Solar coordinates: ${location} 🌞`
}

export const formatDate = (date: Date) => date.toISOString().split("T")[0];

export const getSolarFlareData = async (startDate: string, endDate: string) => {
    try {
        const res = await fetch(`https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get/FLR?startDate=${startDate}&endDate=${endDate}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching solar data:', error);
        return [];
    }
}