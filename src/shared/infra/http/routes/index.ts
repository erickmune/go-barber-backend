import { Router } from 'express';
import AppointmentRoutes from '@modules/appointments/infra/http/routes/appointmentsRoutes';
import usersRouter from '@modules/users/infra/http/routes/usersRoutes';
import sessionsRouter from '@modules/users/infra/http/routes/sessionsRoutes';

const routes = Router();

routes.use('/appointments', AppointmentRoutes);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
