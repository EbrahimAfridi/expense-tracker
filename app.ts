import {Hono} from 'hono';
import {logger} from 'hono/logger';

// App initialised
const app = new Hono();

// Middleware
app.use(logger());

// Routes
app.get('/', (c) => c.text('Hello Hono!'))
app.get('/test', (c) => {
    return c.json({"message": 'Hono!'});
});

export default app;