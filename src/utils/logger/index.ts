import config from "../../config";

const isProd = config.MODE === "prod";

export const logger = {
  log: (...args: any[]) => {
    if (!isProd) console.log(...args);
  },

  info: (...args: any[]) => {
    if (!isProd) console.info(...args);
  },
  warn: (...args: any[]) => {
    if (!isProd) console.warn(...args);
  },
  error: (...args: any[]) => {
    // You typically want errors to always log
    console.error(...args);
  },
  debug: (...args: any[]) => {
    if (!isProd) console.debug(...args);
  },
};
