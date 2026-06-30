export class DateAdapter {
  public static getNow(): number {
    return new Date().getTime();
  }
}
