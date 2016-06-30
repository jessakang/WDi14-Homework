var app = app || {};

app.FlightView = Backbone.View.extend({

  tagName: 'li',
  render: function () {

    var flight_number = this.model.get("flight_number");
    var origin = this.model.get("origin");
    var destination = this.model.get("destination");
    var date = this.model.get("date");
    var plane = this.model.get("plane");

    this.$el.text( flight_number + " / " + origin + " / " + destination + " / " + date + " / " + plane );
    this.$el.prependTo( "#flights" );
  }

});
