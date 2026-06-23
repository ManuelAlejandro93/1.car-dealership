export class UuidAdapter {
  public static getANewUUID(): string {
    return crypto.randomUUID();
  }
}
