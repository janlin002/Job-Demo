import React from "react"

export function Father() {
  React.useEffect(() => {
    console.log("Father useEffect")
  }, [])

  console.log("Father rnder")

  return <Children />
}

export function Children() {
  React.useEffect(() => {
    console.log("Child useEffect")
  }, [])

  console.log("Child render")

  return
}

export default Father

// Result
// Father rnder 
// Child render 
// Child useEffect 
// Father useEffect 