import React from 'react'

const Button = ({label, handleClick}) => {

    
    return (
        
        <div className="btn btn-primary "onClick= {() => handleClick(label)}>
            
            {label}
        </div>
    )
}

 export default Button
