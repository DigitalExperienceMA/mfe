import { lazy, Suspense } from 'react'
const MFE = lazy(()=>import("mfe1/app"))
export const App = () => {
  return (
    <>
      <h1>Start adding your components...</h1>
      <Suspense fallback="Loading mfe1...">
        <MFE />
      </Suspense>
    </>
  )
}
