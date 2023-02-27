import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const AbmDetail = () => {
    const { cid } = useParams()
º   // Con el cid de useParams, hacer una solicitud get a crudcrud para obtener todos los datos del usuario para poder luego modificarlo en el form de abajo.
    //     const res = await axios.get("")
    // }
    // useEffect(() => {
    //     getClientDetail()
    // }, [cid]);
    // _id: "3",
    // nombre: "Alicia",
    // apellido: "De la fuente",
    // rut: "122523431277",
    // tipo: "cfinal",
    // telefono: "1889996655",
    // activo: true
    const updateClient = async () => {

    }
    const deleteClient = async () => {

    }
    const handleOnChange = (e) => {
        console.log(client)
        setClient({
            ...client,
            [e.target.value]: e.target.value
        })
    }
    return (
        <div>
            {client ? <form>
                <label>Nombre</label>
                <input
                    name="nombre"
                    onChange={handleOnChange}
                    value={client.nombre}
                    type="text" />
                <label>Apellido</label>
                <input
                    name="apellido"
                    onChange={handleOnChange}
                    value={client.apellido}
                    type="text" />
                <label>RUT</label>
                <input
                    name="rut"
                    onChange={handleOnChange}
                    value={client.rut}
                    type="text" />
                <label>Tipo</label>
                <input
                    name="tipo"
                    onChange={handleOnChange}
                    value={client.tipo}
                    type="text" />
                <label>Telefono</label>
                <input
                    name="telefono"
                    onChange={handleOnChange}
                    value={client.telefono}
                    type="text" />
                <label>Cliente activo</label>
                <input
                    name="activo"
                    onChange={handleOnChange}
                    value={client.activo ? "Cliente activo" : "Cliente inactivo"}
                    type="text" />
                <button className='greenButton' onClick={updateClient}>
                    Update
                </button>
                <button className='redButton' onClick={deleteClient}>
                    Delete
                </button>
            </form> : <h1>Cliente no encontrado</h1>}
        </div>
    );
}

export default AbmDetail;
