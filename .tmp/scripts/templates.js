this["JST"] = this["JST"] || {};
this["JST"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"header\">\n  <i class=\"fa fa-plus-circle header-plus\"></i>\n</div>\n<div class=\"createPostContainer\"></div>\n<div class=\"images\"></div>\n";
},"useData":true});
this["JST"]["create"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<input type=\"text\" placeholder=\"Image URL\" value=\"\" name=\"url\" class=\"createUrl\">\n<textarea name=\"caption\" placeholder=\"Image Caption\" class=\"createImageCaption\"></textarea>\n<button type=\"submit\" class=\"submitButton\"><i class=\"fa fa-picture-o\"></i> Add Image</button>\n<button class=\"cancelButton\">CANCEL</button>\n";
},"useData":true});
this["JST"]["imageList"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});
this["JST"]["imageListItem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" alt=\"\" class=\"postImage\">\n<div class=\"postCaption\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.caption : stack1), depth0))
    + "</div>\n";
},"useData":true});