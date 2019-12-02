import React, {useState} from 'react';
import Welcome from './views/welcome/Welcome'
import Vehicles from './views/vehicles/Vehicles'
import LeaseOrOwn from './views/vehicles/LeaseOrOwn'
import Drivers from './views/drivers/Drivers'
import defaultNavigationState from './resources/default-navigation-state'
import defaultPolicyRequest from './resources/default-policy-request'

function App() {
  const [navigation, setNavigation] = useState(defaultNavigationState)
  const [policyRequest, setPolicyRequest] = useState(defaultPolicyRequest)

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
