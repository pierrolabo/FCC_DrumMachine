import React from 'react';
import DrumPad from '../components/DrumPad';
//https://stackoverflow.com/questions/50594972/manage-multiple-audio-sources-in-react
//https://stackoverflow.com/questions/17636310/play-audio-and-restart-it-onclick
import audio1 from '../samples/PO-12_11_3.wav';
import audio2 from '../samples/PO-12_01_3.wav';
import audio3 from '../samples/PO-12_08_5.wav';
import audio4 from '../samples/PO-12_10_11.wav';
import audio5 from '../samples/PO-12_14_3.wav';
import audio6 from '../samples/PO-12_16_6.wav';
import audio7 from '../samples/PO-12_10_10.wav';
import audio8 from '../samples/PO-12_01_9.wav';
import audio9 from '../samples/PO-12_02_1.wav';
import audio10 from '../samples/PO-12_02_2.wav';
import audio11 from '../samples/PO-12_02_3.wav';
import audio12 from '../samples/PO-12_02_4.wav';
import audio13 from '../samples/PO-12_02_5.wav';
import audio14 from '../samples/PO-12_02_6.wav';
import audio15 from '../samples/PO-12_02_7.wav';
import audio16 from '../samples/PO-12_02_8.wav';
import audio17 from '../samples/PO-12_02_9.wav';
import audio18 from '../samples/PO-12_03_1.wav';
import audio19 from '../samples/PO-12_03_2.wav';
import audio20 from '../samples/PO-12_03_3.wav';
import audio21 from '../samples/PO-12_03_4.wav';
import audio22 from '../samples/PO-12_03_5.wav';
import audio23 from '../samples/PO-12_03_6.wav';
import audio24 from '../samples/PO-12_06_1.wav';
import audio25 from '../samples/PO-12_06_2.wav';
import audio26 from '../samples/PO-12_06_3.wav';
import audio27 from '../samples/PO-12_06_4.wav';
import audio28 from '../samples/PO-12_06_5.wav';
import audio29 from '../samples/PO-12_06_6.wav';
import audio30 from '../samples/PO-12_06_7.wav';
import audio31 from '../samples/PO-12_06_8.wav';
import audio32 from '../samples/PO-12_06_9.wav';
import audio33 from '../samples/PO-12_05_1.wav';
import audio34 from '../samples/PO-12_05_2.wav';
import audio35 from '../samples/PO-12_05_4.wav';
import audio36 from '../samples/PO-12_05_5.wav';
const audios = {
  audio1: new Audio(audio1),
  audio2: new Audio(audio2),
  audio3: new Audio(audio3),
  audio4: new Audio(audio4),
  audio5: new Audio(audio5),
  audio6: new Audio(audio6),
  audio7: new Audio(audio7),
  audio8: new Audio(audio8),
  audio9: new Audio(audio9),
  audio10: new Audio(audio10),
  audio11: new Audio(audio11),
  audio12: new Audio(audio12),
  audio13: new Audio(audio13),
  audio14: new Audio(audio14),
  audio15: new Audio(audio15),
  audio16: new Audio(audio16),
  audio17: new Audio(audio17),
  audio18: new Audio(audio18),
  audio19: new Audio(audio19),
  audio20: new Audio(audio20),
  audio21: new Audio(audio21),
  audio22: new Audio(audio22),
  audio23: new Audio(audio23),
  audio24: new Audio(audio24),
  audio25: new Audio(audio25),
  audio26: new Audio(audio26),
  audio27: new Audio(audio27),
  audio28: new Audio(audio28),
  audio29: new Audio(audio29),
  audio30: new Audio(audio30),
  audio31: new Audio(audio31),
  audio32: new Audio(audio32),
  audio33: new Audio(audio33),
  audio34: new Audio(audio34),
  audio35: new Audio(audio35),
  audio36: new Audio(audio36),
};
const DrumPads = (props) => {
  return (
    <div className='drum-pads'>
      <div id='drum-machine' className='drum-pads-container'>
        <div className='drum-pads-row'>
          <DrumPad className='drum-pad' val='Q' audio={audios.audio1} />
          <DrumPad className='drum-pad' val='W' audio={audios.audio2} />
          <DrumPad className='drum-pad' val='E' audio={audios.audio3} />
        </div>
        <div className='drum-pads-row middle-row'>
          <DrumPad className='drum-pad' val='A' audio={audios.audio4} />
          <DrumPad className='drum-pad' val='S' audio={audios.audio5} />
          <DrumPad className='drum-pad' val='D' audio={audios.audio6} />
          {/* <DrumPad className='drum-pad' val={1} audio={audios.audio10} />
          <DrumPad className='drum-pad' val='2' audio={audios.audio11} />
          <DrumPad className='drum-pad' val='3' audio={audios.audio12} /> */}
        </div>
        <div className='drum-pads-row'>
          <DrumPad className='drum-pad' val='Z' audio={audios.audio7} />
          <DrumPad className='drum-pad' val='X' audio={audios.audio8} />
          <DrumPad className='drum-pad' val='C' audio={audios.audio9} />
        </div>
        {/*
          <DrumPad className='drum-pad' val='4' audio={audios.audio13} />
          <DrumPad className='drum-pad' val='5' audio={audios.audio14} />
          <DrumPad className='drum-pad' val='6' audio={audios.audio15} />
          <DrumPad className='drum-pad' val='7' audio={audios.audio16} />
          <DrumPad className='drum-pad' val='8' audio={audios.audio17} />
          <DrumPad className='drum-pad' val='9' audio={audios.audio18} />
        {/* <div className='drum-pads-row'>
          <DrumPad className='drum-pad' val='P' audio={audios.audio19} />
          <DrumPad className='drum-pad' val='O' audio={audios.audio20} />
          <DrumPad className='drum-pad' val='I' audio={audios.audio21} />
          <DrumPad className='drum-pad' val='U' audio={audios.audio22} />
          <DrumPad className='drum-pad' val='Y' audio={audios.audio23} />
          <DrumPad className='drum-pad' val='T' audio={audios.audio24} />
        </div>
        <div className='drum-pads-row'>
          <DrumPad className='drum-pad' val='R' audio={audios.audio25} />
          <DrumPad className='drum-pad' val='M' audio={audios.audio26} />
          <DrumPad className='drum-pad' val='L' audio={audios.audio27} />
          <DrumPad className='drum-pad' val='K' audio={audios.audio28} />
          <DrumPad className='drum-pad' val='J' audio={audios.audio29} />
          <DrumPad className='drum-pad' val='H' audio={audios.audio30} />
        </div>
        <div className='drum-pads-row'>
          <DrumPad className='drum-pad' val='G' audio={audios.audio31} />
          <DrumPad className='drum-pad' val='F' audio={audios.audio32} />
          <DrumPad className='drum-pad' val='N' audio={audios.audio33} />
          <DrumPad className='drum-pad' val='B' audio={audios.audio34} />
          <DrumPad className='drum-pad' val='V' audio={audios.audio35} />
          <DrumPad className='drum-pad' val='C' audio={audios.audio36} />
        </div> */}
      </div>
    </div>
  );
};

export default DrumPads;
