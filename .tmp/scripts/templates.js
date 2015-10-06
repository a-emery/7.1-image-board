this["JST"] = this["JST"] || {};
this["JST"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"images\"></div>\n";
},"useData":true});
this["JST"]["create"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"header\">\n  <i class=\"fa fa-plus-circle header-plus\"></i>\n</div>\n<div class=\"createPostContainer hidden\">\n<input type=\"text\" placeholder=\"Image URL\" value=\"\" name=\"url\" class=\"createUrl\">\n<textarea name=\"caption\" placeholder=\"Image Caption\" class=\"createImageCaption\"></textarea>\n<button type=\"submit\" class=\"submitButton\"><i class=\"fa fa-picture-o\"></i> Add Image</button>\n<button class=\"cancelButton\">CANCEL</button>\n</div>\n";
},"useData":true});
this["JST"]["imageList"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});
this["JST"]["imageListItem"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"editShow\">\n  <h4>Edit Image</h4>\n  <form action=\"\">\n    <input type=\"text\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" name=\"url\" class=\"createUrl js-editCreateUrl\">\n    <input type=\"text\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.caption : stack1), depth0))
    + "\" name=\"caption\" class=\"createUrl js-editCreateCaption\">\n    <button type=\"submit\" class=\"editSubmitButton js-editSubmit\">Save</button>\n    <button class=\"editCancelButton js-editCancel\">CANCEL</button>\n  </form>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" alt=\"\" class=\"postImage\">\n<div class=\"postCaption\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.caption : stack1), depth0))
    + "\n  <div class=\"deleteButton js-delete\">Delete</div>\n  <div class=\"deleteButton js-edit\">Edit</div>\n</div>\n\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.isEditing : stack1),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});