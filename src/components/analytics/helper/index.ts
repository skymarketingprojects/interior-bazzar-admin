export class DateFormatter {
  private static parse(dateString: string): Date {
    return new Date(dateString);
  }

  /**
   * Format: "25 Sep"
   */
  static short(dateString: string): string {
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
    }).format(this.parse(dateString));
  }

  /**
   * Format: "September 25, 2025"
   */
  static long(dateString: string): string {
    return new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(this.parse(dateString));
  }

  /**
   * Format: "Sep 25"
   */
  static monthDay(dateString: string): string {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(this.parse(dateString));
  }

  /**
   * Format: "2025-09-25" (ISO again, normalized)
   */
  static iso(dateString: string): string {
    return this.parse(dateString).toISOString().split("T")[0];
  }

  /**
   * Format: "09/25/2025"
   */
  static us(dateString: string): string {
    return new Intl.DateTimeFormat("en-US").format(this.parse(dateString));
  }

  /**
   * Format: "25/09/2025"
   */
  static eu(dateString: string): string {
    return new Intl.DateTimeFormat("en-GB").format(this.parse(dateString));
  }
}
