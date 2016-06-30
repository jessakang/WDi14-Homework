app.flights = new app.Flights();
app.reservations = new app.Reservations();

$(document).ready(function () {

  app.router = new app.AppRouter();

  Backbone.history.start();

  app.flights.fetch();
  app.reservations.fetch();

  window.setInterval(function () {
    app.flights.fetch();
  }, 8000);

  window.setInterval(function () {
    app.reservations.fetch();
  }, 8000);

});
