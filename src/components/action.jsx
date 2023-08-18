import { redirect } from 'react-router-dom';
import { deleteClient } from '../data/clients';


export async function action({ params }) {
  await deleteClient(params.clientId);
  return redirect('/');
}
