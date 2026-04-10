export class SeaCreature {
  public name: string;
  public state: "normal" | "fleeing" | "aggressive" | "curious";

  constructor(name: string) {
    this.name = name;
    this.state = "normal";
  }

  updateBehavior() {
    console.log(`\n[${this.name} Behavior Update]`);

    if (this.state === "normal") {
      console.log(this.name + " is calmly swimming around...");
      this.state = "curious";
    } else if (this.state === "curious") {
      console.log(this.name + " is curious and swims closer...");
      this.state = "aggressive";
    } else if (this.state === "aggressive") {
      console.log(this.name + " becomes aggressive and attacks!");
      this.state = "fleeing";
    } else if (this.state === "fleeing") {
      console.log(this.name + " is fleeing to safer waters...");
      this.state = "normal";
    }
  }
}
