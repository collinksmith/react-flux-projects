var KeyActions = {
  keyPressed: function (noteName) {
    AppDispatcher.dispatch({
      actionType: "PRESS_KEY",
      noteName: noteName
    });
  },

  keyRelased: function (noteName) {
    AppDispatcher.dispatch({
      actionType: "RELEASE_KEY",
      noteName: noteName
    });
  }
};
