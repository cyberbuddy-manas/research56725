import random
import time
from datetime import datetime
from azure.storage.blob import BlobServiceClient

# Azure Blob Storage connection string
connection_string = "DefaultEndpointsProtocol=https;AccountName=research56725;AccountKey=AG3VjVUx4PHFxs94VAFRLUUzlrU4jLeuXSY2RtB2snP4tKBS+dq4TSazS2ii/if0VAqCRI5qAnEj+ASta2GpPA==;EndpointSuffix=core.windows.net"

# Create a BlobServiceClient instance from the connection string
blob_service_client = BlobServiceClient.from_connection_string(connection_string)

# List of user containers to store the data
user_containers = ["user1"]

# Function to generate simulated data values in JSON format
def generate_data_values(serial_number, timestamp):
    fever = round(random.uniform(90, 105), 1)
    cough = random.choice([0, 1])
    breathing_difficulty = random.choice([0, 1])
    fatigue = random.choice([0, 1])
    loss_of_senses = random.choice([0, 1])
    travel_history = round(random.uniform(0, 31), 1)
    contact_with_covid_infected = random.choice([0, 1])

    # Applying fuzzy rules to determine COVID_SUSPECTS
    if 90 < fever < 96.5 and loss_of_senses == 1 and travel_history == 0:
        covid_suspects = 1
    elif 96.5 < fever < 99.9 and cough == 1 and fatigue == 1:
        covid_suspects = 1
    elif 99.9 < fever < 105 and breathing_difficulty == 1 and contact_with_covid_infected == 1:
        covid_suspects = 1
    else:
        covid_suspects = 0

    data = {
        "FEVER": fever,
        "COUGH": cough,
        "BREATHING_DIFFICULTY": breathing_difficulty,
        "FATIGUE": fatigue,
        "LOSS_OF_SENSES": loss_of_senses,
        "TRAVEL_HISTORY": travel_history,
        "CONTACT_WITH_COVID_INFECTED": contact_with_covid_infected,
        "COVID_SUSPECTS": covid_suspects
    }

    return data

# Main loop to generate and store simulated data
while True:
    # Get the current timestamp for each data entry
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    # Iterate over each user container
    for container_name in user_containers:
        # Get or create the container if it doesn't exist
        container_client = blob_service_client.get_container_client(container_name)
        try:
            container_client.create_container()
        except Exception as e:
            if "ContainerAlreadyExists" not in str(e):
                raise e

        # Retrieve existing blobs
        blobs = container_client.list_blobs()
        if blobs:
            # Find the maximum serial number from the existing blobs
            last_blob = max(blobs, key=lambda x: int(x.name.split("_")[1].split(".")[0]), default=None)
            if last_blob is not None:
                last_serial_number = int(last_blob.name.split("_")[1].split(".")[0])
            else:
                last_serial_number = 0
            counter = last_serial_number + 1
        else:
            counter = 0

        # Generate simulated data values
        data = generate_data_values(counter, timestamp)

        # Create a unique blob name based on the timestamp and serial number
        blob_name = f"data_{counter}.json"

        # Create the blob client and upload data to the blob
        blob_client = container_client.get_blob_client(blob_name)
        blob_client.upload_blob(
            str(data)
        )

        print(f"Simulated data uploaded: {container_name}/{blob_name}")

    # Wait for 120 seconds before generating and storing the next set of data
    time.sleep(1)
