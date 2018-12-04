import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
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
        let { data } = this.state;
        switch (ev.target.name) {
            case "imagePicker":
                data["image"] = this.imagePicker.files[0];
                console.log(this.imagePicker.files[0])
                this.setState({ data, errors: validateForm("each", data, "image") }, (x => {
                    console.log(this.state)
                }))
                break;
            default:
                data[ev.target.name] = ev.target.value
                this.setState({
                    data,
                    errors: validateForm("each", data, ev.target.name)
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
            this.setState({ errors: validate });
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
        });

    }



    render() {
        const {
            fullName, DOB, email, phoneNumber, studentCnic, fatherName, homeAddress, fatherCnic
        } = this.state.data;
        const { errors } = this.state;



        return (
            <div>
                <form action="JavaScript:void(0)" ref="myForm" onSubmit={(ev) => this.submitForm(ev)}  >
                    <MySelect
                        info={{
                            DisplayName: "Select Course",
                            name: "course",
                            id: "course",
                            changeData: this.changeData,
                            options: ["AI", "Cloud"],
                            errors
                        }}
                    />
                    <MySelect
                        info={{
                            DisplayName: "Select Batch",
                            name: "batch",
                            id: "batch",
                            changeData: this.changeData,
                            options: ["1"],
                            errors
                        }}
                    />
                    <MyInput info={{
                        type: "text",
                        DisplayName: "Name",
                        name: "fullName",
                        id: "fullName",
                        value: fullName,
                        placeholder: "Enter Your Full Name",
                        changeData: this.changeData,
                        parentThis: this,
                        errors
                    }} />
                    <MyInput info={{
                        type: "number",
                        DisplayName: "Student-CNIC/B-Form",
                        name: "studentCnic",
                        id: "studentCnic",
                        value: studentCnic,
                        placeholder: "Enter Your Full CNIC Number",
                        changeData: this.changeData,
                        parentThis: this,
                        errors
                    }} />
                    <MyInput info={{
                        type: "number",
                        DisplayName: "Father CNIC",
                        name: "fatherCnic",
                        id: "fatherCnic",
                        value: fatherCnic,
                        placeholder: "Enter Your Father CNIC Number",
                        changeData: this.changeData,
                        parentThis: this,
                        errors
                    }} />
                    <MyInput info={{
                        type: "text",
                        DisplayName: "Fathers Name",
                        name: "fatherName",
                        id: "fatherName",
                        value: fatherName,
                        placeholder: "Enter Your Father Name",
                        changeData: this.changeData,
                        parentThis: this,

                        errors
                    }} />
                    <MyInput info={{
                        type: "text",
                        DisplayName: "Full Parmanent Adress",
                        name: "homeAddress",
                        id: "homeAddress",
                        value: homeAddress,
                        placeholder: "Enter Your House Address",
                        changeData: this.changeData,
                        parentThis: this,
                        errors
                    }} />
                    <MyInput info={{
                        type: "number",
                        DisplayName: "Conact Number",
                        name: "phoneNumber",
                        id: "phoneNumber",
                        value: phoneNumber,
                        placeholder: "(03XXXXXXXXX)",
                        changeData: this.changeData,
                        parentThis: this,
                        errors
                    }} />
                    <MyInput info={{
                        type: "text",
                        DisplayName: "Email Address",
                        name: "email",
                        id: "email",
                        value: email,
                        placeholder: "Enter An Email Address",
                        changeData: this.changeData,
                        parentThis: this,
                        errors
                    }} />
                    <MyInput info={{
                        type: "date",
                        DisplayName: "Date Of Birth",
                        name: "DOB",
                        id: "DOB",
                        value: DOB,
                        changeData: this.changeData,
                        parentThis: this,
                        errors
                    }} />
                    <MyInput info={{
                        type: "file",
                        DisplayName: "Choose An Image (Image Must Be Less Then 1Mb)",
                        name: "imagePicker",
                        id: "imagePicker",
                        changeData: this.changeData,
                        parentThis: this,
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
                            parentThis: this,
                            changeData: this.changeData,
                            errors

                        }}

                    />


                    <MyRadio
                        info={{
                            type: "radio",
                            name: "lastQualification",
                            DisplayName: "Qualification",
                            options: [
                                {
                                    DisplayName: "Matric",
                                    id: "Matric",
                                    value: "matric",
                                },
                                {
                                    DisplayName: "Intermediate",
                                    id: "Intermediate",
                                    value: "intermediate",
                                }
                            ],
                            parentThis: this,
                            changeData: this.changeData,
                            errors

                        }}

                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div >
        )
    }
}

export default Form;