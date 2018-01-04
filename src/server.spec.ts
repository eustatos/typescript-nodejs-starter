import {} from "mocha";
import { should } from "chai";
import * as server from "./server";

describe("Server create", () => {
    it("should be exists server", () => {
        should().exist(server);
        server.close();
    });
});