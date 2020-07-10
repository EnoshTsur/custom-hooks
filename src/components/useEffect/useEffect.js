import React from 'react'

export default function useEffect() {

    const [name, setName,] = React.useState('')
    const [isError, setError,] = React.useState(false)
    const isMounted = React.useRef(false)
    const h1 = React.useRef()

    React.useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true
            return
        }
        setError(name === '')

        return () => {
            //  console.log('!! did mount')
        }
    }, [name])

    React.useEffect(() => {
        function alertWhenEnter() {
            alert('hahaha')
        }
        h1.current.addEventListener('mouseenter', alertWhenEnter)

        return () => h1.current.removeEventListener('mouseenter', alertWhenEnter)


    }, [])


    return (
        <div>
            <input
                type="text"
                value={name}
                placeholder="Name"
                onChange={e => setName(e.target.value)}
                style={{
                    border: isError ? '2px solid red' : '2px solid #d9d9d9'
                }}
            />

            <h1 ref={h1}>Enosh</h1>
        </div>
    );


}
