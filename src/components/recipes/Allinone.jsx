import React from 'react'
import Greece from './greek'
import France from './french'
import India from './indian'
import Mexico from './mexican'
import Brazil from './brazilian'
import China from './chinese'
import Japan from './japanese'
import Italy from './italian'
function Allinone() {
  return (
    <div>
    <div className='p-2'>
        <India/>
    </div>
    <div className='p-2'>
        
        <Japan/>
    </div>
    <div className='p-2'>

        <Brazil/>
    </div>
    <div className='p-2'>

        <China/>
    </div>
    <div className='p-2'>

        <Mexico/>
    </div>
    <div className='p-2'>

        <France/>
    </div>
    <div>

        <Greece/>
    </div>
    <div>

        <Italy/>
    </div>
    </div>
  )
}

export default Allinone