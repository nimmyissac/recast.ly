
var searchYouTube = (options, callback) => {
///////////////////////////////////////////
  var optionsModified = {};
  optionsModified.key = options.key;
  optionsModified.q = options.query;
  optionsModified.maxResults = options.max;
  optionsModified.part = 'snippet'; 
  optionsModified.type = 'video';
  optionsModified.videoEmbeddable = true;
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: optionsModified,
    contentType: 'json',
    success: function (data) {
      //console.log('success');
      //console.log( JSON.stringify(data.items) );
      callback(data.items);
      // callback(data);
    },
    error: function (data) {
      console.error('error', data);
    }
  });

};

window.searchYouTube = searchYouTube;

