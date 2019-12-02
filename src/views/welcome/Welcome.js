import React, { useRef } from 'react'

const Welcome = ({ setStep }) => {
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const effectiveDateRef = useRef()


    const update = () => {
        setStep(preVal => {
            const newVal = Object.assign({}, preVal)
            newVal.name = 'vehicles'
            newVal.policyRequest.primaryNamedInsured.firstName = firstNameRef.current.value
            newVal.policyRequest.primaryNamedInsured.lastName = lastNameRef.current.value
            newVal.policyRequest.primaryNamedInsured.effectiveDate = effectiveDateRef.current.value
            return newVal
        })
    }

    return (
        <div>
            Welcome Page <br /><br />
            <label htmlFor="fName">First Name</label>
            <input type="text" name="fName" ref={firstNameRef}></input> <br />
            <label htmlFor="lName">Last Name</label>
            <input type="text" name="lName" ref={lastNameRef}></input> <br />
            <label htmlFor="effectiveDate">Effective Date</label>
            <input type="text" name="effectiveDate" ref={effectiveDateRef}></input> <br />
            <button onClick={update}>Click me you slut</button>
        </div>
    )
}

export default Welcome
