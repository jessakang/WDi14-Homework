var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'flights/:id': 'showFlight'

  },

  index: function () {
    console.log( "Empty client-side URL, index method ran" );
    var appView = new app.AppView();
    // debugger;
    appView.render();
  },

  showFlight: function(id){
    console.log("It's working");
    var flight = new app.Flight({
      id:id
    });

// Do I need reservation argument below??
  // You don't need to set the model of reservationView since it has initial model
    flight.fetch().done(function(flight, reservation){
      var singleFlightView = new app.SingleFlightView();
      singleFlightView.render(flight, reservation, id);
      var reservationView = new app.ReservationView();
      reservationView.render();
    })
    // var reservation = new app.Reservation

  }

});
