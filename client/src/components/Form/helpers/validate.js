/*eslint-disabled */
function validateForm(check, data, field, err) {
    const {
        fullName, DOB, gender, email, phoneNumber, lastQualification, studentCnic, fatherName,
        homeAddress, course, image, fatherCnic
    } = data;

    var errors = err ? err : {
        hasError: false,
        errorsObj: {}
    }
    function hasNumber(myString) {
        return ;
      }
      


    let Validation = {
        fullName: {
            Validate: [{
                condition: fullName.length < 3,
                message: " Please Specify Your Full Name . ",
            }, {
                condition:/\d/.test(fullName) || /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(fullName),
                message: " Name Can Not Contain Numbers Or Any Special Character . ",
            }
        ],
            elem: "fullName"
        },
        fatherName: {
            Validate: [
                {
                    condition: fatherName.length < 3,
                    message: " Please Specify You Full Father Name . ",
                },
                {
                    condition:/\d/.test(fatherName) || /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(fatherName),
                    message: " Name Can Not Contain Numbers Or Any Special Character . ",
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
                    condition: image && image.size > 1000000,
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
                },{
                    condition: !/\d/.test(studentCnic) || /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(studentCnic),
                    message: " Please Specify CNIC Number Without Hyphens ('-') Or Any Special Character . ",
                }
            ],
            elem: "studentCnic"
        },
        fatherCnic: {
            Validate: [
                {
                    condition: fatherCnic.length !== 13,
                    message: "Please Specify Your Full Father CNIC",

                },{
                    condition: !/\d/.test(fatherCnic) || /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(fatherCnic),
                    message: " Please Specify CNIC Number Without Hyphens ('-') Or Any Special Character . ",
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
                    condition: !lastQualification || lastQualification === "Select",
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
                    condition:phoneNumber.indexOf("03") !==0,
                    message: " Please Provide A Valid Number . ",

                }, {
                    condition: phoneNumber.length !== 11,
                    message: " Length Must Be Equal To 11 . "
                },
                {
                    condition:!/\d/.test(phoneNumber) || /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(phoneNumber),
                    message:" Please Specify Contact Number Without Hyphen ('-') Or Any Special Charachter . "
                }

            ],
            elem: "phoneNumber"
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
        for (var i in Validation) {
            var conArray = Validation[i].Validate;
            errors.errorsObj[Validation[i].elem] = { message: [] }
            for (var j = 0; j < conArray.length; j++) {
                if (conArray[j].condition) {
                    errors.hasError = true
                    errors.errorsObj[Validation[i].elem].message.push(conArray[j].message)
                }
            }
            if (!errors.errorsObj[Validation[i].elem].message.length) {
                errors.errorsObj[Validation[i].elem] = undefined
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
        if (!errors.errorsObj[Validation[field].elem].message.length) {
            errors.errorsObj[Validation[field].elem] = undefined
        }
        return errors
    }




    return errors.hasError ? errors : {
        hasError: false
    }
}

export default validateForm;