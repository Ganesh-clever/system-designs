import { container } from "./containerDI";
import { Constructor } from "./types";
import "reflect-metadata";

export function Injectable(): Function {
  return <T extends Constructor>(target: T) => {
    container.register(target);
  };
}
