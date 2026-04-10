export class OceanSettings {
  public visibility: number;
  public soundLevel: number;
  public region: string;

  constructor(visibility: number, soundLevel: number, region: string) {
    this.visibility = visibility;
    this.soundLevel = soundLevel;
    this.region = region;

    console.log("Ocean settings initialized");
  }

  adjustVisibility(v: number) {
    this.visibility = v;
  }

  adjustSound(level: number) {
    this.soundLevel = level;
  }
}