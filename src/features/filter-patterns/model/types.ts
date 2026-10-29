import { z } from "zod";
import { CategoryEnum, DifficultyEnum, DurationEnum } from "@/entities/pattern";

const SortEnum = z.enum(['popular', 'new', 'price-asc', 'price-desc'])

export const FilterSchema = z.object({
    category: CategoryEnum.optional(),
    difficulty: DifficultyEnum.optional(),
    duration: DurationEnum.optional(),
    sort: SortEnum.default('popular'),
    page: z.coerce.number().int().positive().default(1),
    search: z.string().max(100).default(''),
})

export type FilterState = z.infer<typeof FilterSchema>
