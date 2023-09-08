// Get the query parameters from the URL
const queryParams = new URLSearchParams(window.location.search);

// Extract the values you need
const from = queryParams.get('from');
const to = queryParams.get('to');
const cluster = queryParams.get('var-cluster');

// Construct the Grafana URL with the extracted values
const grafanaURL = `https://grafana.100ms.live/explore?left={"queries":[{"refId":"A","datasource":{"type":"loki"},"editorMode":"builder","expr":"{cluster_alias=\\"${cluster}\\", app=\\"room\\"} |= \\"\\"","queryType":"range"}],"range":{"from":"${from}","to":"${to}"}}`;

// Redirect to the Grafana URL
window.location.href = grafanaURL;
