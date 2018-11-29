function validateForm(data) {
    const {
        fullName, DOB, gender, email, phoneNumber, lastQualification, studentCnic, fatherName,
        homeAddress, batch, course, image
    } = data;

    var errors = {
        hasError: false,
        errorsArr: []
    }


    if (fatherName.length < 3) {
        errors.hasError = true
        errors.errorsArr.push({
            message: "Please Specify You Full Father Name",
            elem: "fatherName"
        })
    }
    if (!image) {
        errors.hasError = true
        errors.errorsArr.push({
            message: "Please Select Your Picture",
            elem: "imagePicker"
        })
    }
    if (fullName.length < 3) {
        errors.hasError = true
        errors.errorsArr.push({
            message: "Please Specify Your FullName",
            elem: "fullName"
        })
    }

    if (homeAddress.length < 8) {

        errors.hasError = true
        errors.errorsArr.push({
            message: "Please Specify Your Full Adress",
            elem: "homeAddress"
        })
    }

    if (studentCnic.length !== 13) {
        errors.hasError = true
        errors.errorsArr.push({
            message: "Please Specify Your Full CNIC",
            elem: "studentCnic"
        })
    }

    if (!DOB) {
        errors.hasError = true
        errors.errorsArr.push({
            message: "Please Select Your Date Of Birth",
            elem: "DOB"
        })
    }
    if (!gender) {
        errors.hasError = true
        errors.errorsArr.push({
            message: "Please Select Atleast Gender",
            elem: "gender"
        })
    }
    if (!lastQualification) {
        errors.hasError = true
        errors.errorsArr.push({
            message: "Please Select Your Qualification",
            elem: "lastQualification"
        })
    }
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
        errors.hasError = true
        errors.errorsArr.push({
            message: "Please Provide A Valid Email",
            elem: "email"
        })
    }
    if (!/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/.test(phoneNumber)) {
        errors.hasError = true
        errors.errorsArr.push({
            message: "Please Provide A Valid Number",
            elem: "phoneNumber"
        })
    }
    if (!batch.length || batch === "Select") {
        errors.hasError = true
        errors.errorsArr.push({
            message: "Please Select Batch Number",
            elem: "batch"
        })
    }
    if (!course.length || course === "Select") {
        errors.hasError = true
        errors.errorsArr.push({
            message: "Please Select Any Course",
            elem: "course"
        })
    }

    return errors.hasError ? errors : {
        hasError: false
    }
}

export default validateForm;