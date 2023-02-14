/**
 * This class is used to extract the JWT from the request.
 * It is specific to the Fastify framework.
 */
export class FastifyExtractJwt {
  /**
   * Extracts the JWT from the Authorization header.
   * This method does not work authorization is done via a cookie.
   * This is however recommended as it is more secure (Via HttPOnly flag).
   * @param request
   */
  public static fromAuthHeaderAsBearerToken(request): string {
    /**
     * If the request does not contain an authorization header, return null.
     */
    if (!request.raw.headers.authorization) {
      return null;
    }

    /*
     * Get the authorization header.
     */
    const { authorization } = request.raw.headers;

    /**
     * The original header has the following format: Authorization: Bearer <token>
     *  However Fastify will convert the header name to the object key and the value to the object value.
     *  This means when value of authorization is Bearer <token>
     */
    if (authorization && authorization.split(' ')[0] === 'Bearer') {
      return authorization.split(' ')[1];
    }
    return '';
  }

  /**
   * Converts the cookie string to a map object.
   * Original format is: cookie1=value1;cookie2=value2
   * @param cookies
   * @private
   */
  private static getCookies(cookies: string): Map<string, string> {
    if (!cookies) {
      return;
    }

    const cookieMap = new Map<string, string>();
    /**
     * Split the cookies string into an array of cookies.
     */
    const cookieArray = cookies.split(';');
    for (const cookie of cookieArray) {
      /**
       * Split the cookie into an array of key value pairs.
       */
      const [key, value] = cookie.split('=');
      cookieMap.set(key, value);
    }
    return cookieMap;
  }

  private static getBearerFromString(bearer: string): string {
    const bearerSplit = bearer.split(' ');
    return bearerSplit[1];
  }

  public static fromAuthCookieAsBearerToken(request): string | undefined {
    const cookies = FastifyExtractJwt.getCookies(request.raw.headers.cookie);

    if (!cookies) {
      return;
    }

    /**
     * Based on the cookie map we generated earlier, check if the Authorization cookie exists.
     */
    if (cookies.has('Authorization')) {
      /**
       * If the Authorization cookie exists, pass the value to our getBearerFromString method.
       * This method will return the JWT.
       *
       */
      return FastifyExtractJwt.getBearerFromString(
        cookies.get('Authorization'),
      );
    }
    return '';
  }
}
