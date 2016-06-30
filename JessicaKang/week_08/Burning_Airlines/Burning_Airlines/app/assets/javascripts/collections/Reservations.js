var app = app || {};

app.Reservations = Backbone.Collection.extend({

  url: "/reservations",

  model: app.Reservation,

  initialize: function () {
    console.log( "A new reservations collection" );
    this.on("add", function (reservation) {
      var reservationView = new app.ReservationView({
        model: reservation
      });
      reservationView.render();
    });
  }


});
