var CommentBox = React.CreateClass({
  render: function () {
    return (
      <div className="commentBox">
        Hello, world, I am a Comment Box!
      </div>
    );
  }
});
React.render(
  <CommentBox />,
  document.getElementById('content')
)