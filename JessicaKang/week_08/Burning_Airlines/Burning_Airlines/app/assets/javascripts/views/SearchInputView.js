var app = app || {};

app.SearchInputView = Backbone.View.extend({
  events: {
    'click button': 'searchFlight',
    'keydown input': 'checkForEnter',
    'click a': 'doSomething'
    // 'click': 'showFlight'
  },

  doSomething: function (){
    var appView = new app.AppView();
    appView.render();
  },

  showFlight: function (event) {
    console.log("Can you see me?");
    // debugger;
  },


  checkForEnter: function ( event ) {

    app.ENTER_KEY = 13;
    if ( event.which === app.ENTER_KEY ) {
      event.preventDefault();
      this.searchFlight();
    }
  },

  searchFlight: function () {
    console.log( "A new search created" );
    var originKeyword = this.$el.find('.searchOrigin').val().toUpperCase();
    var destinationKeyword = this.$el.find('.searchDestination').val().toUpperCase();
// debugger;
    var result = app.flights.where({ origin: originKeyword, destination: destinationKeyword  });

    for(var i=0; i<result.length; i +=1){
      var $result = $("<p>")
      var flight_number = result[i].get("flight_number");
      var origin = result[i].get("origin");
      var destination = result[i].get("destination");
      var date = result[i].get("date");
      var plane = result[i].get("plane");
      var flight_id = result[i].get("id")
      $result.text( flight_number + " / " + origin + " > " + destination + " / " + date + " / " + plane );
      var linkedResult = $("<a>").html($result)
      // linkedResult.attr("class", "result")
      linkedResult.attr("href", "#flights/"+flight_id)
      linkedResult.prependTo( "#results" );
    }
  },

  el: "#searchWord",

  render: function () {
    var searchInputViewTemplate = $("#searchInputViewTemplate").html();
    this.$el.html(searchInputViewTemplate);
  }

});
