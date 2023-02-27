import React from 'react';
import { Link } from 'react-router-dom';

const AbmList = ({ client }) => {
    const deleteUser = () => {
        // peticion AXIOS.delete a crudcrud enviado el _id para eliminar el usuario
    }
    return (
        <div className='abmList'>
            <h2>
                {client.nombre}
            </h2>
            <p>
                {client.tipo}
            </p>
            <p>
                {client.activo}
            </p>
            <Link to={`/${client._id}`}><button className='grayButton'>
                Select
            </button></Link>
            <button className='redButton' onClick={deleteUser}>
                Delete
            </button>
        </div>
    );
}

export default AbmList;
