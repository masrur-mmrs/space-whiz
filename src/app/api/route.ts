import { getSolarFlareData } from "@/utils/utils";

export async function GET() {
    const data = await getSolarFlareData(new Date("2025-01-01"), new Date());
    return Response.json(data);
}
