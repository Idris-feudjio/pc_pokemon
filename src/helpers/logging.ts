import chalk from "chalk";

export class Logging {
  public static log = (arg: any) => this.info(arg);
  public static info = (arg: any) =>
    console.log(
      chalk.blue(
        `[${new Date().toLocaleString()}] [INFO]`,
        typeof arg === "string" ? chalk.blackBright(arg) : arg
      )
    );
  public static warn = (arg: any) =>
    console.log(
      chalk.yellow(
        `[${new Date().toLocaleString()}] [Warning]`,
        typeof arg === "string" ? chalk.yellow(arg) : arg
      )
    );
  public static error = (arg: any) =>
    console.log(
      chalk.red(
        `[${new Date().toLocaleString()}] [Critic]`,
        typeof arg === "string" ? chalk.red(arg) : arg
      )
    );
}
