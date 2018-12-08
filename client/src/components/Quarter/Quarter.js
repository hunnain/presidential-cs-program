import React from "react"

const Quarters = (props) => {
    const {Q1,Q2,Q3,Q4} = props
    return (
        <div className="container my-container Q-Con">
            <div className="row">
                <div className="col-sm-6 col-md-3 col-12 col-lg-3 col-lg-3 ">
                    <div className={Q1.className}>
                        <div>
                        <h4 className="quarter" >Quarter 1</h4>
                        <p className="para">{Q1.para}</p>
                        </div>
                    </div>
                </div>
                <div className=" col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                    <div className={Q2.className}>
                        <div>
                        <h4 className="quarter" >Quarter 2</h4>
                        <p className="para">{Q2.para}</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 ">
                    <div className={Q3.className}>
                        <div className="data">
                            <div>
                            <h4 className="quarter" >Quarter 3</h4>
                            <p className="para">{Q3.para}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6   col-md-3 col-12 col-lg-3 col-xl-3 ">
                    <div className={Q4.className}>
                        <div>
                        <h4 className="quarter" >Quarter 4</h4>
                        <p className="para">{Q4.para}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quarters;