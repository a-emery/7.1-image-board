export default Backbone.View.extend({

  tagName: 'form',

  className: 'createPost',

  events: {
    'click .submitButton': 'createPost'
  },

  template: JST.create,

  createPost: function(e){
    e.preventDefault();
    this.collection.create(this.serializeForm());
    this.$('input[type=text]').val('');
    this.$('textarea').val('');
  },

  serializeForm: function(){
    var result = {};
    var inputs = this.$el.serializeArray();
    inputs.forEach(function(input) {
      result[input.name] = input.value;
    });
    return result;
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  },

});
