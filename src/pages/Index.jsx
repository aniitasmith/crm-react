/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from 'react-router-dom'
import Client from '../components/Client';

export function loader() {
  const clients = [
    {
        id: 1, name: 'Juan', phone: 102013313, email: 'juan@juan.com', company: 'Codigo Con Juan'
    },
    {
        id: 2, name: 'Karen', phone: 138198313, email: 'karen@juan.com', company: 'Codigo Con Juan'
    },
    {
        id: 3, name: 'Josue', phone: 31983913, email: 'josue@juan.com', company: 'Codigo Con Juan'
    },
    {
        id: 4, name: 'Miguel', phone: 319381983, email: 'miguel@juan.com', company: 'Codigo Con Juan'
    },
    {
        id: 5, name: 'Pedro', phone: 1398198938, email: 'pedro@juan.com', company: 'Codigo Con Juan'
    },
];
  return clients
}

function Index() {

  const clients= useLoaderData()

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Clients</h1>
      <p className='mt-3'>Manage your clients</p>

      {clients.length ? (
        <table className='w-full bg-white shadow mt-5 table-auto'>
          <thead className='bg-blue-800 text-white'>
            <tr>
              <th className='p-2'>Client</th>
              <th className='p-2'>Contact</th>
              <th className='p-2'>Actions</th>
            </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <Client
                  client={client}
                  key={client.id}
                />
              ))}
            </tbody>

          
        </table>
      ) : (
        <p className='text-center mt-10'>No customers yet</p>
      )}
    </>
  )
}

export default Index
