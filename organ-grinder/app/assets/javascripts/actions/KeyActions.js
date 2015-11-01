var KeyActions = {
  keyPressed: function (noteName) {
    AppDispatcher.dispatch({
      actionType: KeyConstants.PRESS_KEY,
      noteName: noteName
    });
  },

  keyReleased: function (noteName) {
    AppDispatcher.dispatch({
      actionType: KeyConstants.RELEASE_KEY,
      noteName: noteName
    });
  }
};
