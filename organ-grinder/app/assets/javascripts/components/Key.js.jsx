var Key = React.createClass({
  componentDidMount: function () {
    this.note = new Note(this.props.freq);
    KeyStore.addChangeListener(this._keyChange);
  },

  render: function () {
    return (
      <div>{this.props.noteName}</div>
    )
  },

  _keyChange: function () {
    if (KeyStore.all().indexOf(this.props.noteName) !== -1) {
      this.note.start();
    } else {
      this.note.stop();
    }
  }
});
