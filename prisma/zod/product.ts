import * as z from "zod"
import { Productstatus, Category } from "@prisma/client"

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  status: z.nativeEnum(Productstatus),
  price: z.number().int().min(1),
  images: z.string().array().min(1, 'At least ine image is required'),
  caregory: z.nativeEnum(Category),
  isFeatured: z.boolean().nullish(),
  createdAt: z.date(),
})
