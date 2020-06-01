import React from 'react';
import KeyboardGrid from '../single_grid/keyboard_grid';
import PianoGrid from '../single_grid/piano_grid';
import DrumGrid from '../single_grid/drum_grid';
import BassGrid from '../single_grid/bass_grid';

// bass
import bA1 from "../../notes/bass_a_pentatonic/A1.mp3";
import bB1 from "../../notes/bass_a_pentatonic/B1.mp3";
import bCs2 from "../../notes/bass_a_pentatonic/Cs2.mp3";
import bE2 from "../../notes/bass_a_pentatonic/E2.mp3";
import bFs2 from "../../notes/bass_a_pentatonic/Fs2.mp3";
import bA2 from "../../notes/bass_a_pentatonic/A2.mp3";
// piano
import pA1 from "../../notes/piano_a_pentatonic/A1.mp3";
import pB1 from "../../notes/piano_a_pentatonic/B1.mp3";
import pCs2 from "../../notes/piano_a_pentatonic/Cs2.mp3";
import pE2 from "../../notes/piano_a_pentatonic/E2.mp3";
import pFs2 from "../../notes/piano_a_pentatonic/Fs2.mp3";
import pA2 from "../../notes/piano_a_pentatonic/A2.mp3";
// keyboard
import kA1 from "../../notes/keyboard_a_pentatonic/A1.mp3";
import kB1 from "../../notes/keyboard_a_pentatonic/B1.mp3";
import kCs2 from "../../notes/keyboard_a_pentatonic/Cs2.mp3";
import kE2 from "../../notes/keyboard_a_pentatonic/E2.mp3";
import kFs2 from "../../notes/keyboard_a_pentatonic/Fs2.mp3";
import kA2 from "../../notes/keyboard_a_pentatonic/A2.mp3";
// drums
import dA1 from "../../notes/drums/kick.mp3";
import dB1 from "../../notes/drums/snare.mp3";
import dCs2 from "../../notes/drums/hh.mp3";
import dE2 from "../../notes/drums/hho.mp3";
import dFs2 from "../../notes/drums/agogoHigh.mp3";
import dA2 from "../../notes/drums/agogoLow.mp3";
import MiniGrid from '../single_grid/mini_grid_partial';

class QuadGrid extends React.Component {
    constructor(props) {
        super(props)
        // allNotes???
    }

    processNote(instrumentName) {
        
    }

    render() {
        return(
            <div>
                <KeyboardGrid beats={this.props.beats} quadGrid={true}/>
                <PianoGrid beats={this.props.beats} quadGrid={true}/>
                <DrumGrid beats={this.props.beats} quadGrid={true}/>
                <BassGrid beats={this.props.beats} quadGrid={true}/>
            </div>
        )
    }
};

export default QuadGrid;