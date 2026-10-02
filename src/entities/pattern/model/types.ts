import { z } from "zod";

const DifficultyEnum = z.enum(['beginner', 'easy', 'medium', 'hard']);
const CategoryEnum = z.enum(['animals', 'flowers', 'food', 'decor', 'toys']);

export const PatternSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(3).max(100),
  image: z.string().min(1),
  price: z.number(),
  duration: z.number(),
  badges: z.array(z.string()),
  difficulty: DifficultyEnum,
  category: CategoryEnum,
  description: z.string().max(2000).nullable(),
  createdAt: z.number().int().positive()
});

export type Pattern = z.infer<typeof PatternSchema>;
