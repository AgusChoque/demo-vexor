import { config } from 'dotenv';

config({
  path: '.env',
});

export const myEnvs = {
  PORT: process.env.PORT || 3000,
  vexorpublishablekey: process.env.VEXOR_PUBLISHABLE_KEY,
  vexorsecretkey: process.env.VEXOR_SECRET_KEY,
  vexorprojectid: process.env.VEXOR_PROJECT_ID,
};
