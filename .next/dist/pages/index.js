'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function (_Component) {
  (0, _inherits3.default)(HomePage, _Component);

  function HomePage() {
    (0, _classCallCheck3.default)(this, HomePage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HomePage.__proto__ || (0, _getPrototypeOf2.default)(HomePage)).call(this));

    _this.state = {
      posts: []
    };
    return _this;
  }

  (0, _createClass3.default)(HomePage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;

      _axios2.default.get('http://e139daab.ngrok.io/wp-json/wp/v2/posts').then(function (response) {
        self.setState({
          posts: response.data
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'posts',
    value: function posts() {
      var posts = this.state.posts;

      return posts.map(function (post) {
        console.log(post);
        return _react2.default.createElement('div', null, _react2.default.createElement('h2', null, _react2.default.createElement(_link2.default, { href: '/blog?id=first', as: '/blog/first' }, _react2.default.createElement('a', null, 'My first blog post')), post.title.rendered), _react2.default.createElement('div', null, 'The big description...'));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null, _react2.default.createElement(HEAD, null, _react2.default.createElement('meta', { name: 'google-site-verification', content: '-54zHeU7cqpHWDRkfEXJCWUjlZSCEtS-te8Y7GvQzrU' })), _react2.default.createElement('ul', null, _react2.default.createElement('li', null), _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/blog?id=second', as: '/second' }, _react2.default.createElement('a', null, 'My second blog post'))), _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/blog?id=last', as: '/blog/last' }, _react2.default.createElement('a', null, 'My last blog post')))), this.posts());
    }
  }]);

  return HomePage;
}(_react.Component);

exports.default = HomePage;