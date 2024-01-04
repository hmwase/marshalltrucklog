"use server"

import load from '@/app/lib/models/load'
import { Op } from 'sequelize';


  export async function GET(request: Request) {
    try {
        // Get today's date
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set time to the beginning of the day
    
        // Fetch fields for today using Sequelize query with Load model
        const loads = await load.findAll({
          attributes: ['LoadId', 'loadSet', 'scheduledDate', 
          'destination','proNumber', 'carrier'],
          where: {
            scheduledDate: {
              [Op.gte]: today, // Filter for dates greater than or equal to today
            },
          },
    });
        


      return new Response(JSON.stringify(loads), {status: 200})
      } catch (error) {
        return new Response("Failed to fetch loads", {status: 500})
      }
    
  
  }