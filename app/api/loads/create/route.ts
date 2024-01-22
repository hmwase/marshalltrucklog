import TruckCheckIn from "@/app/lib/models/TruckCheckIn";
import Load from "@/app/lib/models/load";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Received data:", body);
    const { loadId, ...payload } = body;

    const truckCheckIn = await TruckCheckIn.create(payload);

    if (loadId) {
      const response = await Load.update(
        {
          isCheckedIn: true,
        },
        {
          where: {
            LoadId: loadId,
          },
        }
      );
      console.log(response);
    }

    console.log("Data inserted into the database:", truckCheckIn.toJSON());

    // Respond with a success message and status code 200
    return new Response(
      JSON.stringify({
        truckCheckInId: truckCheckIn.truckCheckInId,
        destinationState: truckCheckIn.destinationState,
        driversName: truckCheckIn.driversName,
        location: truckCheckIn.location,
        trailerType: truckCheckIn.trailerType,
        pickupNumber: truckCheckIn.pickupNumber,
        company: truckCheckIn.company,
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error inserting data into the database:", error);

    // Respond with an error message and status code 500 for server errors
    return new Response(
      JSON.stringify({ error: "Failed to insert data into the database" }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
}
