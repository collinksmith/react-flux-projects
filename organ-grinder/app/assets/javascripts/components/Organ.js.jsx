var Organ = React.createClass({
  render: function () {
    var keys = [];
    for (var tone in window.TONES) {
      keys.push(<Key noteName={tone} freq={window.TONES[tone]} key={tone} />);
    }
    return (
      <div className="organ">
        {keys}
      </div>
    );
  }
});
