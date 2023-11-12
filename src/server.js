import express from "express";
import {renderToStaticMarkup} from "react-dom/server";
import App from "./components/App";
import path from "path";
import fs from 'fs';

const reactServer = express();

reactServer.get("/", (req ,res, next)=> {
    console.log(path.resolve());
    const test = fs.readFileSync(`${path.resolve()}\\src\\template\\layout.html`);
    let str = test.toString();
    const regexp = new RegExp("{{TEMPLATE}}");
    const html = renderToStaticMarkup(<App />);
    str = str.replace(regexp,html);
    return res.status(200).send(str);
})

reactServer.listen(3000, () => {
    console.log("Listening on port: 3000");
})