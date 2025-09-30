export const getSolarFlareData = async (startDate: Date, endDate: Date) => {
    try {
        const res = await fetch(`https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get/FLR?startDate=${startDate}&endDate=${endDate}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching solar data:', error);
    }
}