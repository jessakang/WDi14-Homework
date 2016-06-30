var app = app || {};

app.Flight = Backbone.Model.extend({
  urlRoot: "/flights",

  defaults: {
    flight_number: "",
    origin: "",
    destination: "",
    date: ""
  },

  initialize: function () {
    console.log( "A new flight was created" );
  }
});
