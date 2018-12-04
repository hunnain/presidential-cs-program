import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./loginStyle.css"
import validateForm from "./helpers/validate";
import { MyInput, MySelect, MyRadio } from "./Input/MyInput";


class Form extends Component {
    constructor() {
        super();
        this.state = {
            data: {
                fullName: "",
                DOB: "",
                gender: "",
                email: "",
                phoneNumber: "",
                lastQualification: "",
                studentCnic: "",
                fatherCnic: "",
                fatherName: "",
                homeAddress: "",
                image: "",
                batch: "",
                course: ""
            },
            errors: {
                hasError: false,
                errorsObj: {}
            }
        }
    }

    changeData = (ev) => {
        let { data, errors } = this.state;
        switch (ev.target.name) {
            case "imagePicker":
                data["image"] = this.refs.imagePicker.files[0];
                this.setState({
                    file: this.refs.imagePicker.files[0]
                        ? URL.createObjectURL(this.refs.imagePicker.files[0])
                        : null,
                    data,
                    errors: validateForm("each", data, "image", errors)
                })
                break;
            default:
                data[ev.target.name] = ev.target.value
                this.setState({
                    data,
                    errors: validateForm("each", data, ev.target.name, errors)
                })
                break;
        }


    }

    submitForm(ev) {
        let { data } = this.state;
        const {
            image,
            DOB,
            batch,
            course,
            email,
            fatherName,
            fullName,
            phoneNumber,
            gender,
            homeAddress,
            lastQualification,
            studentCnic,
            fatherCnic
        } = this.state.data;

        var validate = validateForm("all", data);
        if (validate.hasError) {
            this.setState({ errors: validate },(x)=>{
                console.log(this.state);
                
            });
            return
        }

        var formData = new FormData();
        formData.append("image", image);
        formData.append("dob", DOB);
        formData.append("batch", batch);
        formData.append("course", course);
        formData.append("email", email);
        formData.append("fatherName", fatherName);
        formData.append("fullName", fullName);
        formData.append("phoneNumber", phoneNumber);
        formData.append("gender", gender);
        formData.append("homeAddress", homeAddress);
        formData.append("lastQualification", lastQualification);
        formData.append("studentCnic", studentCnic);
        formData.append("fatherCnic", fatherCnic);
        var myForm = new FormData(this.refs.myForm);
        //Nothing To Do Just Fetch And Post Data All Set
        fetch('http://localhost:3001/form', {
            method: 'POST',
            body: formData,
        }).then(x => {
            console.log(x);
            return x.json();
        }).then(x => {
            console.log(x);
        }).catch((err)=>{
            console.log(err);  
        });

    }



    render() {
        const {
            fullName, DOB, email, phoneNumber, studentCnic, fatherName, homeAddress, fatherCnic,
        } = this.state.data;
        const { errors, file } = this.state;



        return (
            <div className="container-fluid p-0">
                <div className="Rectangle-58">
                    <form action="JavaScript:void(0)" id="myForm" ref="myForm" onSubmit={(ev) => this.submitForm(ev)}  >
                        <h1 className="APPLICATION-FORM ">APPLICATION FORM</h1>
                        <MySelect
                            info={{
                                DisplayName: "Course",
                                name: "course",
                                id: "course",
                                changeData: this.changeData,
                                options: ["AI", "Cloud"],
                                errors
                            }}
                        />

                        <MyInput info={{
                            type: "text",
                            DisplayName: "Full Name",
                            name: "fullName",
                            id: "fullName",
                            value: fullName,
                            placeholder: "Your Full Name",
                            changeData: this.changeData,

                            errors
                        }} />
                        <MyInput info={{
                            type: "number",
                            DisplayName: "Student’s CNIC or B-Form #",
                            name: "studentCnic",
                            id: "studentCnic",
                            value: studentCnic,
                            placeholder: "CNIC or B-Form # without hyphenation",
                            changeData: this.changeData,
                            errors
                        }} />
                        <MyInput info={{
                            type: "text",
                            DisplayName: "Father’s Full Name",
                            name: "fatherName",
                            id: "fatherName",
                            value: fatherName,
                            placeholder: "Father’s full name",
                            changeData: this.changeData,
                            errors
                        }} />
                        <MyInput info={{
                            type: "number",
                            DisplayName: "Father’s CNIC #",
                            name: "fatherCnic",
                            id: "fatherCnic",
                            value: fatherCnic,
                            placeholder: "Father’s CNIC # without hyphenation",
                            changeData: this.changeData,
                            errors
                        }} />
                        <MyInput info={{
                            type: "text",
                            DisplayName: "Email Address",
                            name: "email",
                            id: "email",
                            value: email,
                            placeholder: "Your valid email address",
                            changeData: this.changeData,

                            errors
                        }} />


                        <MyInput info={{
                            type: "number",
                            DisplayName: "Contact Number",
                            name: "phoneNumber",
                            id: "phoneNumber",
                            value: phoneNumber,
                            placeholder: "Your valid mobile number ( 03XXXXXXXXX )",
                            changeData: this.changeData,

                            errors
                        }} />
                        <MyInput info={{
                            type: "text",
                            DisplayName: "Address",
                            name: "homeAddress",
                            id: "homeAddress",
                            value: homeAddress,
                            placeholder: "Your valid residential address",
                            changeData: this.changeData,

                            errors
                        }} />



                        <MyInput info={{
                            type: "date",
                            DisplayName: "Date Of Birth",
                            name: "DOB",
                            id: "DOB",
                            value: DOB,
                            changeData: this.changeData,

                            errors
                        }} />
                        <MyRadio
                            info={{
                                type: "radio",
                                name: "gender",
                                DisplayName: "Gender",
                                options: [
                                    {
                                        DisplayName: "Male",
                                        id: "Male",
                                        value: "male",
                                    },
                                    {
                                        DisplayName: "Female",
                                        id: "Female",
                                        value: "female",
                                    }
                                ],

                                changeData: this.changeData,
                                errors

                            }}

                        />
                        <MySelect
                            info={{
                                DisplayName: "Highest Education Qualification",
                                name: "lastQualification",
                                id: "lastQualification",
                                changeData: this.changeData,
                                options: ["Matric", "Intermediate"],
                                errors
                            }}
                        />
                        <div className="Rectangle-78">
                            <h1 className="label">Your headshot</h1>
                            <input type="file" className="d-none" name="imagePicker" ref="imagePicker"
                                id="imagePicker" onChange={(ev) => this.changeData(ev)}
                                accept="image/jpg,image/png,image/jpeg"
                            />
                            <div className="">
                                <div className="img-container" style={{
                                    backgroundImage: file ? `url(${file})` : `url(http://www.westminsterbc.org.uk/wp-content/uploads/2015/09/men-placeholder.png)`
                                }}>
                                </div>
                                <div className="Rectangle-63">
                                    <div>
                                        <p className="-File-type-jpg-jpeg-png">1) With white background</p>
                                        <p className="-File-type-jpg-jpeg-png">2) File size must be less than 1MB</p>
                                        <p className="-File-type-jpg-jpeg-png">3) File type: jpg, jpeg, png</p>
                                    </div>
                                    <button type="button" className="Rectangle-62" onClick={() => this.refs.imagePicker.click()}>Select</button>
                                </div>
                            </div>
                            {errors.errorsObj["imagePicker"] && <p className="error"  >{errors.errorsObj["imagePicker"].message}</p>}
                        </div>



                        <button type="submit" className="Rectangle-60">Submit Application</button>
                    </form>
                </div>
            </div >
        )
    }
}

export default Form;