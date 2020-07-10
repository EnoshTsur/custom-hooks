import React from 'react'

export default function useMedia(maxWidth) {
    
    const [ isMobile, setMobile] = React.useState(false)

    React.useEffect(() => {
        const mq = window.matchMedia(`(max-width: ${maxWidth})`)
        setMobile(mq.matches)
        mq.addListener(m => setMobile(m.matches))        

    }, [isMobile])

    return isMobile
}
