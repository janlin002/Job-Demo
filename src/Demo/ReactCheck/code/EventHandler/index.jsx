import React from 'react'

const Index = () => {
  const handleCallFamilyToEat =()=> {
    console.log("Hey fam! Food's ready!")
  }

  const handleCookEggs = () => {
    console.log("Molly is cooking fluffy eggs...")
  }

  const handleMakeRice = () => {
    console.log("Molly is making some delicious jasmine rice...")
  }

  const handleMixChicken = () => {
    console.log("Molly is mixing chicken with some yummy spicy sauce!")
  }

  return (
    <div className="im-a-parent" onClick={handleCallFamilyToEat}>
      <button className="im-a-child" onClick={handleCookEggs}>Cook Eggs</button>
      <button className="im-a-child" onClick={handleMakeRice}>Make Rice</button>
      <button className="im-a-child" onClick={handleMixChicken}>Mix Chicken</button>
    </div>
  )
}

export default Index