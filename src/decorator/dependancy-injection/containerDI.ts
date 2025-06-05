import { Constructor } from "./types";

class ContainerDI {
  private providers = new Map<string, Constructor>();

  register<T>(target: Constructor<T>) {
    console.log(target, "Dependancy injection is happening...");

    if (!this.providers.has(target.name)) {
      this.providers.set(target.name, target);
    }
    console.log(this.providers.get(target.name));
  }

  resolve<T>(target: Constructor<T>): T {
    const dep = this.providers.get(target.name);

    if (!dep) {
      throw new Error(`${target.name} dependancy is not injected.`);
    }

    const paramTypes = Reflect.getMetadata("design:paramtypes", dep) || [];
    const dependencies = paramTypes.map((param: Constructor) =>
      this.resolve(param)
    );

    return new dep(...dependencies);
  }
}

export const container = new ContainerDI();
