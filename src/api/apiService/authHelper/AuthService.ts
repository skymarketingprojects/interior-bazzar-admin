import config from "../../../config";
import { TokenService } from "./TokenService";

export class AuthService {
  static async refreshToken(): Promise<boolean> {
    const refreshToken = TokenService.getRefreshToken();
    if (!refreshToken) return false;

    try {
      const response = await fetch(
        `${config.BASE_URL}/auth/get-refresh-token/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refresh: refreshToken }),
        }
      );

      if (!response.ok) return false;

      const data = await response.json();
      TokenService.setTokens(data.access, data.refresh);
      return true;
    } catch {
      return false;
    }
  }
}
