import React from 'react'

const TitlePage = ({text}) => {
    return (
        <div className="text-center lg:text-left">
            <div className="bg-transparent text-black text-3xl font-Roboto py-0.5 rounded ">
                {text}
            </div>
        </div>
    )
}

export default TitlePage