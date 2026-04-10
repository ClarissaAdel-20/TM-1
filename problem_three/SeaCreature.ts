// Structural Pattern - State
interface State{
  handle(creature: SeaCreature): void;
}

  // States
  class NormalState implements State{
    handle(creature: SeaCreature): void{
      console.log(creature.name + " is calmly swimming around...");
      creature.setState (new CuriousState());
    }
  }

  class CuriousState implements State{
    handle(creature: SeaCreature): void{
      console.log(creature.name + " is curious and swims closer...");
      creature.setState (new AggresiveState());
    }
  }

  class AggresiveState implements State{
    handle(creature: SeaCreature): void{
      console.log(creature.name + " becomes aggressive and attacks!");
      creature.setState (new FleeingState());
    }
  }

  class FleeingState implements State{
    handle(creature: SeaCreature): void{
      console.log(creature.name + " is fleeing to safer waters...");
      creature.setState (new FleeingState());
    }
  }

  // Main class
export class SeaCreature {
  public name: string;
  public state: State;

  constructor(name: string) {
    this.name = name;
    this.state = (new NormalState()); // default state
  }

  setState(state: State): void{
    this.state = state;
  }

  updateBehavior(): void {
    console.log('\n[${this.name} Behavior Update]');
    this.state.handle(this);
  }
}
