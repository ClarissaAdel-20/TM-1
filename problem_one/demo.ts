import { OceanSettings } from "./OceanSettings";

// ambil instance, bukan lagi pakai new
const settings1 = OceanSettings.getInstance();
settings1.adjustVisibility(80);
settings1.adjustSound(30);

console.log("Settings1: ", settings1);

// ambil lagi instance kedua
const settings2 = OceanSettings.getInstance();

console.log("Setting2: ", settings2);

console.log("\nSame instance:", settings1 === settings2);