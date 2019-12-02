import React, {useState} from 'react';
import Welcome from './views/welcome/Welcome'
import Vehicles from './views/vehicles/Vehicles'
import LeaseOrOwn from './views/vehicles/LeaseOrOwn'
import Drivers from './views/drivers/Drivers'
import defaultStep from './resources/default-step'

function App() {
  const [step, setStep] = useState(defaultStep)

  console.log(step)

  switch(step.name) {
    case 'welcome':
      return (
      <Welcome setStep={setStep}/>
      )
    case 'vehicles':
      return (
      <Vehicles setStep={setStep}/>
      )
    case 'leaseOrOwn':
      return (<LeaseOrOwn/>)
    case 'drivers':
      return (<Drivers/>)
  }

}

export default App;
