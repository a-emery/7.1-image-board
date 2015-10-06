export default Backbone.View.extend({

  tagName: 'li',

  className: 'postListItem',

  events: {

  },

  template: JST.imageListItem,

  render: function(){
    this.$el.html(this.template({
      model: this.model.toJSON()
      }));
    return this;
  }

});
