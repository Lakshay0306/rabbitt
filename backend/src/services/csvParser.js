import csv from "csv-parser";
import { Readable } from "stream";

export const parseCSV = (buffer) => {
  return new Promise((resolve, reject) => {
    const results = [];

    const stream = Readable.from(buffer.toString());

    stream
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        const totalRevenue = results.reduce(
          (sum, row) => sum + Number(row.Revenue || 0),
          0
        );

        const totalUnits = results.reduce(
          (sum, row) => sum + Number(row.Units_Sold || 0),
          0
        );

        const cancelledOrders = results.filter(
          (row) => row.Status === "Cancelled"
        ).length;

        resolve({
          totalRevenue,
          totalUnits,
          cancelledOrders,
          rows: results
        });
      })
      .on("error", reject);
  });
};