"use server"

import { NextResponse } from "next/server";

// Import Sequelize and the model


// import Stripping from "@/app/lib/models/Stripping"


export async function GET(request: Request) {
  const formData = request.body;
  console.log("We got it", formData)

}

export async function DELETE(request: Request) {
  const formData = request.body;
  console.log("We got it", formData)

}

export async function PUT(request: Request) {
  const formData = request.body;
  console.log("We got it", formData)

}







// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     console.log("Received data:", body);

//     const stripping = await Stripping.create(body);

//     console.log("Data inserted into the database:", stripping.toJSON());

//     // Respond with a success message and status code 200
//     return new Response(JSON.stringify({ message: "Data inserted successfully" }), {
//       headers: { "Content-Type": "application/json" },
//       status: 200,
//     });
//   } catch (error) {
//     console.error("Error inserting data into the database:", error);

//     // Respond with an error message and status code 500 for server errors
//     return new Response(
//       JSON.stringify({ error: "Failed to insert data into the database" }),
//       {
//         headers: { "Content-Type": "application/json" },
//         status: 500,
//       }
//     );
//   }
// }
