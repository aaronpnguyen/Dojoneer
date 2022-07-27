import React, {Component} from 'react';
import VideoPlayer from './VideoPlayer';
import ReactPlayer from 'react-player';

class Audio extends Component {
    constructor(){
        super()
        this.state = {
            isPlay: false,
            currentSeek: 0,
            volumeBar: 0,
            volume: 0,
            totalDurationOfVideo: 0,
            muted: false
        }
        this.userVideo = React.createRef()
        this.hostVideo = React.createRef()
    }

    handleVolumeChange = (e) => {
        console.log(e.target.value / 100)
        this.setState({volume: e.target.value / 100, volumeBar: e.target.value})
    }
    handleOnProgress = (e) => {
        this.setState({currentSeek: e.playedSeconds})
    }
    handleSeekChange = (e) => {
        this.setState({currentSeek: e.target.value})
        this.hostVideo.current.seekTo(e.target.value)
    }

    handlePlay = () => {
        if (this.state.totalDurationOfVideo === 0) {
            this.setState({totalDurationOfVideo: this.hostVideo.current.getDuration()})
        }
        this.setState({isPlay: true})
    }

    handlePause = () => {
        this.setState({isPlay: false})
    }

    render() {
        const {muted, volume, currentSeek, isPlay, totalDurationOfVideo, volumeBar} = this.state
        return (
            <>
                <div className='player' >
                    <ReactPlayer url="https://www.youtube.com/embed/jfKfPfyJRdk"
                        volume={volume}
                        muted={muted}
                        ref={this.hostVideo}
                        onProgress={this.handleProgress}
                        playing={this.state.isPlay}
                        onProgress={(e) => this.handleOnProgress(e)}
                    hidden></ReactPlayer>
                    <VideoPlayer
                        currentSeek={currentSeek}
                        playing={isPlay}
                        volume={volumeBar}
                        handlePause={this.handlePause}
                        handlePlay={this.handlePlay}
                        handleSeekChange={this.handleSeekChange}
                        totalDurationOfVideo={totalDurationOfVideo}
                        handleVolumeChange={this.handleVolumeChange}
                    ></VideoPlayer>
                </div>
            </>
        )
    }

}

export default Audio;