import AddUserCard from './components/AddUserCard/AddUserCard';
import Card from './components/Card/Card';
import React from 'react';

function App() {
  const [users, setUsers] = React.useState(null);

  React.useEffect(()=>{
    fetch(`http://127.0.0.1:5000/api/users`)
    .then(res => res.json())
    .then(data=>setUsers(data))
  },[])


  return (
    <div className='p-4'>
        <h1 className='font-bold w-full text-4xl mb-6'>Dashboard</h1>
        <div className='flex flex-col gap-4 w-full'>
        {users && users.map((currentUser)=> {
          return <Card data={currentUser} key={currentUser.id} className=''></Card>
        }
        )}

        </div>

        <AddUserCard/>
    </div>
  );
}

export default App;
