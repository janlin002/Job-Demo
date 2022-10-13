import React, { useRef } from 'react'

const Ref = () =>{
  const inputRef = useRef(null)

  const handleClick = () =>{
    // inputRef.current.focus()
    // inputRef.current.style.backgroundColor = "blue"
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  const handleClickBlur = () =>{
    inputRef.current.style.backgroundColor = "orange"
    inputRef.current.blur()
  }

  return (
    <>
      <input type="text" ref={inputRef} />
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tempore ipsam nihil nostrum, architecto doloribus dolores suscipit iure a natus quasi consequuntur. Sunt, repellat magni autem fuga voluptates enim eius.
      Distinctio cupiditate iure quam voluptas, modi facere repellendus! Suscipit quam tenetur sequi, iusto nemo alias. Iste optio saepe rem veritatis. At quia iusto animi ad tenetur adipisci voluptatum mollitia quo!
      Consequuntur error pariatur, voluptatibus velit suscipit autem expedita! Saepe quaerat molestias eos impedit repellendus perspiciatis. Mollitia qui, minus veniam possimus deserunt blanditiis! Quaerat omnis iusto itaque ut qui accusantium excepturi.
      Nulla, porro facilis? Placeat quibusdam delectus harum fugiat, odio ipsa laboriosam alias, nobis aliquid quis accusantium neque eum corporis repudiandae, quae nihil ipsum dolor nisi! Vero sunt quibusdam illum quis.
      Dignissimos ut atque ea sit, accusamus earum aperiam voluptatem facilis ipsam minus dolore voluptas ex debitis nisi autem non blanditiis laboriosam laudantium necessitatibus placeat minima sapiente. Expedita porro similique incidunt.
      Perferendis nisi a odio magnam, velit incidunt qui, sequi ad, facere eum animi ut impedit excepturi tempora eaque voluptate! Placeat, iusto doloremque. Laborum debitis adipisci expedita modi ad omnis veritatis!
      Esse ut necessitatibus in voluptatem consequuntur quia voluptate ducimus autem voluptatibus deserunt facilis hic enim sit possimus facere placeat modi cupiditate, soluta iste voluptatum perferendis doloremque repellendus eveniet quas. Possimus!
      orem sed voluptas repellat ex suscipit ratione iusto at quasi, delectus mollitia nostrum odit eos explicabo incidunt debitis cumque, esse quaerat provident obcaecati aperiam corporis voluptatibus. Ex?
      Totam aliquid illum, accusantium bacilis? Placeat quibusdam delectus harum fugiat, odio ipsa laboriosam alias, nobis aliquid quis accusantium neque eum corporis repudiandae, quae nihil ipsum dolor nisi! Vero sunt quibusdam illum quis.
      Dignissimos ut atque ea sit, accusamus earum aperiam voluptatem facilis ipsam minus dolore voluptas ex debitis nisi autem non blanditiis laboriosam laudantium necessitatibus placeat minima sapiente. Expedita porro similique incidunt.
      Perferendis nisi a odio magnam, velit incidunt qui, sequi ad, facere eum animi ut impedit excepturi tempora eaque voluptate! Placeat, iusto doloremque. Laborum debitis adipisci expedita modi ad omnis veritatis!
      Esse ut necessitatibus in voluptatem consequuntur quia voluptate ducimus autem voluptatibus deserunt facilis hic enim sit possimus facere placeat modi cupiditate, soluta iste voluptatum perferendis doloremque repellendus eveniet quas. Possimus!
      orem sed voluptas repellat ex suscipit ratione iusto at quasi, delectus mollitia nostrum odit eos explicabo incidunt debitis cumque, esse quaerat provident obcaecati aperiam corporis voluptatibus. Ex?
      Totam aliquid illum, accusantium beacilis? Placeat quibusdam delectus harum fugiat, odio ipsa laboriosam alias, nobis aliquid quis accusantium neque eum corporis repudiandae, quae nihil ipsum dolor nisi! Vero sunt quibusdam illum quis.
      Dignissimos ut atque ea sit, accusamus earum aperiam voluptatem facilis ipsam minus dolore voluptas ex debitis nisi autem non blanditiis laboriosam laudantium necessitatibus placeat minima sapiente. Expedita porro similique incidunt.
      Perferendis nisi a odio magnam, velit incidunt qui, sequi ad, facere eum animi ut impedit excepturi tempora eaque voluptate! Placeat, iusto doloremque. Laborum debitis adipisci expedita modi ad omnis veritatis!
      Esse ut necessitatibus in voluptatem consequuntur quia voluptate ducimus autem voluptatibus deserunt facilis hic enim sit possimus facere placeat modi cupiditate, soluta iste voluptatum perferendis doloremque repellendus eveniet quas. Possimus!
      orem sed voluptas repellat ex suscipit ratione iusto at quasi, delectus mollitia nostrum odit eos explicabo incidunt debitis cumque, esse quaerat provident obcaecati aperiam corporis voluptatibus. Ex?
      Totam aliquid illum, accusantium batae molestias delectus quia. Qui enim possimus quo nam dolorem alias voluptate obcaecati, accusamus repellat voluptas quisquam sit nihil consequatur ipsum est in vel id laborum.
      Fugiat itaque minus, ipsam eos voluptas, nemo in consectetur officia quasi quisquam, facere fuga placeat! Illo, ut voluptas fuga porro vero culpa. Consectetur id nisi odio alias sapiente perspiciatis deserunt!is illum itaque, inventore sequi quia labore quis atque velit distinctio eveniet minima tenetur possimus! Officia aspernatur quaerat consectetur. Earum distinctio illo consectetur inventore necessitatibus voluptatum sit repellendus!
      Ipsum qui suscipit voluptatem, odio laboriosam alias eaque nam ipsam quisquam magni natus veritatis aspernatur amet voluptatum? Numquam totam libero repellendus sint similique. Error doloremque vel iure iste atque possimus.
      Similique, non neque? Cumque obcaecati placeat veniam laboriosam rem? Qui, non libero incidunt dolorem inventore provident reiciendis sed officiis odit accusamus maiores quasi iste illo id enim aut? At, soluta.</div>
      <button onClick={()=>handleClick()}>點擊focus事件</button>
      <button onClick={()=>handleClickBlur()}>點擊Blur事件</button>
    </>
  )
}

export default Ref