import React, { Component } from 'react';
import DrumPad from '../components/DrumPad';

const DrumPads = (props) => {
  return (
    <div className='drum-pads'>
      <div id='drum-machine' className='drum-pads-container'>
        <div className='drum-pads-row'>
          <DrumPad id={1} className='drum-pad' val='Q' />
          <DrumPad id={2} className='drum-pad' val='W' />
          <DrumPad id={3} className='drum-pad' val='E' />
          <DrumPad id={4} className='drum-pad' val='A' />
          <DrumPad id={5} className='drum-pad' val='S' />
          <DrumPad id={6} className='drum-pad' val='D' />
        </div>
        <div className='drum-pads-row'>
          <DrumPad id={7} className='drum-pad' val='Z' />
          <DrumPad id={8} className='drum-pad' val='X' />
          <DrumPad id={9} className='drum-pad' val='C' />
          <DrumPad id={10} className='drum-pad' val='1' />
          <DrumPad id={11} className='drum-pad' val='2' />
          <DrumPad id={12} className='drum-pad' val='3' />
        </div>
        <div className='drum-pads-row'>
          <DrumPad id={13} className='drum-pad' val='4' />
          <DrumPad id={14} className='drum-pad' val='5' />
          <DrumPad id={15} className='drum-pad' val='6' />
          <DrumPad id={16} className='drum-pad' val='7' />
          <DrumPad id={17} className='drum-pad' val='8' />
          <DrumPad id={18} className='drum-pad' val='9' />
        </div>
        <div className='drum-pads-row'>
          <DrumPad id={19} className='drum-pad' val='11' />
          <DrumPad id={20} className='drum-pad' val='12' />
          <DrumPad id={21} className='drum-pad' val='13' />
          <DrumPad id={22} className='drum-pad' val='14' />
          <DrumPad id={23} className='drum-pad' val='15' />
          <DrumPad id={24} className='drum-pad' val='16' />
        </div>
        <div className='drum-pads-row'>
          <DrumPad id={25} className='drum-pad' val='17' />
          <DrumPad id={26} className='drum-pad' val='18' />
          <DrumPad id={27} className='drum-pad' val='19' />
          <DrumPad id={28} className='drum-pad' val='20' />
          <DrumPad id={29} className='drum-pad' val='21' />
          <DrumPad id={30} className='drum-pad' val='22' />
        </div>
        <div className='drum-pads-row'>
          <DrumPad id={31} className='drum-pad' val='23' />
          <DrumPad id={32} className='drum-pad' val='24' />
          <DrumPad id={33} className='drum-pad' val='25' />
          <DrumPad id={34} className='drum-pad' val='26' />
          <DrumPad id={35} className='drum-pad' val='27' />
          <DrumPad id={36} className='drum-pad' val='28' />
        </div>
      </div>
    </div>
  );
};

export default DrumPads;
