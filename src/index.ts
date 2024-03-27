import express from 'express';
import { Request, Response } from 'express';
//Express application
const app = express();

//A route to handle GET requests to the root URL
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome To My Brand');
});

// Start the server
const PORT: number= parseInt(process.env.PORT!) || 3002;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
