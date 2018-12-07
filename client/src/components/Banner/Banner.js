import React from "react"

const Banner = (props) => {
    const { heading, tagline, courseLine ,className} = props;
    return (
        <div>
            <div className={className}>
                <div className="SliderData">
                    <h1 className="Artificial-Intelligence">{heading}</h1>
                    <p className="line">
                        {tagline}
                    </p>
                </div>
            </div>
            <div className="line2">
                {courseLine}
            </div>
        </div>
    )
}

export default Banner;