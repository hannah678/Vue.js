"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _detectPort = _interopRequireDefault(require("detect-port"));

var _chalk = _interopRequireDefault(require("chalk"));

var _auth = _interopRequireDefault(require("./api/auth.js"));

var _posts = _interopRequireDefault(require("./api/posts.js"));

var _apiDoc = _interopRequireDefault(require("./utils/api-doc.js"));

var _auth2 = require("./utils/auth.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// libs
// api
// utils
// mongo db
const db = _mongoose.default.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

_mongoose.default.connect('mongodb://test:1234@ac-wjdzovy-shard-00-00.zkh3hbt.mongodb.net:27017,ac-wjdzovy-shard-00-01.zkh3hbt.mongodb.net:27017,ac-wjdzovy-shard-00-02.zkh3hbt.mongodb.net:27017/?ssl=true&replicaSet=atlas-81jkj3-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true
});

_mongoose.default.Promise = global.Promise; // server setup

let port;

async function configServer() {
  port = 3000 || (await (0, _detectPort.default)(3000));
}

configServer(); // express setup

const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use(_bodyParser.default.json());
app.use((0, _morgan.default)('dev')); // log request
// express routers

app.use('/', _auth.default);
app.use('/posts', _auth2.authenticateUser, _posts.default); // api docs

app.use('/api', _apiDoc.default); // start

app.listen(port, () => console.log(`${_chalk.default.white.bgHex('#41b883').bold(`VUE TIL SERVER IS RUNNING ON ${port}`)}`));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiZGIiLCJtb25nb29zZSIsImNvbm5lY3Rpb24iLCJvbiIsImNvbnNvbGUiLCJlcnJvciIsImJpbmQiLCJjb25uZWN0IiwidXNlTmV3VXJsUGFyc2VyIiwiUHJvbWlzZSIsImdsb2JhbCIsInBvcnQiLCJjb25maWdTZXJ2ZXIiLCJhcHAiLCJ1c2UiLCJib2R5UGFyc2VyIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwianNvbiIsImF1dGgiLCJhdXRoZW50aWNhdGVVc2VyIiwicG9zdHMiLCJkb2NzIiwibGlzdGVuIiwibG9nIiwiY2hhbGsiLCJ3aGl0ZSIsImJnSGV4IiwiYm9sZCJdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFDQTs7QUFHQTs7OztBQWZBO0FBU0E7QUFLQTtBQUdBO0FBQ0EsTUFBTUEsRUFBRSxHQUFHQyxrQkFBU0MsVUFBcEI7QUFDQUYsRUFBRSxDQUFDRyxFQUFILENBQU0sT0FBTixFQUFlQyxPQUFPLENBQUNDLEtBQVIsQ0FBY0MsSUFBZCxDQUFtQkYsT0FBbkIsRUFBNEIsMkJBQTVCLENBQWY7O0FBQ0FILGtCQUFTTSxPQUFULENBQ0UsK1BBREYsRUFFRTtBQUNFQyxFQUFBQSxlQUFlLEVBQUU7QUFEbkIsQ0FGRjs7QUFNQVAsa0JBQVNRLE9BQVQsR0FBbUJDLE1BQU0sQ0FBQ0QsT0FBMUIsQyxDQUVBOztBQUNBLElBQUlFLElBQUo7O0FBQ0EsZUFBZUMsWUFBZixHQUE4QjtBQUM1QkQsRUFBQUEsSUFBSSxHQUFHLFNBQVMsTUFBTSx5QkFBVyxJQUFYLENBQWYsQ0FBUDtBQUNEOztBQUNEQyxZQUFZLEcsQ0FFWjs7QUFDQSxNQUFNQyxHQUFHLEdBQUcsdUJBQVo7QUFDQUEsR0FBRyxDQUFDQyxHQUFKLENBQVEsb0JBQVI7QUFDQUQsR0FBRyxDQUFDQyxHQUFKLENBQVFDLG9CQUFXQyxVQUFYLENBQXNCO0FBQUVDLEVBQUFBLFFBQVEsRUFBRTtBQUFaLENBQXRCLENBQVI7QUFDQUosR0FBRyxDQUFDQyxHQUFKLENBQVFDLG9CQUFXRyxJQUFYLEVBQVI7QUFDQUwsR0FBRyxDQUFDQyxHQUFKLENBQVEscUJBQU8sS0FBUCxDQUFSLEUsQ0FBd0I7QUFFeEI7O0FBQ0FELEdBQUcsQ0FBQ0MsR0FBSixDQUFRLEdBQVIsRUFBYUssYUFBYjtBQUNBTixHQUFHLENBQUNDLEdBQUosQ0FBUSxRQUFSLEVBQWtCTSx1QkFBbEIsRUFBb0NDLGNBQXBDLEUsQ0FFQTs7QUFDQVIsR0FBRyxDQUFDQyxHQUFKLENBQVEsTUFBUixFQUFnQlEsZUFBaEIsRSxDQUVBOztBQUNBVCxHQUFHLENBQUNVLE1BQUosQ0FBV1osSUFBWCxFQUFpQixNQUNmUCxPQUFPLENBQUNvQixHQUFSLENBQ0csR0FBRUMsZUFBTUMsS0FBTixDQUNBQyxLQURBLENBQ00sU0FETixFQUVBQyxJQUZBLENBRU0sZ0NBQStCakIsSUFBSyxFQUYxQyxDQUU2QyxFQUhsRCxDQURGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbGlic1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7XHJcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcclxuaW1wb3J0IG1vcmdhbiBmcm9tICdtb3JnYW4nO1xyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQgZGV0ZWN0UG9ydCBmcm9tICdkZXRlY3QtcG9ydCc7XHJcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XHJcblxyXG4vLyBhcGlcclxuaW1wb3J0IGF1dGggZnJvbSAnLi9hcGkvYXV0aC5qcyc7XHJcbmltcG9ydCBwb3N0cyBmcm9tICcuL2FwaS9wb3N0cy5qcyc7XHJcbmltcG9ydCBkb2NzIGZyb20gJy4vdXRpbHMvYXBpLWRvYy5qcyc7XHJcblxyXG4vLyB1dGlsc1xyXG5pbXBvcnQgeyBhdXRoZW50aWNhdGVVc2VyIH0gZnJvbSAnLi91dGlscy9hdXRoLmpzJztcclxuXHJcbi8vIG1vbmdvIGRiXHJcbmNvbnN0IGRiID0gbW9uZ29vc2UuY29ubmVjdGlvbjtcclxuZGIub24oJ2Vycm9yJywgY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUsICdNb25nb0RCIGNvbm5lY3Rpb24gZXJyb3I6JykpO1xyXG5tb25nb29zZS5jb25uZWN0KFxyXG4gICdtb25nb2RiOi8vdGVzdDoxMjM0QGFjLXdqZHpvdnktc2hhcmQtMDAtMDAuemtoM2hidC5tb25nb2RiLm5ldDoyNzAxNyxhYy13amR6b3Z5LXNoYXJkLTAwLTAxLnpraDNoYnQubW9uZ29kYi5uZXQ6MjcwMTcsYWMtd2pkem92eS1zaGFyZC0wMC0wMi56a2gzaGJ0Lm1vbmdvZGIubmV0OjI3MDE3Lz9zc2w9dHJ1ZSZyZXBsaWNhU2V0PWF0bGFzLTgxamtqMy1zaGFyZC0wJmF1dGhTb3VyY2U9YWRtaW4mcmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JyxcclxuICB7XHJcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgfSxcclxuKTtcclxubW9uZ29vc2UuUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xyXG5cclxuLy8gc2VydmVyIHNldHVwXHJcbmxldCBwb3J0O1xyXG5hc3luYyBmdW5jdGlvbiBjb25maWdTZXJ2ZXIoKSB7XHJcbiAgcG9ydCA9IDMwMDAgfHwgKGF3YWl0IGRldGVjdFBvcnQoMzAwMCkpO1xyXG59XHJcbmNvbmZpZ1NlcnZlcigpO1xyXG5cclxuLy8gZXhwcmVzcyBzZXR1cFxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcbmFwcC51c2UoY29ycygpKTtcclxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG5hcHAudXNlKG1vcmdhbignZGV2JykpOyAvLyBsb2cgcmVxdWVzdFxyXG5cclxuLy8gZXhwcmVzcyByb3V0ZXJzXHJcbmFwcC51c2UoJy8nLCBhdXRoKTtcclxuYXBwLnVzZSgnL3Bvc3RzJywgYXV0aGVudGljYXRlVXNlciwgcG9zdHMpO1xyXG5cclxuLy8gYXBpIGRvY3NcclxuYXBwLnVzZSgnL2FwaScsIGRvY3MpO1xyXG5cclxuLy8gc3RhcnRcclxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PlxyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgYCR7Y2hhbGsud2hpdGVcclxuICAgICAgLmJnSGV4KCcjNDFiODgzJylcclxuICAgICAgLmJvbGQoYFZVRSBUSUwgU0VSVkVSIElTIFJVTk5JTkcgT04gJHtwb3J0fWApfWAsXHJcbiAgKSxcclxuKTtcclxuIl19