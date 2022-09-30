/* eslint-disable */
  // @ts-nocheck
  // GENERATED VIA NETLIFY AUTOMATED DEV TOOLS, EDIT WITH CAUTION!
  
  // Basic LRU cache implementation
  const makeLRUCache = (max) => {
    return { max: max, cache: new Map() };
  };
  
  const oldestCacheKey = (lru) => {
    return lru.keys().next().value
  }
  
  // Depend on Map keeping track of insertion order
  const getFromCache = (lru, key) => {
    const item = lru.cache.get(key);
    if (item) {
      // Delete key and re-insert so key is now at the end,
      // and now the last to be gc'd.
      lru.cache.delete(key);
      lru.cache.set(key, item);
    }
    return item;
  };
  
  const setInCache = (lru, key, value) => {
    if (lru.cache.has(key)) {
      lru.cache.delete(key);
    }
    if (lru.cache.size == lru.max) {
      const cacheKey = oldestCacheKey(lru);
  
      if (cacheKey) {
        lru.cache.delete(cacheKey);
      }
    }
  
    lru.cache.set(key, value);
  };
  
  // Cache the results of the Netlify Graph API for conditional requests
  const cache = makeLRUCache(100);
  
  const calculateCacheKey = (payload) => {
    return JSON.stringify(payload);
  };
  
  const schemaId = '75d3455e-f45a-4b44-a2f4-42c5a0c07833';
  
  const netlifyGraphHostWithProtocol =
    process.env.NETLIFY_GRAPH_HOST_WITH_PROTOCOL || 'https://graph.netlify.com';
  
  const siteId = process.env.SITE_ID;
  
  const makeNetlifyGraphUrl = ({ operationName }) => {
    return (
      netlifyGraphHostWithProtocol +
      '/graphql?app_id=' +
      siteId +
      '&operationName=' +
      operationName +
      '&schema_id=' +
      schemaId
    );
  };
  
  const httpFetch = (operationName, options) => {
    const reqBody = options.body || null;
    const userHeaders = options.headers || {};
    const headers = {
      ...userHeaders,
      'Content-Type': 'application/json',
    };
  
    const timeoutMs = 30_000;
  
    const reqOptions = {
      method: 'POST',
      headers: headers,
      timeout: timeoutMs,
      body: reqBody,
    };
  
    const netlifyGraphUrl = makeNetlifyGraphUrl({ operationName: operationName });
  
    return fetch(netlifyGraphUrl, reqOptions).then((body) => {
      return body.text().then((bodyString) => {
        const headers = {};
        body.headers.forEach((k, v) => (headers[k] = v));
  
        return {
          body: bodyString,
          headers: headers,
          status: body.status,
        };
      });
    });
  };
  
  const fetchNetlifyGraph = function fetchNetlifyGraph(input) {
    const query = input.query;
    const docId = input.doc_id;
    const operationName = input.operationName;
    const variables = input.variables;
  
    const options = input.options || {};
    const accessToken = options.accessToken;
    const siteId = options.siteId || process.env.SITE_ID;
  
    const payload = {
      query: query,
      doc_id: docId,
      variables: variables,
      operationName: operationName,
    };
  
    let cachedOrLiveValue = new Promise((resolve) => {
      const cacheKey = calculateCacheKey(payload);
  
      // Check the cache for a previous result
      const cachedResultPair = getFromCache(cache, cacheKey);
  
      let conditionalHeaders = {
        'If-None-Match': '',
      };
      let cachedResultValue;
  
      if (cachedResultPair) {
        const [etag, previousResult] = cachedResultPair;
        conditionalHeaders = {
          'If-None-Match': etag,
        };
        cachedResultValue = previousResult;
      }
  
      const response = httpFetch(operationName, {
        method: 'POST',
        headers: {
          ...conditionalHeaders,
          Authorization: accessToken ? 'Bearer ' + accessToken : '',
        },
        body: JSON.stringify(payload),
      });
  
      response.then((result) => {
        // Check response headers for a 304 Not Modified
        if (result.status === 304) {
          // Return the cached result
          resolve(cachedResultValue);
        } else if (result.status === 200) {
          // Update the cache with the new etag and result
          const etag = result.headers['etag'];
          const resultJson = JSON.parse(result.body);
          if (etag) {
            // Make a note of the new etag for the given payload
            setInCache(cache, cacheKey, [etag, resultJson]);
          }
          resolve(resultJson);
        } else {
          return result.json().then((json) => {
            resolve(json);
          });
        }
      });
    });
  
    return cachedOrLiveValue;
  };
  
  exports.fetchSpotifySearchTracks = (
      variables,
      options
    ) => {
      return fetchNetlifyGraph({
        query: `query SpotifySearchTracks($query: String!) {
  spotify {
    search(data: {query: $query}) {
      tracks {
        name
        id
        href
        album {
          name
          id
          href
          images {
            height
            url
            width
          }
        }
      }
    }
  }
}`,
        operationName: "SpotifySearchTracks",
        variables: variables,
        options: options,
        fetchStrategy: "POST",
      });
    }
  

exports.fetchSpotifyAboutMeQuery = (
      variables,
      options
    ) => {
      return fetchNetlifyGraph({
        query: `query SpotifyAboutMeQuery {
  me {
    spotify {
      country
      displayName
      email
      href
      id
      images {
        height
        url
        width
      }
      product
      type
      uri
    }
  }
}`,
        operationName: "SpotifyAboutMeQuery",
        variables: variables,
        options: options,
        fetchStrategy: "POST",
      });
    }
  

exports.fetchSpotifyAboutMeQuery = (
      variables,
      options
    ) => {
      return fetchNetlifyGraph({
        query: `query SpotifyAboutMeQuery {
  me {
    spotify {
      country
      displayName
      email
      href
      id
      images {
        height
        url
        width
      }
      product
      type
      uri
    }
  }
}`,
        operationName: "SpotifyAboutMeQuery",
        variables: variables,
        options: options,
        fetchStrategy: "POST",
      });
    }
  

exports.fetchSpotifyAboutMeQuery = (
      variables,
      options
    ) => {
      return fetchNetlifyGraph({
        query: `query SpotifyAboutMeQuery {
  me {
    spotify {
      country
      displayName
      email
      href
      id
      images {
        height
        url
        width
      }
      product
      type
      uri
    }
  }
}`,
        operationName: "SpotifyAboutMeQuery",
        variables: variables,
        options: options,
        fetchStrategy: "POST",
      });
    }
  

exports.fetchExampleQuery = (
      variables,
      options
    ) => {
      return fetchNetlifyGraph({
        query: `query ExampleQuery {
  __typename
}`,
        operationName: "ExampleQuery",
        variables: variables,
        options: options,
        fetchStrategy: "POST",
      });
    }
  
  
  /**
   * The generated NetlifyGraph library with your operations
   */
  const functions = {
    /**
  * Search for matching Spotify tracks. Note you can edit this query to also search for artists
  */
  fetchSpotifySearchTracks: exports.fetchSpotifySearchTracks,
  /**
  * Find the currently logged-in Spotify user's email, name, profile image, etc.
  */
  fetchSpotifyAboutMeQuery: exports.fetchSpotifyAboutMeQuery,
  /**
  * Find the currently logged-in Spotify user's email, name, profile image, etc.
  */
  fetchSpotifyAboutMeQuery: exports.fetchSpotifyAboutMeQuery,
  /**
  * Find the currently logged-in Spotify user's email, name, profile image, etc.
  */
  fetchSpotifyAboutMeQuery: exports.fetchSpotifyAboutMeQuery,
  /**
  * 
  */
  fetchExampleQuery: exports.fetchExampleQuery
  }
  
  exports.default = functions