import { Vexor } from 'vexor';
import { myEnvs } from './envs.config';

export const vexor = Vexor.init({
  publishableKey: myEnvs.vexorpublishablekey,
  projectId: myEnvs.vexorprojectid,
  secretKey: myEnvs.vexorsecretkey,
});
