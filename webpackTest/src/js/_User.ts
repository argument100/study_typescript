
export class User {
  constructor(private name: string) {

  }

  get myname(): string {
    return this.name;
  }

  set myname(name: string) {
    this.name = name;
  }

  displayName(): void {
    console.log(`名前は${this.name}です！`);
  }
}