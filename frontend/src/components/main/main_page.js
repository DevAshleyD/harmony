import React from 'react';
import AboutPage from './about_page'
import KeyboardGrid from '../single_grid/keyboard_grid'
// import PianoGrid from '../single_grid/piano_grid'
// import DrumGrid from '../single_grid/drum_grid'
// import BassGrid from '../single_grid/bass_grid'

import MiniGrid from '../single_grid/mini_grid_partial';
// import Room from '../room/room';
import RoomContainer from '../room/room_container';
import styles from './main.module.css'
import ChatRoom from '../chat/chat_room'
import socketIOClient from "socket.io-client";
import { Switch,Route, Link } from 'react-router-dom';
import { receiveInstrument } from '../../actions/instrument_actions'
import { connect } from 'react-redux'

class MainPage extends React.Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   this.socket.on('instrument update', (data) => {
  //     this.props.receiveInstrument(data['instrument'])
  //   })
  // }
  render() {
    return (
      <div>

        {/* <Room
          allNotes={[
            [ 'A2', 'A1', 'A4', 'E4' ],
            [ 'F2', 'A4' ],
            [ 'C3', 'C1', 'B4', 'E4' ],
            [ 'B3', 'A4' ],
            [ 'A2', 'A1', 'E4' ],
            [ 'F2', 'A4' ],
            [ 'C3', 'C1', 'E4', 'B4' ],
            [ 'B3', 'B4', 'D4' ]
          ]
          }
          mainGridNotes={ ["","","C#2","B1","","","C#2","B1"] }
          instrument={"piano"}
        /> */}
        {/* <PianoGrid
          beats={ 8 }
        />
        <BassGrid
          beats={ 8 }
        />
        <DrumsGrid
          beats={ 8 }
        />
        <KeyboardGrid
          beats={ 8 }
        /> */}

        <Switch>
          <Route path="/about" component = {()=><AboutPage/>}/>
          <Route path="/rooms/:roomName/" component={(props) => < RoomContainer socket = {this.socket}  {...props}/>} />
          <Route path="/" component={() => <KeyboardGrid beats={8}/>} />
          {/* <Route to="/:roomName/" render={() => <RoomContainer beats={}/>} /> */}
        </Switch>



        <h1 className={styles.blurb}>Make Music</h1>
        <footer className={styles.footer}>
          <Link to="/about">About Us</Link>
          <br/>
          <div>Copyright &copy; 2020 Harmony</div>
        </footer>
      </div>
    );
  }
}


const mDTP = dispatch => {

  return {
    receiveInstrument: instrument => dispatch(receiveInstrument(instrument)),
  }
}

export default connect(null, mDTP)(MainPage);
