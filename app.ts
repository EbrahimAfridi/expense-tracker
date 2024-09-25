import {Hono} from 'hono';
import {logger} from 'hono/logger';
import {expensesRoute} from "./routes/expenses.ts";

// App initialised
const app = new Hono();

// Middleware
app.use(logger());

// Routes
app.route("/api/expenses", expensesRoute);
app.get('/', (c) => c.text('Hello Hono!'));


export default app;