import {z} from "zod";

export const expenseSchema = z.object({
    id: z.number({
        required_error: "Id is required.",
        invalid_type_error: "Id must be an integer number.",
    }).int().positive(),

    title: z.string({
        required_error: "Title is required.",
        invalid_type_error: "Title must be a string.",
    }).min(1).max(100),

    amount: z.number().positive().max(9999, "Amount must be less than 10,000."),
});

export const createExpenseSchema = expenseSchema.omit({id: true});