export class Social {
  private tag: string;
  private link: string;
  private img: string;
  constructor(tag: string, link: string, img: string) {
    this.tag = tag;
    this.link = link;
    this.img = img;
  }
  public getTag(): string {
    return this.tag;
  }
  public getlink(): string {
    return this.link;
  }
  public getImg(): string {
    return this.img;
  }
}
