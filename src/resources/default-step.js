const step = {
    name: 'welcome',
    policyRequest: {
        effectiveDate: '',
        address: {
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            postalCode: '',
        },
        primaryNamedInsured: {
            firstName: '',
            lastName: '',
            dateOfBirth: '',
        },
        vehicles: [],
        drivers: []
    }
}

export default step