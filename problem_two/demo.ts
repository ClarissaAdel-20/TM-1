import { CreatureSystem } from "./CreatureSystem";
import { DiverSystem } from "./DiverSystem";
import { EnvironmentSystem } from "./EnvironmentSystem";

const environment = new EnvironmentSystem();
const creatures = new CreatureSystem();
const diver = new DiverSystem();

console.log("\nPreparing dive manually...\n");

environment.initialize();
environment.loadTerrain();
environment.setWaterConditions();

creatures.initialize();
creatures.spawnCreatures();
creatures.assignBehaviors();

diver.initialize();
diver.equipGear();
diver.checkVitals();

console.log("\nDive is ready, but setup is complex and repetitive.\n");
