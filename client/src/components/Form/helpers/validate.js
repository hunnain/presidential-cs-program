// function validateForm(data) {
//     const {
//         fullName, DOB, gender, email, phoneNumber, lastQualification, studentCnic, fatherName,
//         homeAddress, batch, course, image
//     } = data;

//     var errors = {
//         hasError: false,
//         errorsArr: []
//     }


//     if (fatherName.length < 3) {
//         errors.hasError = true
//         errors.errorsArr.push({
//             message: "Please Specify You Full Father Name",
//             elem: "fatherName"
//         })
//     }
//     if (!image) {
//         errors.hasError = true
//         errors.errorsArr.push({
//             message: "Please Select Your Picture",
//             elem: "imagePicker"
//         })
//     }
//     if (fullName.length < 3) {
//         errors.hasError = true
//         errors.errorsArr.push({
//             message: "Please Specify Your FullName",
//             elem: "fullName"
//         })
//     }

//     if (homeAddress.length < 8) {

//         errors.hasError = true
//         errors.errorsArr.push({
//             message: "Please Specify Your Full Adress",
//             elem: "homeAddress"
//         })
//     }

//     if (studentCnic.length !== 13) {
//         errors.hasError = true
//         errors.errorsArr.push({
//             message: "Please Specify Your Full CNIC",
//             elem: "studentCnic"
//         })
//     }

//     if (!DOB) {
//         errors.hasError = true
//         errors.errorsArr.push({
//             message: "Please Select Your Date Of Birth",
//             elem: "DOB"
//         })
//     }
//     if (!gender) {
//         errors.hasError = true
//         errors.errorsArr.push({
//             message: "Please Select Atleast Gender",
//             elem: "gender"
//         })
//     }
//     if (!lastQualification) {
//         errors.hasError = true
//         errors.errorsArr.push({
//             message: "Please Select Your Qualification",
//             elem: "lastQualification"
//         })
//     }
//     if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
//         errors.hasError = true
//         errors.errorsArr.push({
//             message: "Please Provide A Valid Email",
//             elem: "email"
//         })
//     }
//     if (!/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/.test(phoneNumber)) {
//         errors.hasError = true
//         errors.errorsArr.push({
//             message: "Please Provide A Valid Number",
//             elem: "phoneNumber"
//         })
//     }
//     if (!batch.length || batch === "Select") {
//         errors.hasError = true
//         errors.errorsArr.push({
//             message: "Please Select Batch Number",
//             elem: "batch"
//         })
//     }
//     if (!course.length || course === "Select") {
//         errors.hasError = true
//         errors.errorsArr.push({
//             message: "Please Select Any Course",
//             elem: "course"
//         })
//     }

//     return errors.hasError ? errors : {
//         hasError: false
//     }
// }

// export default validateForm;


function validateForm(check, data, field) {
    const {
        fullName, DOB, gender, email, phoneNumber, lastQualification, studentCnic, fatherName,
        homeAddress, batch, course, image,fatherCnic
    } = data;

    var errors = {
        hasError: false,
        errorsObj: {}
    }

    let Validation = {
        fullName: {
            Validate: [{
                condition: fullName.length < 3,
                message: "Please Specify Your FullName",
            }],
            elem: "fullName"
        },
        fatherName: {
            Validate: [
                {
                    condition: fatherName.length < 3,
                    message: "Please Specify You Full Father Name",
                }
            ],
            elem: "fatherName"
        },
        image: {
            Validate: [
                {
                    condition: !image,
                    message: "Please Select Your Picture",
                },
                
            ],
            elem: "imagePicker"
        },
        homeAddress: {
            Validate: [
                {
                    condition: homeAddress.length < 8,
                    message: "Please Specify Your Full Adress",
                }
            ],
            elem: "homeAddress"
        },
        studentCnic: {
            Validate: [
                {
                    condition: studentCnic.length !== 13,
                    message: "Please Specify Your Full CNIC",

                }
            ],
            elem: "studentCnic"
        },
       fatherCnic: {
            Validate: [
                {
                    condition: fatherCnic.length !== 13,
                    message: "Please Specify Your Full Father CNIC",

                }
            ],
            elem: "fatherCnic"
        },
        DOB: {
            Validate: [
                {
                    condition: !DOB,
                    message: "Please Select Your Date Of Birth",
                }
            ],
            elem: "DOB"
        },
        gender: {
            Validate: [
                {
                    condition: !gender,
                    message: "Please Select Atleast Gender",
                }
            ],
            elem: "gender"
        },
        lastQualification: {
            Validate: [
                {
                    condition: !lastQualification,
                    message: "Please Select Your Qualification",
                }
            ],
            elem: "lastQualification"
        },
        email: {
            Validate: [
                {
                    condition: !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email),
                    message: "Please Provide A Valid Email",
                }
            ],
            elem: "email"
        },
        phoneNumber: {
            Validate: [
                {
                    condition: !/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/.test(phoneNumber),
                    message: "Please Provide A Valid Number",

                }, {
                    condition: phoneNumber.length !== 11,
                    message: "Number Length Is Less Than 11"
                }

            ],
            elem: "phoneNumber"
        },
        batch: {
            Validate:[
                {
                    condition: !batch.length || batch === "Select",
                    message: "Please Select Batch Number",
                }
            ],
            elem: "batch"
        },
        course: {
            Validate:[
                {
                    condition: !course.length || course === "Select",
                    message: "Please Select Any Course",
                }
            ],
            elem: "course"
        }
    }
    if (check === "all") {
        for (var item in Validation) {
            Validation[item].Validate.map((conArray, index) => {
                if (conArray.condition) {
                    errors.hasError = true;
                    errors.errorsObj[item] ?
                        errors.errorsObj[item].message += conArray.message
                        : errors.errorsObj[item] = {message:""}
                    errors.errorsObj[item].message += ` ${conArray.message} . `
                }
            })
        }
        return errors;
    }
    if (check === "each") {
        Validation[field].Validate.map((conArray, index) => {
            if (conArray.condition) {
                errors.errorsObj[field] ?
                    errors.errorsObj[field].message += conArray.message
                    : errors.errorsObj[field] = {message:""}
                errors.errorsObj[field].message += ` ${conArray.message} . `


            }
        })
        return errors;
    }




    return errors.hasError ? errors : {
        hasError: false
    }
}

export default validateForm;