const { deterministicPartitionKey } = require("./dpk_refactored");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {

  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the event partitionKey if it already exists", () => {
    const event = { partitionKey: "partitionkey1" };
    expect(deterministicPartitionKey(event)).toBe("partitionkey1");
  });

  it("Returns a hashed partitionKey if event has no partitionKey", () => {
    const event = { id: 123, name: "John Smith" };
    const hashedData = crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
    expect(deterministicPartitionKey(event)).toBe(hashedData);
  });    

});

