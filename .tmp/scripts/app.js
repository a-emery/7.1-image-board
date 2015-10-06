require.register('main', function (exports, require, module) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _viewsCreatePost = require('views/createPost');
    var _viewsCreatePost2 = _interopRequireDefault(_viewsCreatePost);
    var _modelsPostsCollection = require('models/PostsCollection');
    var _modelsPostsCollection2 = _interopRequireDefault(_modelsPostsCollection);
    var _viewsImageList = require('views/imageList');
    var _viewsImageList2 = _interopRequireDefault(_viewsImageList);
    $(document).ready(function () {
        $('#container').append(JST.application());
        var postsCollection = new _modelsPostsCollection2['default']();
        postsCollection.fetch();
        var createPostView = new _viewsCreatePost2['default']({ collection: postsCollection });
        $('.createPostContainer').append(createPostView.render().el);
        var imageList = new _viewsImageList2['default']({ collection: postsCollection });
        $('.images').append(imageList.render().el);
    });
});
require.register('models/Post', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports['default'] = Backbone.Model.extend({
        idAttribute: '_id',
        defaults: function defaults() {
            return {
                url: '[no URL]',
                caption: '[no description]',
                createdAt: Date.now()
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
    exports['default'] = Backbone.Collection.extend({
        model: _modelsPost2['default'],
        url: 'http://tiny-lasagna-server.herokuapp.com/collections/aaronimages'
    });
    module.exports = exports['default'];
});
require.register('views/createPost', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports['default'] = Backbone.View.extend({
        tagName: 'form',
        className: 'createPost',
        events: { 'click .submitButton': 'createPost' },
        template: JST.create,
        createPost: function createPost(e) {
            e.preventDefault();
            this.collection.create(this.serializeForm());
            this.$('input[type=text]').val('');
            this.$('textarea').val('');
        },
        serializeForm: function serializeForm() {
            var result = {};
            var inputs = this.$el.serializeArray();
            inputs.forEach(function (input) {
                result[input.name] = input.value;
            });
            return result;
        },
        render: function render() {
            this.$el.html(this.template());
            return this;
        }
    });
    module.exports = exports['default'];
});
require.register('views/imageList', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _viewsImageListItem = require('views/imageListItem');
    var _viewsImageListItem2 = _interopRequireDefault(_viewsImageListItem);
    exports['default'] = Backbone.View.extend({
        tagName: 'ul',
        className: 'imageList',
        template: JST.imageList,
        initialize: function initialize() {
            this.listenTo(this.collection, 'add remove', this.render);
        },
        render: function render() {
            this.renderChildren();
            return this;
        },
        renderChildren: function renderChildren() {
            var self = this;
            this.$el.html('');
            this.collection.each(function (post) {
                var imageListItem = new _viewsImageListItem2['default']({ model: post });
                self.$el.append(imageListItem.render().el);
            });
        }
    });
    module.exports = exports['default'];
});
require.register('views/imageListItem', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports['default'] = Backbone.View.extend({
        tagName: 'li',
        className: 'postListItem',
        template: JST.imageListItem,
        render: function render() {
            this.$el.html(this.template({ model: this.model.toJSON() }));
            return this;
        }
    });
    module.exports = exports['default'];
});
//# sourceMappingURL=app.js.map
