import {Hono} from "hono";
import {zValidator} from '@hono/zod-validator'

import type {Expense} from "../types.ts";
import {createExpenseSchema} from "../schema.ts";

const fakeExpenses: Expense[] = [
    {id: 1, amount: 100, title: "Burger"},
    {id: 2, amount: 300, title: "Clothes"},
    {id: 3, amount: 250, title: "Gym"},
];

export const expensesRoute = new Hono()
    .get("/", async (c) => c.json({expenses: fakeExpenses}))
    .post("/", zValidator("json", createExpenseSchema), async (c) => {
        // Zod Validation
        const expense = c.req.valid("json");
        fakeExpenses.push({id: fakeExpenses.length + 1, ...expense});

        console.log(fakeExpenses);
        return c.json({"expense": expense});
    })
    .get("/:id{[0-9]+}", (c) => { // regex to check if id is number.
        const id = Number.parseInt(c.req.param("id"));
        const expense = fakeExpenses.find((expense) => expense.id === id);
        console.log(expense);
        if (!expense) {
            return c.notFound();
        }
        return c.json(expense);
    })
    .delete("/:id{[0-9]+}", async (c) => {
        const id = Number.parseInt(c.req.param("id"));
        const expense = fakeExpenses.filter((expense) => expense.id !== id);
        console.log(expense);
        if (!expense) {
            return c.notFound();
        }
        return c.json(expense);
    });
