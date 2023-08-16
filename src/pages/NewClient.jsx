/* eslint-disable no-control-regex */
/* eslint-disable no-useless-escape */
/* eslint-disable react-refresh/only-export-components */
import { useNavigate, Form, useActionData, redirect } from 'react-router-dom'
import Formulario from '../components/Formulario'
import Error from '../components/Error'
import { addClient } from '../data/clients'

export async function action({request}) {
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)
  const email = formData.get('email')

  //Validation
  const errors = []
  if(Object.values(datos).includes('')) {
    errors.push('All fields are required')
  }
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  if(!regex.test(email)){
    errors.push('The email is not valid')
  }

  //Return data if there are errors
  if(Object.keys(errors).length) {
    return errors
  }  

  await addClient(datos)

  return redirect('/')
}

function NewClient() {

  const errors = useActionData()
  const navigate = useNavigate()
  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>New Client</h1>
      <p className='mt-3'>Fill in all the fields to register a new client</p>
      <div className='flex justify-end'>
        <button 
          className='bg-blue-800 text-white px-3 py-1 font-bold uppercase'
          onClick={() => navigate(-1)}
          >
          return
        </button>
      </div>
      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>

        {errors?.length && errors.map( (error, i) => <Error key={i}>{error}</Error>)}
        <Form
          method='POST'
          noValidate
        >
          <Formulario/>
          <input
            type='submit'
            className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg'
            value='register client'
          />
        </Form>
      </div>

    </>
  )
}

export default NewClient
