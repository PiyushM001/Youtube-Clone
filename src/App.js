import "./App.css";
import "./components/videosection.css";
import youtubeApi from "./api/youtube";
import React, { Component } from "react";
import { Navbar } from "./components/navbar";
import Videoitem from "./components/videoitem";
import Videosection from "./components/videosection";

export default class App extends Component {
 variable=0;
  state = {
    VideoMetaInfo: [],
    selectedVideoId: null,
    showComponent2: false
  };
  
  onsearch = async (keyword) => {
    this.variable=0;
    this.setState({ showComponent2: false });

    const response = await youtubeApi.get("/search",{
      params: {
        q: keyword,
      },
    });

    this.setState({
      VideoMetaInfo: response.data.items,
     

    });
  };
  
   
 
  render() {
    const { showComponent2 } = this.state;
    return (
       <div>
       
      <Navbar onSearch={this.onsearch} />
        {showComponent2 && <Videosection xyz={`https://www.youtube.com/embed/${this.state.selectedVideoId}`} />};
        <div className="container-yt2">
          <div className="container-yt">
            {this.state.VideoMetaInfo.map((Element) => {
              return (
                
                <div className="row">
                  <div className="videosection-container col-md-4">
                    <Videoitem
                      title={Element.snippet.title}
                      description={Element.snippet.channelTitle}
                      imgurl={Element.snippet.thumbnails.medium.url}
                      onclickimg={()=>{
                        this.setState({ showComponent2: true ,
                        selectedVideoId:Element.id.videoId});
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
     
      </div>
    
    );
  }

   
 
}
