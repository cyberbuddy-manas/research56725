const express = require('express');
const cors = require('cors');
const app = express();
const { BlobServiceClient } = require("@azure/storage-blob");

const connection_string = "DefaultEndpointsProtocol=https;AccountName=research56725;AccountKey=AG3VjVUx4PHFxs94VAFRLUUzlrU4jLeuXSY2RtB2snP4tKBS+dq4TSazS2ii/if0VAqCRI5qAnEj+ASta2GpPA==;EndpointSuffix=core.windows.net";

const blobServiceClient = BlobServiceClient.fromConnectionString(connection_string);

async function retrieveDataValues(containerClient) {
    try {
        const blobs = [];
        const blobItems = [];
        for await (const blob of containerClient.listBlobsFlat()) {
            blobItems.push(blob);
        }

        await Promise.all(
            blobItems.map(async (blob) => {
                const blobClient = containerClient.getBlobClient(blob.name);
                const downloadResponse = await blobClient.downloadToBuffer();
                let data = downloadResponse.toString();
                data = data.replace(/'/g, '"');

                const jsonData = JSON.parse(data);
                blobs.push(jsonData);
            })
        );

        return blobs;
    } catch (error) {
        console.error("Error retrieving data values:", error.message);
        throw error;
    }
}

async function fetchLatestData(containerClient) {
    try {
        const blobs = await retrieveDataValues(containerClient);

    } catch (error) {
        console.error("Failed to retrieve data blobs:", error.message);
    }
}

const containerName = "user1";

const containerClient = blobServiceClient.getContainerClient(containerName);

fetchLatestData(containerClient);

app.use(cors());

app.get('/', async (req, res) => {
    res.json({ "msg": "It works!" });
})

// Route handler to retrieve data
app.get('/data/:num', async (req, res) => {
    try {
        // Example usage
        const containerName = "user" + req.params.num;

        // Get or create the container if it doesn't exist
        const containerClient = blobServiceClient.getContainerClient(containerName);
        const blobs = await retrieveDataValues(containerClient);
        res.json(blobs);
    } catch (error) {
        console.error("Failed to retrieve data blobs:", error.message);
        res.status(500).json({ error: "Failed to retrieve data blobs" });
    }
});

const port = process.env.PORT || 8080; // Use the PORT environment variable, or default to 3000

// Start the server 
app.listen(port, () => {
    console.log('Server is running on port 3000: http://localhost:5000');
});
