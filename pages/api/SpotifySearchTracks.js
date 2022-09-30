
const NetlifyGraph = require("../../lib/netlifyGraph");

exports.handler = async (req, res) => {
  // By default, all API calls use no authentication
  let accessToken = null;

  //// If you want to use the client's accessToken when making API calls on the user's behalf:
  accessToken = req.headers["authorization"]?.split(" ")[1];

  //// If you want to use the API with your own access token:
  // accessToken = process.env.NETLIFY_GRAPH_TOKEN;
  const eventBodyJson = req.body || {};
  const query = Object.keys(req?.query)?.length ? (typeof req?.query?.query === 'string' ? req?.query?.query : req?.query?.query[0]) : eventBodyJson?.query;

  if (query === undefined || query === null) {
    return res.status(422).json({
        errors: ["You must supply parameters for: `query`"],
    });
  }

  const { errors, data } = await NetlifyGraph.fetchSpotifySearchTracks({ query: query }, {accessToken: accessToken}); 

  if (errors) {
    console.error(JSON.stringify(errors, null, 2));
  }

  console.log(JSON.stringify(data, null, 2));

  res.setHeader("Content-Type", "application/json");

  return res.status(200).json({
    errors, data
  });
};

exports.default = exports.handler;

/** 
 * Client-side invocations:
 * Call your Netlify function from the browser with this helper:
 */

/**
async function fetchSpotifySearchTracks(params) {
  const {query} = params || {};
  const resp = await fetch(`/api/SpotifySearchTracks?query=${query}`, {
    method: "GET"
  });

  const text = await resp.text();

  return JSON.parse(text);
}
*/