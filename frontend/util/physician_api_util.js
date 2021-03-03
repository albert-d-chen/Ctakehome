export const fetchPhysician = physicianId => (
    $.ajax({
        method: 'GET',
        url: `/api/physicians/${physicianId}`
    })
)

export const fetchPhysicians = () => (
    $.ajax({
        method: 'GET',
        url: `/api/physicians`
    })
)

