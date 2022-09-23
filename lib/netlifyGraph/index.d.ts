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

export type SpotifySearchTracksInput = {
 "query": string
};
    
    export type SpotifySearchTracks = {
  /**
  * Any data from the function will be returned here
  */
data: /** No fields, named fragments, or inline fragments found */ Record<string, unknown>;
  /**
  * Any errors from the function will be returned here
  */
errors?: Array<GraphQLError>;
};
    
    /**
     * Search for matching Spotify tracks. Note you can edit this query to also search for artists
     */
    export function fetchSpotifySearchTracks(
      variables: SpotifySearchTracksInput,
      options?: NetlifyGraphFunctionOptions
    ): Promise<SpotifySearchTracks>;


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
    * Search for matching Spotify tracks. Note you can edit this query to also search for artists
    */
    fetchSpotifySearchTracks: typeof fetchSpotifySearchTracks,
  /**
    * Find the currently logged-in Spotify user's email, name, profile image, etc.
    */
    fetchSpotifyAboutMeQuery: typeof fetchSpotifyAboutMeQuery,
  /**
    * Find the currently logged-in Spotify user's email, name, profile image, etc.
    */
    fetchSpotifyAboutMeQuery: typeof fetchSpotifyAboutMeQuery
    }
    
    export const functions: Functions;
    
    export default functions;
    