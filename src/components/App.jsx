// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video = { exampleVideoData[0] }/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={exampleVideoData}/>
//     </div>
//   </div>
// );
//we want the api data from the searchyoutube.js file and update the 

class App extends React.Component { 
  constructor(props) {
    super(props);
    this.fetchedData = [];
    this.keyWord = '';

    this.state = {
      done: false,
      clickVideo: this.fetchedData[0] || exampleVideoData[0],
      loadingStatus: false
    };
    
    this.getData();
    this.handleClickVideo = this.handleClickVideo.bind(this);
    this.getKeyWord = this.getKeyWord.bind(this);

  }
     
  handleClickVideo(video) {
    this.setState({clickVideo: video});
  }

  getKeyWord(keyWord) {
    // this.setState({keyWord: keyWord}); 
    this.keyWord = keyWord; 
    this.getData(); 
  }

  getData() {
    // console.log(this.keyWord);
    // var options = {
    //   part: 'snippet',
    //   key: 'AIzaSyD1kgDn3FUzwzi5QwScXm08tLMiju18jLU',
    //   maxResults: 2,
    //   q: this.keyWord
    // };

    var options = {
      key: YOUTUBE_API_KEY, 
      query: 'this.keyWord', 
      max: 10 
    };

    searchYouTube(options, (arg)=>{
      this.fetchedData = arg;
      this.setState({loadingStatus: !(this.state.loadingStatus)});
    });
  }

  render() {
  

    return (
      <div>
        <Nav searchKeyWord = {this.getKeyWord}/>
        <div className="col-md-7">
          <VideoPlayer video = { this.state.clickVideo }/>
        </div>


        <div className="col-md-5">
          <VideoList videos={this.fetchedData}
                      onClickVideo={this.handleClickVideo}
          />
        </div>
      </div> 
    );
  }


}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;












