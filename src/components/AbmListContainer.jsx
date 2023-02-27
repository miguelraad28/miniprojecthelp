import React from 'react';
import AbmList from './AbmList';

const AbmListContainer = () => {
    // Utiliza UseEffect con UseState para hacer la peticion con AXIOS a crudcrud, recibir toda la collection (ARRAY) de usuarios y enviarlos mapeados al AbmList
    return (
        <div className='abmListContainer'>
            {clients?.length > 0 ? clients.map(client => <AbmList key={client._id} client={client}/>) : <h1>No hay usuarios</h1>}
        </div>
    );
}

export default AbmListContainer;
