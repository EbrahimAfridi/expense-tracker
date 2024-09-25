import type {expenseSchema} from "./schema.ts";
import {z} from "zod";

export type Expense = z.infer<typeof expenseSchema>