var server = require('./server')
var router = require('./router');
var requestHandles = require('./requestHandlers');

var handles = {};
handles['/'] = requestHandles.start;
handles['/start'] = requestHandles.start;
handles['/upload'] = requestHandles.upload;
server.start(router.route, handles);