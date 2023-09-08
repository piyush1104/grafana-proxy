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

// Construct the Grafana URL with the extracted values
const grafanaURL = `https://grafana.100ms.live/explore?left={"queries":[{"refId":"A","datasource":{"type":"loki"},"editorMode":"builder","expr":"{cluster_alias=\\"${cluster}\\", app=\\"${app}\\"} |= \\"\\"","queryType":"range"}],"range":{"from":"${from}","to":"${to}"}}`;

// Redirect to the Grafana URL
window.location.href = grafanaURL;
