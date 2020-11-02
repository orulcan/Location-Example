$.ajax({
    url: "https://geolocation-db.com/jsonp",
    jsonpCallback: "callback",
    dataType: "jsonp",
    success: function(location) {
      $('#country').html(location.country_name);
      $('#state').html(location.state);
      $('#city').html(location.city);
      $('#latitude').html(location.latitude);
      $('#longitude').html(location.longitude);
      $('#ip').html(location.IPv4);
      $('#postal').html(location.postal);
    }
  });