import React from 'react'
import loader from "../../assets/Iphone-spinner-2.gif"
export default function Loader() {
  return (
    <div
  style={{
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
      <img  src={loader} alt="Loading" />
</div>

  )
}
