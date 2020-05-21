export class Project {
  private name: string;
  private description: string;
  private forks: number;
  private star: number;
  private url: string;
  private language: string;

  constructor(
    name: string,
    description: string,
    forks: number,
    star: number,
    url: string,
    language: string
  ) {
    this.name = name;
    this.description = description;
    this.forks = forks;
    this.star = star;
    this.url = url;
    this.language = language;
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public getForks(): number {
    return this.forks;
  }

  public getStar(): number {
    return this.star;
  }

  public getUrl(): string {
    return this.url;
  }

  public getLanguage(): string {
    return this.language;
  }
}
