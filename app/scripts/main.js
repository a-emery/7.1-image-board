import CreatePostView from 'views/createPost';
import PostsCollection from 'models/PostsCollection';
import ImageList from 'views/imageList';

$(document).ready(function(){
  $('#container').append(JST.application());

  var postsCollection = new PostsCollection();
  postsCollection.fetch();

  postsCollection.comparator = 'createdAt';

  var createPostView = new CreatePostView({collection: postsCollection});
  $('body').append(createPostView.render().el);

  var imageList = new ImageList({collection: postsCollection});
  $('.images').append(imageList.render().el);
});
