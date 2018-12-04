
function validateForm(check, data, field, err) {
    const {
        fullName, DOB, gender, email, phoneNumber, lastQualification, studentCnic, fatherName,
        homeAddress, batch, course, image, fatherCnic
    } = data;

    var errors = err ? err : {
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
                {
                    condition: image.size > 1000000,
                    message: "Image Size Must Be Less Than 1 MB",
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
                    message: "Please Select Your Gender",
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
                    message: "Length Is Less Than 11"
                }

            ],
            elem: "phoneNumber"
        },
        batch: {
            Validate: [
                {
                    condition: !batch.length || batch === "Select",
                    message: "Please Select Batch Number",
                }
            ],
            elem: "batch"
        },
        course: {
            Validate: [
                {
                    condition: !course.length || course === "Select",
                    message: "Please Select Any Course",
                }
            ],
            elem: "course"
        }
    }
    if (check === "all") {
        for (var i in data) {
            var conArray = Validation[i].Validate;
            errors.errorsObj[Validation[i].elem] = { message: [] }
            for (var j = 0; j < conArray.length; j++) {
                if (conArray[j].condition) {
                    errors.hasError = true
                    errors.errorsObj[Validation[i].elem].message.push(conArray[j].message)
                }
            }
        }
        return errors
    }
    if (check === "each") {
        var conArray = Validation[field].Validate;
        errors.errorsObj[Validation[field].elem] = { message: [] }
        for (var j = 0; j < conArray.length; j++) {
            if (conArray[j].condition) {
                errors.hasError = true
                errors.errorsObj[Validation[field].elem].message.push(conArray[j].message)
            }
        }
        return errors
    }




    return errors.hasError ? errors : {
        hasError: false
    }
}

export default validateForm;