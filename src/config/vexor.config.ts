import { Vexor } from 'vexor';

export const vexor = Vexor.init({
  publishableKey: process.env.VEXOR_PUBLISHABLE_KEY,
  projectId: process.env.VEXOR_PROJECT_ID,
  secretKey: process.env.VEXOR_SECRET_KEY,
});
