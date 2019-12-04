import React, { useRef } from 'react'

const Welcome = ({ setNavigation, setPolicyRequest, setLoading }) => {
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const effectiveDateRef = useRef()


    const next = async () => {
        setLoading(true)
        const delay = ms => new Promise(res => setTimeout(res, ms));
        await delay(2000)
        setLoading(false)
        setNavigation(preVal => {
            const newVal = Object.assign({}, preVal)
            newVal.current++
            return newVal
        })
        setPolicyRequest(preVal => {
            const newVal = Object.assign({}, preVal)
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
            <input type="text" name="effectiveDate" ref={effectiveDateRef}></input> <br /> <br />
            <button onClick={next}>I want a quote as fast as possible</button>  <button onClick={next}>I want a detailed, indepth quote</button><br /> <br />
            <button>Back</button>
        </div>
    )
}

export default Welcome
