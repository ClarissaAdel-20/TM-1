// Behavioral Pattern - Facade
import { CreatureSystem } from "./CreatureSystem";
import { DiverSystem } from "./DiverSystem";
import { EnvironmentSystem } from "./EnvironmentSystem";

export class DiveFacade{
    private environment = new EnvironmentSystem();
    private creatures = new CreatureSystem();
    private diver = new DiverSystem();

    startDive(){
        console.log("\nPreparing dive atutomatically...\n");

        this.environment.initialize();
        this.environment.loadTerrain();
        this.environment.setWaterConditions();

        this.creatures.initialize();
        this.creatures.loadTerrain();
        this.creatures.setWaterConditions();

        this.diver.initialize();
        this.diver.equipGear();
        this.diver.checkVitals();

        console.log("\n Dive is ready! \n");   
    }
}