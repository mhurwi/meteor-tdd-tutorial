// Collections
WidgetsCollection = new Mongo.Collection('widgets');

//Client
if (Meteor.isClient) {
  Template.widgets.events({
    'click button#createWidget': function (event, template) {
      WidgetsCollection.insert({
        size: "medium"
      });
      
      $("body").append("<div class='widget'>New Widget</div>");
    }
  });
  Template.widgets.helpers({});
}
