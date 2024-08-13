import './AddUserCard.css'
import React, { useState, useReducer } from 'react'
import axios from 'axios'



const initialUserState = {
    email: "",
    phone: "",
    name: "",
    middleName: "",
    fLastName: "",
    sLastName: "",
    birthday: "",
    status: "PENDIENTE",
    assignedAnalyst: ""
};

// TODO: Convertir en enum al usar typescript
const ReducerActionType = {
    CHANGE_NAME: 1,
    CHANGE_MIDDLE_NAME: 2,
    CHANGE_F_LAST_NAME: 3,
    CHANGE_S_LAST_NAME: 4,
    CHANGE_BIRTHDAY: 5,
    CHANGE_PHONE: 6,
    CHANGE_MAIL: 7,
    CHANGE_STATUS: 8,
    CHANGE_ASSIGNED_ANALYST : 9

}

function reducer(state, action){
    switch(action.type){
        case ReducerActionType.CHANGE_NAME: {
            return {
                ...state,
                name: action.payload
            };
        }
        case ReducerActionType.CHANGE_MIDDLE_NAME: {
            return {
                ...state,
                middleName: action.payload
            }
        }
        case ReducerActionType.CHANGE_F_LAST_NAME: {
            return {
                ...state,
                fLastName: action.payload
            }
        }
        case ReducerActionType.CHANGE_S_LAST_NAME: {
            return {
                ...state,
                sLastName: action.payload
            }
        }
        case ReducerActionType.CHANGE_BIRTHDAY: {
            return {
                ...state,
                birthday: action.payload
            }
        }
        case ReducerActionType.CHANGE_PHONE: {
            return {
                ...state,
                phone: action.payload
            }
        }
        case ReducerActionType.CHANGE_MAIL: {
            return {
                ...state,
                email: action.payload
            }
        }
        case ReducerActionType.CHANGE_STATUS: {
            return {
                ...state,
                status: action.payload
            }
        }
        case ReducerActionType.CHANGE_ASSIGNED_ANALYST: {
            return {
                ...state,
                assignedAnalyst: action.payload
            }
        }
        
    }
}


export default function AddUserCard(){
    const [userState, dispatch] = useReducer(reducer, initialUserState) 


    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(userState)
        
        const userData = {
            email: userState.email,
            phone: userState.phone,
            name: userState.name,
            middleName: userState.middleName,
            fLastName: userState.fLastName,
            sLastName: userState.sLastName,
            birthday: userState.birthday,
            status: userState.status,
            assignedAnalyst: userState.assignedAnalyst,
        }


        //   const res = await fetch("http://127.0.0.1:5000/api/users", {
        //     body: JSON.stringify({
        //         email: userState.email,
        //         phone: userState.phone,
        //         name: userState.name,
        //         middleName: userState.middleName,
        //         fLastName: userState.fLastName,
        //         sLastName: userState.sLastName,
        //         birthday: userState.birthday,
        //         status: userState.status,
        //         assignedAnalyst: userState.assignedAnalyst,
        //     }),
        //     method: "POST",
        //   });
        //   const result = await res.json();
        //   console.log(result);
          // TODO: Manage State Save
        const res = await axios.post("http://127.0.0.1:5000/api/users", userData).then((response)=>{
            console.log(response.status, response.data)
        })
        


        window.location.reload();
        
      };

    return(
        <div className='max-w-xl border-2 p-4'>
            <h1 className='text-2xl font-semibold mb-4'>Añadir Usuario</h1>    
            <form className="w-full ">
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Nombre
                </label>
                <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-first-name"
                type="text"
                placeholder="Francisco"
                value={userState.name}
                onChange={(e)=> dispatch({
                    type: ReducerActionType.CHANGE_NAME,
                    payload: e.target.value
                })}
                />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Segundo Nombre
                </label>
                <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-middle-name"
                type="text"
                placeholder="Francisco Javier"
                value={userState.middleName}
                onChange={(e)=> dispatch({
                    type: ReducerActionType.CHANGE_MIDDLE_NAME,
                    payload: e.target.value
                })}
                />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Apellido Paterno
                </label>
                <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-f-last-name"
                type="text"
                placeholder="Ortiz"
                value={userState.fLastName}
                onChange={(e)=> dispatch({
                    type: ReducerActionType.CHANGE_F_LAST_NAME,
                    payload: e.target.value
                })}
                />
            </div>
            <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Apellido Materno
                </label>
                <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-s-last-name"
                type="text"
                placeholder="Estrada"
                value={userState.sLastName}
                onChange={(e)=> dispatch({
                    type: ReducerActionType.CHANGE_S_LAST_NAME,
                    payload: e.target.value
                })}
                />
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                mail
            </label>
            <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-mail"
            type="text"
            placeholder="correo@ejemplo.com"
            value={userState.email}
            onChange={(e)=> dispatch({
                type: ReducerActionType.CHANGE_MAIL,
                payload: e.target.value
            })}
            />
            </div>
            <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Telefono
            </label>
            <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-phone"
            type="text"
            placeholder="+528112345678"
            value={userState.phone}
            onChange={(e)=>dispatch({
                type: ReducerActionType.CHANGE_PHONE,
                payload: e.target.value
            })}
            />
            <p className="text-gray-600 text-xs italic">Incluye el codigo del país</p>
            </div>
            <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Fecha de Nacimiento
            </label>
            <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-birthday"
            type="text"
            placeholder="Formato: YYYY-MM-DD"
            value={userState.birthday}
            onChange={(e)=>dispatch({
                type: ReducerActionType.CHANGE_BIRTHDAY,
                payload: e.target.value
            })}
            />
            <p className="text-gray-600 text-xs italic">Formato: YYYY-MM-DD</p>
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
           
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-status">
                Estatus
            </label>
            <div className="relative">
                <select required className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-status"
                value={userState.status}
                onChange={(e)=>dispatch({
                    type: ReducerActionType.CHANGE_STATUS,
                    payload: e.target.value
                })}
                >  
                <option>PENDIENTE</option>
                <option>EN PROCESO</option>
                <option>COMPLETADO</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Analista Asignado
            </label>
            <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-assigned-analyst"
            type="text"
            value={userState.assignedAnalyst}
            onChange={(e)=> dispatch({
                type: ReducerActionType.CHANGE_ASSIGNED_ANALYST,
                payload: e.target.value
            })}
            />
            </div>
        </div>
        </form>
        <button className='bg-green-800 text-white uppercase text-sm font-semibold tracking-widest px-4 py-2'
        onClick={handleSubmit}
        >
            Añadir Usuario</button>

        </div>
        
    )
}