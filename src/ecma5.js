import express from 'express';
//import { Authenticate } from '@middlewares';
import path from 'path';
import cors from 'cors';
import { userRoutes } from './services/users'
import { sessionRoutes } from './services/sessions';
import { appointmentRoutes } from './services/appointment';


const app = express();
//router(app);
app.use(cors());
app.use(express.json());
//app.use(Authenticate);
app.get('/', (req, res) => {
    res.status(200).send()
})

app.use('/users', userRoutes);
app.use('/session', sessionRoutes);
/* app.use('/appointment', appointmentRoutes); */
app.use('/images', express.static(path.resolve(__dirname, '..', 'utils', 'images')));

export default app;