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
    
    
    
    export type SpotifySearchTracksInput = {
  /**
 * The search query's keywords. The search is not case-sensitive: 'roadhouse' will match 'Roadhouse', 'roadHouse', etc. Keywords will be matched in any order unless surrounded by quotes, thus `roadhouse blues` will match both 'Blues Roadhouse' and 'Roadhouse of the Blues'. Quotation marks can be used to limit the match to a phrase: `"roadhouse blues"` will match 'My Roadhouse Blues' but not 'Roadhouse of the Blues'. By default, results are returned when a match is found in any field of the target object type. The asterisk (`*`) character can, with some limitations, be used as a wildcard (maximum: 2 per query). It will match a variable number of non-white-space characters. It cannot be used in a quoted phrase, in a field filter, or as the first character of the keyword string. Searching for playlists will return results matching the playlist's name and/or description.
 */
 "query": string
};
    
    export type SpotifySearchTracks = {
  /**
  * Any data from the function will be returned here
  */
data: {
  /**
  * The root for Spotify queries
  */
spotify: {
  search?: {
  tracks?: Array<{
  /**
  * The name of the track.
  */
name?: string;
  /**
  * The Spotify ID for the track.
  */
id?: string;
  /**
  * A link to the Web API endpoint providing full details of the track.
  */
href?: string;
  /**
  * The album on which the track appears. The album object includes a link in href to full information about the album.
  */
album?: {
  /**
  * The name of the album. In case of an album takedown, the value may be an empty string.
  */
name?: string;
  /**
  * The Spotify ID for the album.
  */
id?: string;
  /**
  * A link to the Web API endpoint providing full details of the album.
  */
href?: string;
  /**
  * The cover art for the album in various sizes, widest first.
  */
images?: Array<{
  /**
  * The image height in pixels. If unknown: `null` or not returned.
  */
height?: number;
  /**
  * The source URL of the image.
  */
url?: string;
  /**
  * The image width in pixels. If unknown: `null` or not returned.
  */
width?: number;
}>;
};
}>;
};
};
};
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
  me: {
  spotify?: {
  /**
  * The country of the user, as set in the user’s account profile. An ISO 3166-1 alpha-2 country code. This field is only available when the current user has granted access to the user-read-private scope.
  */
country?: string;
  /**
  * The name displayed on the user’s profile. null if not available.
  */
displayName?: string;
  /**
  * The user’s email address, as entered by the user when creating their account. Important! This email address is unverified; there is no proof that it actually belongs to the user. This field is only available when the current user has granted access to the user-read-email scope.
  */
email?: string;
  /**
  * A link to the Web API endpoint for this user.
  */
href?: string;
  /**
  * The Spotify user ID for the user.
  */
id?: string;
  /**
  * The user’s profile image.
  */
images?: Array<{
  /**
  * The image height in pixels. If unknown: `null` or not returned.
  */
height?: number;
  /**
  * The source URL of the image.
  */
url?: string;
  /**
  * The image width in pixels. If unknown: `null` or not returned.
  */
width?: number;
}>;
  /**
  * The user’s Spotify subscription level: “premium”, “free”, etc. (The subscription level “open” can be considered the same as “free”.) This field is only available when the current user has granted access to the user-read-private scope.
  */
product?: string;
  /**
  * The object type: “user”
  */
type?: string;
  /**
  * The Spotify URI for the user.
  */
uri?: string;
};
};
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
  me: {
  spotify?: {
  /**
  * The country of the user, as set in the user’s account profile. An ISO 3166-1 alpha-2 country code. This field is only available when the current user has granted access to the user-read-private scope.
  */
country?: string;
  /**
  * The name displayed on the user’s profile. null if not available.
  */
displayName?: string;
  /**
  * The user’s email address, as entered by the user when creating their account. Important! This email address is unverified; there is no proof that it actually belongs to the user. This field is only available when the current user has granted access to the user-read-email scope.
  */
email?: string;
  /**
  * A link to the Web API endpoint for this user.
  */
href?: string;
  /**
  * The Spotify user ID for the user.
  */
id?: string;
  /**
  * The user’s profile image.
  */
images?: Array<{
  /**
  * The image height in pixels. If unknown: `null` or not returned.
  */
height?: number;
  /**
  * The source URL of the image.
  */
url?: string;
  /**
  * The image width in pixels. If unknown: `null` or not returned.
  */
width?: number;
}>;
  /**
  * The user’s Spotify subscription level: “premium”, “free”, etc. (The subscription level “open” can be considered the same as “free”.) This field is only available when the current user has granted access to the user-read-private scope.
  */
product?: string;
  /**
  * The object type: “user”
  */
type?: string;
  /**
  * The Spotify URI for the user.
  */
uri?: string;
};
};
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
    * Search for matching Spotify tracks. Note you can edit this query to also search for artists
    */
    fetchSpotifySearchTracks: typeof fetchSpotifySearchTracks,
  /**
    * 
    */
    fetchExampleQuery: typeof fetchExampleQuery,
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
    