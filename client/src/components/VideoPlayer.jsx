import React, { useState } from 'react';
import App from './styles/Music.css'

function VideoPlayer(props){
    let playbutton = require('../assets/whiteplay.png');
    let pausebutton = require('../assets/whitepause.png');
    const [show, setShow] = useState(true);

    const increase = () => {
        console.log("type of", typeof props.volume)
        let volume = parseInt(props.volume) / 100 ;
        console.log("volume", volume)
        
        console.log(props.volume);
        // props.setState({volume: volume})
        // console.log(typeof (parseInt(props.volume) / 100))
        
        // let sliderVar = document.getElementById("musicSlider");
        let sliderVar = document.getElementById("musicSlider");
        console.log(sliderVar.value);


    }

    return(
        <>
            {
                show &&
                <div className="musicContainer">
                    <p className="lofi"> Lofi Radio </p>
                        <div className="musicHandler">
                            <div>
                                {props.playing && <p onClick={props.handlePause} ><img src={pausebutton} id="pause_audio" width='30px' height='30px' className='music-img' /></p>}
                                {!props.playing && <p onClick={props.handlePlay} ><img src={playbutton} id="play_audio" width='30px' height='30px' className='music-img' /></p>}
                            </div>
                            <div className='slider-container'>
                                <div >
                                    {props.volume > 50 && <i className='fa fa-volume-up text-white '/> }
                                    {props.volume == 0 && <i className='fa fa-volume-mute text-white' />}
                                    {props.volume <= 50 && props.volume > 0 && <i className='fa fa-volume-down text-white' />}
                                </div>
                                <input  
                                    className='volume-range vrange'
                                    id="musicSlider"
                                    // style={{width: "100%", margin: "0 3px"}}
                                    type="range"
                                    min={0}
                                    max={100}
                                    value={props.volume}
                                    onInput={(e) => props.handleVolumeChange(e)}
                                />
                            </div>
                        </div>
                        <div className="volume-buttons">
                            <button className="math-operator"> &#x2212; </button>
                            <button className="math-operator" onClick={increase}> &#x2b; </button>
                        </div>
                </div>
            }




            {/*<div>
                <button className='open-btn-music' onClick={() => setShow(!show)}> Music </button>
            </div>*/}


        </>
    )
}

export default VideoPlayer;