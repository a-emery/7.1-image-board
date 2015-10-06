export default Backbone.Model.extend({
  idAttribute: "_id",
  defaults: function(){
    return  {
      url: "[no URL]",
      caption: "[no description]",
      createdAt: Date.now(),
      isEditing: false
    };
  }

});
