export class UuidAdapter {
  public static getANewUUID() {
    return crypto.randomUUID();
  }
}
