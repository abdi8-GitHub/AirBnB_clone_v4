$(document).ready(function () {
  const amenitiesSelected = {};
  $('input[type="checkbox"]').change(function () {
    const amenityId = $(this).data('id');
    const amenityName = $(this).data('name');

    if ($(this).is(':checked')) {
      amenitiesSelected[amenityId] = amenityName;
    } else {
      delete amenitiesSelected[amenityId];
    }
    amenitiesList = Object.values(amenitiesSelected).join(', ');
    $('div.amenities h4').text(amenitiesList);
  });
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === 'ok') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
});
