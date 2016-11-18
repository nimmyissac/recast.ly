// props.video = fakeMovieData
// props.onClickVideo = func -> changes the state of App

var VideoListEntry = (props) => {

  var imageUrl = (props.video).snippet.thumbnails.default.url;
  var title = (props.video).snippet.title;
  var description = (props.video).snippet.description;
//  console.log('test');
        // <div className="video-list-entry-title" onClick={props.onClickVideo( props.video )}>

  return (
    <div className="video-list-entry">
      <div className="media-left media-middle">
        <img className="media-object" src={imageUrl} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" onClick={ () => props.onClickVideo( props.video )  }>
          {title}
        </div>
        <div className="video-list-entry-detail">{description}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
