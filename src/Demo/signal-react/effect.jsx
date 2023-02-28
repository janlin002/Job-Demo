import React from 'react'
import { signal, computed, effect } from "@preact/signals-core"

const Effect = () => {
  const name = signal("Jane")
  const surname = signal("Doe")
  const fullName = computed(() => name.value + " " + surname.value)

  // Logs: "Jane Doe"
  effect(() => console.log(fullName.value))

  // Updating one of its dependencies will automatically trigger
  // the effect above, and will print "John Doe" to the console.
  name.value = "John"

  return (
    <div>effect</div>
  )
}

export default Effect