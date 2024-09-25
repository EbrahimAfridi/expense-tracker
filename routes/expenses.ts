import type {Expense} from "../types.ts";
import {Hono} from "hono";

const fakeExpenses: Expense[] = [
    {id: 1, amount: 100, title: "Burger"},
    {id: 2, amount: 300, title: "Clothes"},
    {id: 3, amount: 250, title: "Gym"},
];

export const expensesRoute = new Hono()
    .get("/", async (c) => c.json({expenses: fakeExpenses}))
    .post("/", async (c) => {
        const expense: Expense = await c.req.json();
        console.log(expense);
        return c.json({"expense": expense});
    });
