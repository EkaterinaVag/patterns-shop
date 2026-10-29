import { z } from "zod";

export const DifficultyEnum = z.enum(['beginner', 'easy', 'medium', 'hard']);
export const CategoryEnum = z.enum(['animals', 'flowers', 'food', 'decor', 'toys']);
export const DurationEnum = z.enum(['1h', '2-3h', 'day'])

export const PatternSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(3).max(100),
  image: z.string().min(1),
  price: z.number(),
  duration: DurationEnum,
  badges: z.array(z.string()),
  difficulty: DifficultyEnum,
  category: CategoryEnum,
  description: z.string().max(2000).nullable(),
  createdAt: z.number().int().positive(),
  views: z.number()
});

export type Pattern = z.infer<typeof PatternSchema>;
