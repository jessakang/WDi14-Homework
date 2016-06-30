var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#main",

  render: function () {
    console.log( "App view should be rendered now" );
    var appViewTemplate = $("#appViewTemplate").html();
      this.$el.html( appViewTemplate );
    // debugger;
    var flightInputView = new app.FlightInputView();
    flightInputView.render();

    var searchInputView = new app.SearchInputView();
    searchInputView.render();

    var reservationInputView = new app.ReservationInputView();
    reservationInputView.render();
  }

});
