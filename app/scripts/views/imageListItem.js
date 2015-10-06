export default Backbone.View.extend({

  tagName: 'li',

  className: 'postListItem',

  events: {
    'click .js-delete': 'deletePost',
    'click .js-edit': 'editPost',
    'click .js-editSubmit': 'updatePost',
    'click .js-editCancel': 'cancelUpdate'
  },

  initialize: function(){
    this.model.set('isEditing', false);
  },

  template: JST.imageListItem,

  render: function(){
    this.$el.html(this.template({
      model: this.model.toJSON()
      }));
    return this;
  },

  deletePost: function(){
    console.log('destroy');
    this.model.destroy();
  },

  editPost: function(){
    this.model.set('isEditing', true);
    this.render();
  },

  updatePost: function(e){
    e.preventDefault();
    console.log($(".js-editCreateUrl").val());
    this.model.save('url', $(".js-editCreateUrl").val());
    this.model.save('caption', $('.js-editCreateCaption').val());
    this.model.save('isEditing', false);
    this.render();
  },

  cancelUpdate: function(e){
    e.preventDefault();
    this.model.set('isEditing', false);
    this.render();
  },

});
