import Post from 'models/Post';

export default Backbone.Model.extend({
  model: Post,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/aaronimages'
});
