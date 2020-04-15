import React, { forwardRef } from 'react'

const Input = ({ onKeyDown, type, placeholder }, ref) => {
    return (
        <div>
            <input type={type} onKeyDown={onKeyDown} ref={ref} placeholder={placeholder}></input>
        </div>
    )
}

const forwardedInput = forwardRef(Input)

export default forwardedInput
