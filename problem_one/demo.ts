import { OceanSettings } from "./OceanSettings";

const configA = new OceanSettings(100, 50, "Shallow Reef");
const configB = new OceanSettings(40, 20, "Deep Trench");

console.log("\nGame Configuration A");
console.log("Visibility:", configA.visibility);
console.log("Sound Level:", configA.soundLevel);
console.log("Region:", configA.region);

console.log("\nGame Configuration B");
console.log("Visibility:", configB.visibility);
console.log("Sound Level:", configB.soundLevel);
console.log("Region:", configB.region);

console.log("\nConfig A and Config B are same instance:", configA === configB, '\n');