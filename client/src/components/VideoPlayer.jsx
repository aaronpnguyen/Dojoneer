import React, { useState } from 'react';
import App from './styles/Music.css'

function VideoPlayer(props){
    let playbutton = require('../assets/whiteplay.png');
    let pausebutton = require('../assets/whitepause.png');
    const [show, setShow] = useState(true);

    return(
        <>
            {
                show &&
                <div className="musicContainer">
                    <p className="lofi"> Lofi Radio </p>
                        <div className="musicHandler">
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
                                    className='volume-range vrange'
                                    style={{width: "100%"}}
                                    type="range"
                                    min={0}
                                    max={100}
                                    value={props.volume}
                                    onInput={(e) => props.handleVolumeChange(e)}
                                />
                            </div>
                        </div>
                </div>
            }




            <div>
                <button className='open-btn-music' onClick={() => setShow(!show)}> Music </button>
            </div>


        </>
    )
}

export default VideoPlayer;