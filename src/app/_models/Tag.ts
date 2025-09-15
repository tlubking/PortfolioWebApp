export class Tag {
  static readonly ANGULAR = new Tag('Angular', 'red');
  static readonly TYPESCRIPT = new Tag('TypeScript', 'blue');
  static readonly TAILWIND_CSS = new Tag('Tailwind CSS', 'lightblue');
  static readonly C_SHARP = new Tag('C#', 'green');
  static readonly DOT_NET = new Tag('.NET', 'purple');
  static readonly JAVASCRIPT = new Tag('JavaScript', 'yellow');
  static readonly BOOTSTRAP = new Tag('Bootstrap', 'orange');

  private constructor(private readonly key: string, public readonly color: string) {}

  toString() {
    return this.key;
  }
}
