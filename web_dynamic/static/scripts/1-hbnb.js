// Wait for the DOM to be loaded
$(document).ready(function() {
  // Initialize an empty object to store the Amenity IDs
  const amenitiesSelected = {};

  // Function to update the h4 tag with the list of selected amenities
  function updateAmenitiesList() {
    const amenitiesList = Object.keys(amenitiesSelected).join(', ');
    $('div.amenities h4').text(amenitiesList);
  }

  // Listen for changes on each input checkbox tag
  $('input[type="checkbox"]').change(function() {
    const amenityId = $(this).data('id');
    const amenityName = $(this).data('name');

    if ($(this).is(':checked')) {
      // If the checkbox is checked, add the Amenity ID to the object
      amenitiesSelected[amenityId] = amenityName;
    } else {
      // If the checkbox is unchecked, remove the Amenity ID from the object
      delete amenitiesSelected[amenityId];
    }

    // Update the h4 tag with the list of selected amenities
    updateAmenitiesList();
  });
});

