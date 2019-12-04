import React, { useState } from 'react';
import LoadingOverlay from 'react-loading-overlay';
import Welcome from './views/welcome/Welcome'
import Vehicles from './views/vehicles/Vehicles'
import LeaseOrOwn from './views/vehicles/LeaseOrOwn'
import Drivers from './views/drivers/Drivers'
import defaultNavigationState from './resources/default-navigation-state'
import defaultPolicyRequest from './resources/default-policy-request'
import Navbar from 'react-bootstrap/Navbar'

function App() {
  const [navigation, setNavigation] = useState(defaultNavigationState)
  const [policyRequest, setPolicyRequest] = useState(defaultPolicyRequest)
  const [loading, setLoading] = useState(false)

  console.log(navigation)

  let view = null
  switch (navigation.current) {
    case 0:
      view = <Welcome setNavigation={setNavigation} setPolicyRequest={setPolicyRequest} setLoading={setLoading} />
      break;
    case 1:
      view = <Vehicles />
      break;
    case 2:
      view = <LeaseOrOwn />
      break;
    case 3:
      view = <Drivers />
      break;
    default:
      view = 'Technical Error'
  }

  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">This is a header</Navbar.Brand>
    </Navbar>
    <LoadingOverlay active={loading} spinner text='Loading your content...'>
      <div>
        {view}
      </div>
    </LoadingOverlay>
    </>
  )

}

export default App;
