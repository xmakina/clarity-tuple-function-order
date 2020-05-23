import { Client, Provider, ProviderRegistry, Result, Receipt } from "@blockstack/clarity";
import { assert } from "chai";

describe("hello world contract test suite", () => {
  let brokenClient: Client;
  let workingClient: Client;
  let provider: Provider;

  before(async () => {
    provider = await ProviderRegistry.createProvider();
    brokenClient = new Client("SP3GWX3NE58KXHESRYE4DYQ1S31PQJTCRXB3PE9SB.broken", "broken", provider);
    workingClient = new Client("SP3GWX3NE58KXHESRYE4DYQ1S31PQJTCRXB3PE9SB.working", "working", provider);
  });

  it("should have a valid syntax", async () => {
    await workingClient.checkContract();
  });

  it("should have a valid syntax", async () => {
    await brokenClient.checkContract();
  });

  after(async () => {
    await provider.close();
  });
});
