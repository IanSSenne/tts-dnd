const fs = require("fs");
fs.readdirSync(".").forEach(_ => {
    if (_.match("package-lock")) return;
    if (_.endsWith(".json")) {
        const o = JSON.parse(fs.readFileSync(_, "utf8"));

        const map = fs.createWriteStream(_.replace(".json", ".map"));
        map.write(`${o.width}\n${o.height}\n${o.layers[0].data.join("\n")}`);
        map.close();
    }
})