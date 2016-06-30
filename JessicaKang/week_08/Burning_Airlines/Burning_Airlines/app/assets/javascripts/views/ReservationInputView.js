var app = app || {};

app.ReservationInputView = Backbone.View.extend({
  events: {
    // 'click .seat': 'selectSeat',
    'click #save': 'createReservation'
  },

  createReservation: function (reservation) {
console.log("Save will work");
  },

  showFlight: function (event) {
    console.log("Can you see me?");
    // debugger;
  },
  //
  // $(".pixel").on("click", function () {
  //     var $currentPixel = $( this );
  //     if(turn === 1) {
  //       user="X"
  //       $currentPixel.css("background-image", url[0]);
  //       $currentPixel.css("background-size", "cover");
  //       console.log("X is moving??");
  //       var idNum = $($currentPixel).attr('data-i')
  //       var idName = $($currentPixel).attr('data-j')

  // test: function () {
  //   console.log("test working");
  //   debugger;
  //   $(this).css({"background-color": "red"})
  //   console.log("Kane")
  // },


  el: "#seatBoard",

  render: function () {
    console.log("Something will show up");
    var $flightSeatInputViewTemplate = $("#flightSeatInputViewTemplate").html();
    this.$el.html($flightSeatInputViewTemplate);
  }

});
