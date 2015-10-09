var koa = require('koa');
var app = koa();

app.use(function *(){
	this.body = 'fuck you';
});

app.listen(3000,"10.12.0.136");
