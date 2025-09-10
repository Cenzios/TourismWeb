import * as z from "zod"

export const formSchema = z.object({
  "name": z.string().optional().optional(),
  "email": z.email(),
  "phone": z.string(),
  "whatsapp": z.string().optional().optional(),
  "address": z.string().optional()
});