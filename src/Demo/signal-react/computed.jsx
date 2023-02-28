import React from 'react'
import { signal, computed } from "@preact/signals-core"

const Computed = () => {

  const name = signal("Jane")
  const surname = signal("Doe")

  //   const fullName = computed(() => name.value + " " + surname.value)

  // Logs: "Jane Doe"
  console.log(name.value + ' ' + surname.value)

  name.value = "John"

  console.log(name.value + ' ' + surname.value, '2')
  // console.log(fullName.value)
  return (
    <div>Computed</div>
  )
}

export default Computed