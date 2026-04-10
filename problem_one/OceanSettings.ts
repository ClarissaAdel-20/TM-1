export class OceanSettings {

  private static instance: OceanSettings;

  public visibility: number;
  public soundLevel: number;
  public region: string;

  private constructor(visibility: number, soundLevel: number, region: string) {
    this.visibility = visibility;
    this.soundLevel = soundLevel;
    this.region = region;

    console.log("Ocean settings initialized");
  }

  static getInstance(): OceanSettings{
    if(!OceanSettings.instance){
      OceanSettings.instance = new OceanSettings(100, 50, "default");
    }
    return OceanSettings.instance;
  }

  adjustVisibility(v: number) {
    this.visibility = v;
  }

  adjustSound(level: number) {
    this.soundLevel = level;
  }
}