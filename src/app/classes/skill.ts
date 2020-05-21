export class Skill {
  private tag: string;
  private level: number;
  constructor(tag: string, level: number) {
    this.tag = tag;
    this.level = level;
  }
  public getTag(): string {
    return this.tag;
  }
  public getLevel(): number {
    return this.level;
  }
}
