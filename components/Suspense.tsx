import React from 'react'

const Suspense = (props: any) => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            {props.children}
        </React.Suspense>
    )
}

export default Suspense