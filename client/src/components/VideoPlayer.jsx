import React from 'react';

function VideoPlayer(props){
    let playbutton = require('../assets/whiteplay.png');
    let pausebutton = require('../assets/whitepause.png');

    return(
        <>
            <div>
                <div>
                    {props.playing && <p onClick={props.handlePause} ><img src={pausebutton} id="pause_audio" width='30px' height='30px' /></p>}
                    {!props.playing && <p onClick={props.handlePlay} ><img src={playbutton} id="play_audio" width='30px' height='30px' /></p>}
                </div>
                <div className='custom-player-controller-volume row m-0' style={{alignItems: 'center'}}>
                    <div style={{alignSelf: 'center', margin: '0px 5px', width: '10%'}} >
                        {props.volume > 50 && <i className='fa fa-volume-up text-white'/> }
                        {props.volume == 0 && <i className='fa fa-volume-mute text-white' />}
                        {props.volume <= 50 && props.volume > 0 && <i className='fa fa-volume-down text-white' />}
                    </div>
                    <input  
                        className='volume-range'
                        style={{width: "20%"}}
                        type="range"
                        min={0}
                        max={100}
                        value={props.volume}
                        onInput={(e) => props.handleVolumeChange(e)}
                    />
                </div>
            </div>
        </>
    )
}

export default VideoPlayer;