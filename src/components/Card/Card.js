import './Card.css'
import React from 'react'

export default function Card(data, className=''){
    const user = data.data
    const cardInfo = user.cardInfo
    const expirationDate = new Date(cardInfo.expiration)
    return <div className={`${className} p-8 border-2 bg-gray-50 border-gray-300 rounded-md flex flex-col w-3/4 md:w-2/3 shadow-md`}>
            <div className='mb-4'>
                <div>
                    <p className="font-bold text-3xl text-blue-950">{user.name} {user.middleName} {user.fLastName} {user.sLastName}</p>
                    <p className="text-sm uppercase font-semibold opacity-50 tracking-widest">ID: {user.id}</p>
                </div>
            </div>
            <div className="flex flex-row justify-between gap-4">
                <div className='flex flex-col gap-4'>
                    <div>
                        <p className="text-sm uppercase font-semibold opacity-50 tracking-widest">Mail</p>
                        <p>{user.email}</p>
                    </div>
                    <div>
                        <p className="text-sm uppercase font-semibold opacity-50 tracking-widest">Fecha de Nacimiento</p>
                        <p>{user.birthday}</p>
                    </div>
                    <div>
                        <p className="text-sm uppercase font-semibold opacity-50 tracking-widest">Teléfono</p>
                        <p>{user.phone}</p>
                    </div>
                    <div>
                        <p className="text-sm uppercase font-semibold opacity-50 tracking-widest">Analista Asignado</p>
                        <p>{user.assignedAnalyst}</p>
                    </div>
                </div>
                <div className='hidden md:flex flex-col gap-4 bg-gray-200 p-8 rounded-lg mb-4'>
                    <div>
                        <p className="text-sm uppercase font-semibold opacity-30 tracking-widest">Full Name</p>
                        <p>{user.name}</p>
                    </div>
                    <div>
                        <p className="text-sm uppercase font-semibold opacity-30 tracking-widest">Card Number</p>
                        <p>{`${cardInfo.number}`}</p>
                    </div>
                    <div className='flex flex-row justify-between' >
                        <div>
                            <p className="text-sm uppercase font-semibold opacity-30 tracking-widest">CVV</p>
                            <p>{cardInfo.cvv}</p>
                        </div>
                        <div>
                            <p className="text-sm uppercase font-semibold opacity-30 tracking-widest">EXP</p>
                            <p>{expirationDate.getMonth()<10? '0':''}{expirationDate.getMonth()}/{expirationDate.getFullYear().toString().slice(2)}</p>
                        </div>
                        <div>
                            <p className="text-sm uppercase font-semibold opacity-30 tracking-widest">PIN</p>
                            <p>{cardInfo.pin}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row-reverse'>
                <button className='uppercase tracking-wide opacity-75 font-bold'>Editar</button>
            </div>
        </div>
}

