import React, { Component } from "react"


class MyInput extends Component {
    render() {
        const { DisplayName, type, name, value, id, changeData, errors, placeholder,
            parentThis } = this.props.info;

        return (
            <div className={"form-group"}>
                <label htmlFor={id}>{DisplayName}
                    <input
                        type={type}
                        className={`form-control ${errors.elem === name && "errorElem"}`}
                        name={name}
                        ref={(el) => { parentThis[name] = el }}
                        onChange={(ev) => changeData(ev)} value={value}
                        id={id}
                        placeholder={placeholder} />
                </label>
                {
                    errors.errorsArr.map((item, index) => {
                        if (item.elem === name) {
                            return <p className="error" key={index} >{item.message}</p>
                        }
                    })
                }
            </div>
        )
    }
}

class MySelect extends Component {
    render() {
        const { id, name, options, DisplayName, changeData, errors } = this.props.info;
        return (
            <div className="form-group">
                <label htmlFor={id}>{DisplayName}</label>
                <select className="form-control" name={name} onChange={(ev) => changeData(ev)} id={id}>
                    <option value="Select">Select</option>
                    {options.map((item, index) => {
                        return <option key={index} value={item}>{item}</option>
                    })}

                </select>
                {
                    errors.errorsArr.map((item, index) => {
                        if (item.elem === id) {
                            return <p className="error" key={index}>{item.message}</p>
                        }
                    })
                }

            </div>
        )
    }
}

class MyRadio extends Component {
    render() {
        const { type, name, options, DisplayName, changeData, errors, parentThis } = this.props.info;
        return (
            <div className="form-group">
                <h5>{DisplayName}</h5>
                {
                    errors.errorsArr.map((item, index) => {
                        if (item.elem === name) {
                            return <p className="error" key={index}>{item.message}</p>
                        }
                    })
                }

                {
                    options.map((item, index) => {
                        return (
                            <div key={index}>
                                <label htmlFor={item.id}>{item.DisplayName}
                                    <input
                                        type={type}
                                        className={`form-control`}
                                        name={name}
                                        ref={(el) => { parentThis[item.id] = el }}
                                        onChange={(ev) => changeData(ev)} value={item.value}
                                        id={item.id}
                                        placeholder={item.placeholder} />
                                </label>
                            </div>
                        )
                    })
                }


            </div>
        )
    }
}

export { MyInput, MySelect, MyRadio }