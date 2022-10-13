// skeleton Loading card
import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCard = () =>{
  return (
    <section>
      {/* <h2 className="section-title">
        <Skeleton duration={1} height={30} width={300} />
      </h2> */}

      <ul className="list">
        {Array(9)
          .fill()
          .map((item, index) => (
            <>
              <li className="card" key={index}>
                <div className="card-image">
                  <Skeleton count={3.5} height={40} width={500} circle={false} />
                </div>
                <h4 className="card-title">
                  <Skeleton height={30} width={`80%`} />
                </h4>
                <div>
                  <div className="card-description__left">
                    <p>
                      <Skeleton height={20} width={`60%`} />
                    </p>
                    <span>
                      <Skeleton height={20} width={`60%`} />
                    </span>
                  </div>
                  <div>
                    <Skeleton height={10} width={`10%`} />
                  </div>
                </div>
              </li>
              <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <p>
                  <Skeleton count={3} />
                </p>
              </SkeletonTheme>
            </>
          ))}
      </ul>
      
    </section>
  )
}

export default SkeletonCard