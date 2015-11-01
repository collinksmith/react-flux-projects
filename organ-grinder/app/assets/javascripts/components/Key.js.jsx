var Key = React.createClass({
  getInitialState: function () {
    return { pressed: false };
  },

  componentDidMount: function () {
    this.note = new Note(this.props.freq);
    KeyStore.addChangeListener(this._keyChange);
  },

  render: function () {
    var style;
    if (this.state.pressed) {
      style = {
        background: 'blue'
      };
    }

    return (
      <div className="key" style={style}>{this.props.noteName}</div>
    )
  },

  _keyChange: function () {
    if (KeyStore.all().indexOf(this.props.noteName) !== -1) {
      this.setState({ pressed: true });
      this.note.start();
    } else {
      this.setState({ pressed: false });
      this.note.stop();
    }
  }
});
