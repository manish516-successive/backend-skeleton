import * as path from 'path';
import * as dotenv from 'dotenv';
import { LoggerInterface } from '../interfaces/logger.interface';

const env = process.env.NODE_ENV || 'dev';
const dotenv_path = path.resolve(process.cwd(), `.${env}.env`);
const result = dotenv.config({ path: dotenv_path });

export const LoggerConfig: LoggerInterface = {
   debug_logs: process.env.DEBUG_LOGS === "true"
};