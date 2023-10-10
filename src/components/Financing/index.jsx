import React from 'react'
import './financing.css'
import financing from '../../assets/financing.jpg' 

const Financing = () => {
  return (
    <>
      <div id='plain-txt-page' className='udc'>
        <section>
          <h1>Financing</h1>
          <p>Nor-Cal Cycles specializes in financing under ALL circumstances</p>
          <p>We also have access to different lenders for longer finance terms.</p>
          <p>All Major Credit Cards Accepted.</p>
          <p>Contact us for more info - Let's have you riding today!</p>
          <a className='udc' href='https://www.700dealer.com/MultiStepQA/ef69608c5fda473dbdf8eb8cfdbaeb2d-2020114' target='_blank'>
            <span id='credit-app-txt'> Click Here for a Credit Application </span>
          </a>
        </section>
        <section id='img-section' className='udc'>
          <img id='financing-img' src={financing} alt="" />
        </section>
      </div>

    </>
  )
}


export default Financing
