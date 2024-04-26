const {createProxyMiddleware} = require('http-poxy-middleware');

module.exports = function(app){
    app.use(
        createProxyMiddleware("/api",{
            target: "http://localhost:8080/",
            changeOrigin:true,
        })
    )
}