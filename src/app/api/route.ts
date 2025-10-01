import { getSolarFlareData } from "@/utils/utils";

export async function GET() {
    const date = new Date();
    const endDate = date.toISOString().split("T")[0];
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const startDate = `${year}-${month}-01`;
    const data = await getSolarFlareData(startDate, endDate);
    return Response.json(data);
}
