import { RouteMap } from "@chiselstrike/api";
export default new RouteMap().get("/", function() {
    return "hello world";
}).post("/", async function(req) {
    return await req.json();
});
