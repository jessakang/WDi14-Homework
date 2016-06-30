var app = app || {};

app.ReservationView = Backbone.View.extend({
  // tagName: 'li',
  render: function () {
// debugger;
var result = app.reservations.where({flight_id:parseInt(app.currentFlightId)})

// What do I need here? I need the flight_id and the seatID, that
// the reservation model has. Yes, it has everything. Wow.
// I can use the currentFlightId to match the result of app.reservations.where()
// , and if the flight_id is same, then it's gonna find the seat which has
// the row and column of each reservation.
// After finding the seats, it's gonna add a class 'reserved' to those seats

var seatArray = _.map(result, function(r){return r.get("seatID")}) // r.get() is Backbone method
var userArray = _.map(result, function(r){return r.get("user_id")}) // r.get() is Backbone method

// Now, I got the array of the reserved seat numbers. Since the seat number
// is a combination of row and column and column is just one character.
// So from here, what I need to do is slice the column part and store
// the sliced one as column and the remained as row.
// So from here, I need to find a seat where those row and column are matched.
// and then, add the class 'reserved'
// selectedSeat.addClass("reserved")

// The way to find a particular seat
// $(".seat[data-row='0'][data-column='A']")
var findSeatNumber = _.map(seatArray, function(s){
  var row = s.slice(0,-1);
  var column = s.slice(-1);
  var seat = $('.seat[data-row=' + row + '][data-column= ' + column +']')
  seat.addClass("reserved")
})

// The problem is.. I have to find the seat in the HTML. This is so tricky!
// If the seat was just an array or an object, it must be much easier...


    //
    // this.$el.text( flight_number + " / " + origin + " / " + destination + " / " + date + " / " + plane );
    // this.$el.prependTo( "#flights" );
  }

});
