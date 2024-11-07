'use client'
import { submitAction } from '@/actions/form'
import { useRef } from 'react'

const page = () => {
  let ref = useRef()
  // normal code
  // const handleClick = async () =>{
  //   let data = {
  //     name:"uvesh",
  //     role:"Programmer"
  //   }

  //   let a  = await fetch("/api/add", {
  //     method: "POST",
  //     headers: { 
  //       "Content-Type":"application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })

  //   let res = await a.json()
  //   console.log(res);
    
  // }
  return (
    <div className='w-2/3 mx-auto my-12'>
      <form ref={ref} action={(e) => {submitAction(e); ref.current.reset()}}>
        <div>
          <label htmlFor="name">Name :</label>
          <input name='name' id='name' className='text-white' type='text' />
        </div>
        <div>
          <label htmlFor="add">Address :</label>
          <input name='add' id='add' className='text-black' type='text' />
        </div>
        <div>
          <button className='border border-black p-2'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default page
