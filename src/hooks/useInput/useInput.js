import React from 'react'

export default function useInput(initValue) {
    
    const [ value, setValue ] = React.useState(initValue)

    function onChange(e) {
        setValue(e.target.value)
    }

    return [ value, onChange, ]

}
