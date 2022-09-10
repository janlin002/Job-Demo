import React from 'react';
import { useState } from 'react'
// import * as Driver from 'driver.js';
// import 'driver.js/dist/driver.min.css';
// import Joyride from 'react-joyride';
import { Steps, Hints } from 'intro.js-react';
import 'intro.js/introjs.css';
import './style.css'
// import introJs from 'intro.js';
// import 'intro.js/introjs.css'; 

const Drivejs = () =>{
  //   driver.defineSteps([
  //     {
  //       element: '#first-element-introduction',
  //       popover: {
  //         className: 'first-step-popover-class',
  //         title: 'Title on Popover',
  //         description: 'Body of the popover',
  //         position: 'left'
  //       }
  //     },
  //   ])

  //   driver.start();

  //   const handleButtonClic = () =>{
  //     driver.highlight({
  //       element: '#title-item',
  //       popover: {
  //         title: 'Title for the Popover',
  //         description: 'Description for it',
  //       }
  //     });
  //   }

  // const driver = new Driver();
  // driver.highlight({
  //   element: '#title-item',
  //   stageBackground: 'blue'
  // });
  //   driver.start()

  // const state = {
  //   steps: [
  //     {
  //       target: '.my-first-step',
  //       content: 'This is my awesome feature!',
  //     },
  //     {
  //       target: '.my-other-step',
  //       content: 'This another awesome feature!',
  //     },
  //   ],
  // }

  const [enabled,setEnabled] = useState(true)
  const [initialStep,setInitialStep] = useState(0)

  const onExit = () => {
    setEnabled(false)  
  }

  const steps = [
    {
      element: '#help',
      intro: 'You can use this button for help',
      position: 'right',
    },
    {
      element: '#about',
      intro: 'You can use this button to get more information',
    },
    {
      element: '#contact',
      intro: 'You can use this button to contact us',
    },
  ];

  const hints = [
    {
      element: '#help',
      hint: 'test 1',
      hintPosition: 'middle-middle',
    },
    {
      element: '#about',
      hint: 'test 2',
    },
    {
      element: '#contact',
      hint: 'test 3',
    },
  ];
  
  return (
    <div>
      {/* <div className="#first-element-introduction">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Officiis delectus impedit a ex perferendis quis optio deleniti,
        eveniet culpa veritatis! Iste libero error reiciendis quibusdam repell
      </div> */}
      {/* <div id="#title-item">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Officiis delectus impedit a ex perferendis quis optio deleniti,
        eveniet culpa veritatis! Iste libero error reiciendis quibusdam repell
        <Joyride
          steps={state}
        />
      </div> */}
      <div className="App">
        {/* <Steps
          enabled={enabled}
          steps={steps}
          initialStep={initialStep}
          onExit={onExit}
        /> */}
        <Hints
          enabled={enabled}
          hints={hints}
        />
        <div id="buttonRow">
          <button id="help">Help</button>
          <button id="about">About</button>
          <button id="contact">Contact Us</button>
        </div>
      </div>
      {/* <button type="button" onClick={handleButtonClic}>
        點擊
      </button> */}
    </div>
  )
}

export default Drivejs