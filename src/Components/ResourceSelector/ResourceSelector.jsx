// ResourceSelector.js
import React, { useState } from 'react';

const ResourceSelector = ({ onResourceSelect, onResourceChange }) => {
    const [selectedResource, setSelectedResource] = useState('people');
    const [resourceId, setResourceId] = useState('');

    const handleResourceSelect = (event) => {
        event.preventDefault();
        setSelectedResource(event.target.value);
    };

    const handleResourceIdChange = (event) => {
        event.preventDefault();
        setResourceId(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onResourceSelect(selectedResource, resourceId);
        onResourceChange(selectedResource); // Actualizar el estado del recurso seleccionado
    };

    return (
        <div>
            <label htmlFor="searchFor">Search For: </label>
            <select defaultValue={selectedResource} onChange={handleResourceSelect}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
                <option value="films">Films</option>
                <option value="starships">Starchips</option>
                <option value="vehicles">Vehicles</option>
                <option value="species">Species</option>
            </select>
            <label htmlFor="id">id: </label>
            <input type="number" value={resourceId} onChange={handleResourceIdChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default ResourceSelector;