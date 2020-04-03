const express = require("express");

const app = express();

const routes = "./api/router";


app.use(routes);

app.listen(4100, () => console.log(`Shopping Server listening on 4100`));
