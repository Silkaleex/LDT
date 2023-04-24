import React,{useState,useEffect} from 'react'
import axios from 'axios'


const DelUs = () => {
  const token = localStorage.getItem("token")
  const [usuarios,setUsuarios] = useState([])

const getUsers = async()=>{
  const response = await axios.get("http://localhost:5000/api/users",{
    headers:{
      Authorization:token
    }
  })
  console.log(response.data.Users)
  setUsuarios(response.data.Users)
}

useEffect(()=>{
  getUsers()
},[])

// const deleteUser = async(idUser)=>{
//     localStorage.setItem("idUsuario",idUser)
//     let opcion = window.confirm("¿Deseas eliminar al usuario?")
//     if(opcion == true){
//         const response = await axios.delete(`http://localhost:5000/api/user/${idUser}`,{
//             headers:{
//               Authorization:token
//             }
//           })
//           console.log(response)
//     }
// }

  return (
    <div>
        {
            usuarios.map((user)=>{
                return(
                    <div key={user._id}>
                        <h3>{user.name}</h3>
                        <h3>{user.surname}</h3>
                        <h3>{user.email}</h3>
                        {/* <button onClick={()=>{deleteUser(user._id)}}></button> */}
                    </div>
                )
            })
        }
    </div>
  )
}

export default DelUs