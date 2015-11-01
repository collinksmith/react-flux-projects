(function (root) {
  var _data = [];

  root.KeyStore = $.extend({}, EventEmitter.prototype, {
    pressKey: function (noteName) {
      _data.push(noteName);
      this.emit('change');
    },

    releaseKey: function (noteName) {
      var idx = _data.indexOf(noteName);
      _data.splice(idx, 1);
      this.emit('change');
    }
  });

  KeyStore.dispatcherID = AppDispatcher.register(function (payload) {
    switch(payload.actionType) {
      case KeyConstants.PRESS_KEY:
        KeyStore.pressKey(payload.noteName);
        break;
      case KeyConstants.RELEASE_KEY:
        KeyStore.releaseKey(payload.noteName);
        break;
    }
  });
})(this);
