import React from 'react'

const BasicInputText = ({ placeholder, name, func, type }) => {
    return (
        <div className="mb-6 " >
            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                onChange={func}
                required
                className="
                border-r-0
                border-l-0
                border-t-0
                border-b-2
                text-sm 
                block 
                w-full 
                px-10 
                py-2
                outline-0
                "
            />
        </div>
    )
}

export default BasicInputText