import { BrowserRouter, Routes, Route } from 'react-router-dom'
import List from './list.jsx'
import Form from './Form.jsx'
import UserList from './component/userList.jsx'
import AddUser from './component/userComponent/addUser.jsx'
import EditUser from './component/userComponent/editUser.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< UserList/>} />
          <Route path="/list" element={<List />} />
          <Route path="/form" element={<Form />} />
          <Route path="/user/add" element={<AddUser />} />
          <Route path="/user/edit/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App