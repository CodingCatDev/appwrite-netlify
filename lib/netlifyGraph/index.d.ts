/* eslint-disable */
    // @ts-nocheck
    // GENERATED VIA NETLIFY AUTOMATED DEV TOOLS, EDIT WITH CAUTION!
    
    export type NetlifyGraphFunctionOptions = {
      /**
       * The accessToken to use for the request
       */
      accessToken?: string;
      /**
       * The siteId to use for the request
       * @default process.env.SITE_ID
       */
      siteId?: string;
    }
    
    export type WebhookEvent = {
      body: string;
      headers: Record<string, string | null | undefined>;
    };
    
    export type GraphQLError = {
      "path": Array<string | number>;
      "message": string;
      "extensions": Record<string, unknown>;
    };
    
    
    
    
    export type ExampleQuery = {
  /**
  * Any data from the function will be returned here
  */
data: {
  __typename: unknown;
};
  /**
  * Any errors from the function will be returned here
  */
errors?: Array<GraphQLError>;
};
    
    /**
     * 
     */
    export function fetchExampleQuery(
      /**
      * Pass `{}` as no variables are defined for this function.
      */
      variables: Record<string, never>,
      options?: NetlifyGraphFunctionOptions
    ): Promise<ExampleQuery>;


    export type SpotifyAboutMeQuery = {
  /**
  * Any data from the function will be returned here
  */
data: {
  me: /** No fields, named fragments, or inline fragments found */ Record<string, unknown>;
};
  /**
  * Any errors from the function will be returned here
  */
errors?: Array<GraphQLError>;
};
    
    /**
     * Find the currently logged-in Spotify user's email, name, profile image, etc.
     */
    export function fetchSpotifyAboutMeQuery(
      /**
      * Pass `{}` as no variables are defined for this function.
      */
      variables: Record<string, never>,
      options?: NetlifyGraphFunctionOptions
    ): Promise<SpotifyAboutMeQuery>;
    
    export interface Functions {
      /**
    * 
    */
    fetchExampleQuery: typeof fetchExampleQuery,
  /**
    * Find the currently logged-in Spotify user's email, name, profile image, etc.
    */
    fetchSpotifyAboutMeQuery: typeof fetchSpotifyAboutMeQuery
    }
    
    export const functions: Functions;
    
    export default functions;
    