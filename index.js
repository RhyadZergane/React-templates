require("@babel/register")({
    ignore: []
})

require("@babel/core").transform("code", {
    presets: ["@babel/preset-env",["@babel/preset-react", {"runtime": "automatic"}]],
});

require('./src/server');