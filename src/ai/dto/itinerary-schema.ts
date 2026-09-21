import { z } from 'zod';

export const ActivitySchema = z.object({
  title: z.string().describe('Name of the spot or activity'),
  description: z.string().describe('Short 1-2 sentence description of what to do'),
  timeSlot: z.string().describe('Time slot, e.g., "09:00 AM" or "Morning"'),
  order: z.number().int().describe('Sequential step index starting at 1'),
  placeId: z.string().optional().describe('Google Place ID if available'),
  address: z.string().optional(),
  latitude: z.number().optional().describe('Geographic latitude coordinate'),
  longitude: z.number().optional().describe('Geographic longitude coordinate'),
  category: z.enum(['Restaurant', 'Attraction', 'Museum', 'Park', 'Transit', 'Shopping']),
  estimatedCost: z.number().optional().describe('Estimated cost in USD'),
});

export const ItineraryDaySchema = z.object({
  dayNumber: z.number().int(),
  activities: z.array(ActivitySchema),
});

export const GeneratedItinerarySchema = z.object({
  title: z.string().describe('Catchy trip title, e.g., "3 Days of Parisian Delights"'),
  destination: z.string(),
  days: z.array(ItineraryDaySchema),
});

export type GeneratedItinerary = z.infer<typeof GeneratedItinerarySchema>;