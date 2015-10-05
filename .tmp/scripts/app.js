require.register('main', function (exports, require, module) {
    'use strict';
    $(document).ready(function () {
        // prepend the contents of `app/templates/application.hbs` into `body`
        $('#container').append(JST.application());
    });
});
require.register('models/Post', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports['default'] = Backbone.Model.extend({
        defaults: function defaults() {
            return {
                url: '[no URL]',
                description: '[no description]'
            };
        }
    });
    module.exports = exports['default'];
});
require.register('models/PostsCollection', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _modelsPost = require('models/Post');
    var _modelsPost2 = _interopRequireDefault(_modelsPost);
    exports['default'] = Backbone.Model.extend({
        model: _modelsPost2['default'],
        url: 'http://tiny-lasagna-server.herokuapp.com/collections/aaronimages'
    });
    module.exports = exports['default'];
});
//# sourceMappingURL=app.js.map
