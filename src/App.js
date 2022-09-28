import './App.css';
import React, { useEffect, useState } from 'react';
import Sparkle from 'react-sparkle'

const en = [ // prefaced with "En ..."
  'undersøgelse ', 
  'beskrivelse ', 
  'analyse ', 
  'vurdering ', 
  'udredning ', 
  'intervention ', 
  'redegørelse ', 
  'udarbejdning '
]
const af = [ // prefaced with "af ..."
  'arbejdsgange ',
  'metoder ',
  'værktøjer ',
  'midler ',
  'innovationstiltag ',
  'redskaber ',
  'persongalleriet ',
  'menneskerne bag ',
  'argumentationskæderne ',
  'offentligt forbug ',
]
const vedrørende = [ // prefaced with "vedrørende bæredygtig omstilling af ..."
   'fiskeri ',
   'landbrug ',
   'fødevareproduktion ',
   'fødevareemballage ',
   'kantineordninger ',
   'fødevaresortering ',
   'foderproduktion til avlsdyr ',
   'energimærkning på fødevare ',
   'jagt og skovbrug ',
   'fugtavl ',
   'biavl '
]
const på = [ // prefaced with "på ..."
   'kommunalt plan',
   'personoligt niveau',
   'regionalt plan',
   'lokalpolitisk niveau',
   'nationalt niveau'
]


class SpinColumn extends React.Component {
  render() {
    return (
      <div style={{flex: '1', backgroundColor: 'grey', border: '2px solid'}}>
        <text>{this.props.preface}{this.props.prompt}</text>
      </div>
    )
  }
}



function randomFromArray(array) { return array[Math.floor(Math.random() * array.length)]}

function App() {

  const [test, setTest] = useState(0)

 return (
  
    <div style={{ margin: '0px', height: '100%', display: 'flex', flexDirection:'column', alignItems: 'center'}}>
      <Sparkle/>
      <div className='iconWrap'/> 
      <div style={{ height: '80px', display: 'flex'}}>
        
        <h1 style={{ fontSize: "35px" }}>
          Simons Speciale</h1>
       
      </div>

      <div style={{ backgroundColor: 'white', border:'10px solid white'}}>
        En {randomFromArray(en)} 
        af {randomFromArray(af)} 
        vedrørende bæredygtig omstilling af {randomFromArray(vedrørende)}
        på {randomFromArray(på)}.

      </div>
      
  
      <button 
        onClick={()=> (setTest(test+1))+ console.log(test)}
        style ={{width: '20%', height: '40px'}}
      >  Find på noget </button> 
    </div>

  );
}

export default App;
