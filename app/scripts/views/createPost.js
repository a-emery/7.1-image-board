export default Backbone.View.extend({

  tagName: 'form',

  className: 'createPost',

  events: {
    'click .submitButton': 'createPost',
    'click .header-plus': 'toggleCreate',
    'click .cancelButton': 'toggleCreate'
  },

  template: JST.create,

  createPost: function(e){
    e.preventDefault();
    console.log(this.serializeForm());
    this.collection.create(this.serializeForm());
    this.$('input[type=text]').val('');
    this.$('textarea').val('');
    $('.createPostContainer').toggleClass('hidden');
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

  toggleCreate: function(e) {
    e.preventDefault();
    console.log('something');
    $('.createPostContainer').toggleClass('hidden');
  }

});
