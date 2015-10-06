import ImageListItem from 'views/imageListItem';

export default Backbone.View.extend({

  tagName: 'ul',

  className: 'imageList',

  template: JST.imageList,

  initialize: function() {
    this.listenTo(this.collection, 'add remove', this.render);
  },

  render: function(){
    this.renderChildren();
    return this;
  },

  renderChildren: function(){
    var self = this;
    this.$el.html('');
    this.collection.each(function(post){
      var imageListItem = new ImageListItem({model: post});
      self.$el.prepend(imageListItem.render().el);
    });
  }

});
