//validation function for register
export const AddressValidation = (data) => {
    let errors = {};

    if (!data.firstName) {
        errors.firstName = "First Name is required."
    }

    if (!data.lastName) {
        errors.lastName = "Last Name is required."
    }

    if (!data.email) {
        errors.email = "Email is required."
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Invalid Email"
    }

    if (!data.phone) {
        errors.phone = "Phone Number is required."
    } 

    if (!data.street) {
        errors.street = "Street is required."
    }

    if (!data.city) {
        errors.city = "City is required."
    }

    if (!data.postalCode) {
        errors.postalCode = "Postal Code is required."
    } else if (!/^\d{5}$/.test(data.postalCode)) {
        errors.postalCode = "Invalid Postal Code"
    }

    if (!data.country) {
        errors.country = "Country is required."
    }

    return errors;
}