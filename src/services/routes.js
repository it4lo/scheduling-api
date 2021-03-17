import { userRoutes } from './users'
import { sessionRoutes } from './sessions';
import { appointmentRoutes } from './appointment';



export default async function (app) {
  app.use('/users', userRoutes);
  app.use('/session', sessionRoutes);
  app.use('/appointment', appointmentRoutes)
  return app
}