// Get the query parameters from the URL
const queryParams = new URLSearchParams(window.location.search);

// Extract the values you need
const from = queryParams.get('from');
const to = queryParams.get('to');
const cluster = queryParams.get('var-cluster');
const dashboardType = queryParams.get('dashboard_type');
let app = queryParams.get('app');

// Set the default app value based on the dashboard_type
if (!app) {
    if (dashboardType === 'rooms-api') {
        app = 'room';
    }
}

// https://grafana.100ms.live/explore?panes=%7B%226uY%22:%7B%22datasource%22:%22lO4rcexIk%22,%22queries%22:%5B%7B%22refId%22:%22A%22,%22expr%22:%22%22,%22queryType%22:%22range%22,%22datasource%22:%7B%22type%22:%22loki%22,%22uid%22:%22lO4rcexIk%22%7D%7D%5D,%22range%22:%7B%22from%22:%221733309419679%22,%22to%22:%221733358697743%22%7D%7D%7D&schemaVersion=1&orgId=1
// https://grafana.100ms.live/explore?panes={"6uY":{"datasource":"lO4rcexIk","queries":[{"refId":"A","expr":"","queryType":"range","datasource":{"type":"loki","uid":"lO4rcexIk"}}],"range":{"from":"1733309419679","to":"1733358697743"}}}&schemaVersion=1&orgId=1
// https://grafana.100ms.live/explore?panes={"6uY":{"datasource":"lO4rcexIk","queries":[{"refId":"A","expr":"{cluster_alias=\"prod-in3\", app=\"roomcode\"} |= ``","queryType":"range","datasource":{"type":"loki","uid":"lO4rcexIk"},"editorMode":"code"}],"range":{"from":"1733309419679","to":"1733358697743"}}}&schemaVersion=1&orgId=1

// Construct the Grafana URL with the extracted values
// const grafanaURL = `https://grafana.100ms.live/explore?left={"queries":[{"refId":"A","datasource":{"type":"loki"},"editorMode":"builder","expr":"{cluster_alias=\\"${cluster}\\", app=\\"${app}\\"} |= \\"\\"","queryType":"range"}],"range":{"from":"${from}","to":"${to}"}}`;
const grafanaURL = `https://grafana.100ms.live/explore?panes={"6uY":{"datasource":"lO4rcexIk","queries":[{"refId":"A","expr":"{cluster_alias=\\"${cluster}\\", app=\\"${app}\\"} |= \\"\\"","queryType":"range","datasource":{"type":"loki","uid":"lO4rcexIk"},"editorMode":"code"}],"range":{"from":"${from}","to":"${to}"}}`;
console.log(grafanaURL);

// Redirect to the Grafana URL
window.location.href = grafanaURL;
