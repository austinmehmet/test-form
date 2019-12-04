import React, { useRef } from 'react'

const Vehicles = ({ setStep }) => {
    const vinRef = useRef()

    const update = () => {
        setStep(preVal => {
            const newVal = Object.assign({}, preVal)
            newVal.name = 'leaseOrOwn'
            newVal.policyRequest.vehicles.push({vin: vinRef.current.value})
            return newVal
        })
    }

    return (
        <div>
            Vehicles Page<br /><br />
            <label htmlFor="vin">VIN</label>
            <input type="text" name="vin" ref={vinRef}></input> <br />
            <button onClick={update}>Continue</button>
        </div>
    )
}

export default Vehicles