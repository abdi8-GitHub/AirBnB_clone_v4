$(document).ready(function() {
  const amenitiesSelected = {};
  $('input[type="checkbox"]').change(function() {
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
});

