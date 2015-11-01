var keyMappings = {
  83: 'C4',
  68: 'D4',
  70: 'E4',
  71: 'F4',
  72: 'G4',
  74: 'A4',
  75: 'B4',
  76: 'C5'
};

$(document).on('keydown', function (e) {
  KeyActions.keyPressed(keyMappings[e.keyCode]);
});

$(document).on('keyup', function (e) {
  KeyActions.keyReleased(keyMappings[e.keyCode]);
});
