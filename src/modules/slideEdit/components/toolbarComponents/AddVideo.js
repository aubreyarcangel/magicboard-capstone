import React, { Component } from 'react'
import { IconMenu, MenuItem, IconButton} from 'material-ui'
import Url from 'material-ui/svg-icons/action/language'
import Computer from 'material-ui/svg-icons/hardware/computer'
import InsertPhoto from 'material-ui/svg-icons/editor/insert-photo'

class AddVideo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videoActive: false,
      videoPositionSelect: false
    }

    this.addVideo = this.addVideo.bind(this)
    this.videoPosition = this.videoPosition.bind(this)
  }

  componentDidMount() {
		this.props.canvas.on('mouse:down', (click) => {
			if (this.state.videoPositionSelect){
				this.addVideo(click.e.layerX, click.e.layerY)
				this.setState({videoPositionSelect: false})
			}
		})
	}

  videoPosition() {
		this.setState({videoPositionSelect: !this.state.videoPositionSelect})
	}

	addVideo(x, y) {
    // let YT
    // var tag = document.createElement('script')

    // tag.src = "https://www.youtube.com/iframe_api"
    // var firstScriptTag = document.getElementsByTagName('script')[0]
    // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

    // var player;
    // function onYouTubeIframeAPIReady() {
    //   player = new YT.Player('player', {
    //     height: '390',
    //     width: '640',
    //     videoId: 'M7lc1UVf-VE',
    //     events: {
    //       'onReady': onPlayerReady,
    //       'onStateChange': onPlayerStateChange
    //     }
    //   });
    // }

    // function onPlayerReady(event) {
    //   event.target.playVideo();
    // }

    // var done = false;
    // function onPlayerStateChange(event) {
    //   if (event.data == YT.PlayerState.PLAYING && !done) {
    //     setTimeout(stopVideo, 6000);
    //     done = true;
    //   }
    // }
    // function stopVideo() {
    //   player.stopVideo();
    // }

    // let video1El = document.getElementById('video1')
    // video1El.src='http://html5demos.com/assets/dizzy.mp4'
    // // window.fabric.Image.fromURL('https://www.youtube.com/watch?v=nX1YzS_CYIw', (myVid) => {
 		// // 	let vid1 = myVid.set({ left: x, top: y, width: myVid.width, height: myVid.height})
    // //    this.props.canvas.add(vid1)
    // // })
    // let canvas = this.props.canvas
    

    // let video1 = new window.fabric.Image(video1El, {
    //   left: x,
    //   top: y
    // })
    // this.props.canvas.add(video1)


		// window.fabric.util.requestAnimFrame(function render() {
    //   canvas.renderAll();
    //   window.fabric.util.requestAnimFrame(render);
    // })

    // this.setState({videoActive: true})
		// this.setState({videoPositionSelect: !this.state.videoPositionSelect})
	}

  render() {
    return (
      <div>
        <IconMenu
          iconButtonElement={<IconButton><InsertPhoto /></IconButton>}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
        >
          <MenuItem onClick={this.videoPosition} primaryText="From URL" leftIcon={<Url />} />
          {/* <MenuItem onClick={this.imagePosition} primaryText="From File" leftIcon={<Computer />} /> */}
        </IconMenu>
      </div>
    )
  }
}

// let YT

// window.onYouTubeIframeAPIReady = function() { 
//   YT = window.YT;
// }

let YT
var tag = document.createElement('script')

tag.src = "https://www.youtube.com/iframe_api"
var firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

export default AddVideo
