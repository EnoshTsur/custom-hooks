import React from 'react';
import useMedia from './hooks/useMedia/useMedia'
import useInput from './hooks/useInput/useInput'

function App() {

    const isMobile = useMedia('500px')
    const [value, onChange,] = useInput('')

    return (
        <div>
            {isMobile ? <h1>mobile</h1> : <h1>desktop</h1>}
            <input
                type="text"
                placeholder="name"
                onChange={onChange}
                value={value}
            />

            <h1>{value}</h1>
        </div>
    )

}

export default App;
