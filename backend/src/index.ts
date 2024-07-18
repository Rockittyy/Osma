import express from 'express'
import { Database, dbObject } from 'rockynedb';

const port = 8080;

const app = express();



app.listen(port, () => console.log("server restarted"));