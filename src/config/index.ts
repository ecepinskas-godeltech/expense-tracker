import dotenv from "dotenv";

console.log(dotenv.config());

interface Config {
  port: number;
  nodeEnv: string;
}

const config: Config = {
  port: parseInt(process.env.PORT || "8080", 10),
  nodeEnv: process.env.NODE_ENV || "development",
};

console.log("LOADED CONFIG:");
console.log(`\tPort: ${config.port}`);
console.log(`\tEnvironment: ${config.nodeEnv}`);

export default config;
