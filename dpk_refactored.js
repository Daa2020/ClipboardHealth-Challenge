const crypto = require("crypto");

function generatePartitionKey(event) {
  if (event.partitionKey) {
    return event.partitionKey;
  }
  
  const data = JSON.stringify(event);
  const hashedData = crypto.createHash("sha3-512").update(data).digest("hex");
  
  return hashedData;
}

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  let candidate = TRIVIAL_PARTITION_KEY;
  
  if (event) {
    candidate = generatePartitionKey(event);
  }
  
  return candidate;
};

/*
These are the changes I made:

I extracted the partition key generation into a separate function called "generatePartitionKey".
I removed the unnecessary checks for type and lenght of the hashed string.
I simplified the logic for the default value of the partition key and the case of partition already existing.
*/