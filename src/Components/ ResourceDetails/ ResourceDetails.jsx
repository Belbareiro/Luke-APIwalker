import React from 'react';


const ResourceDetails = ({ resource }) => {
    if (!resource) {
        return null;
    }
    return (
        <div>
            <h2>{resource.name}</h2>
            {resource.height && resource.mass && resource.hair_color && resource.skin_color && (
                <div>
                    <p>Height: {resource.height}</p>
                    <p>Mass: {resource.mass}</p>
                    <p>Hair Color: {resource.hair_color}</p>
                    <p>Skin Color: {resource.skin_color}</p>
                </div>
            )}
            {resource.climate && resource.gravity && resource.terrain && (
                <div>
                    <p>Climate: {resource.climate}</p>
                    <p>Gravity: {resource.gravity}</p>
                    <p>Terrain: {resource.terrain}</p>
                </div>
            )}
            {resource.title && resource.episode_id && resource.director && (
                <div>
                    <p>Title: {resource.title}</p>
                    <p>Episode: {resource.episode_id}</p>
                    <p>Director: {resource.director}</p>
                </div>
            )}
            {resource.model && resource.manufacturer && resource.length && (
                <div>
                    <p>Model: {resource.model}</p>
                    <p>Manufacturer: {resource.manufacturer}</p>
                    <p>Length: {resource.length}</p>
                </div>
            )}
            {resource.model && resource.manufacturer && resource.length && (
                <div>
                    <p>Model: {resource.model}</p>
                    <p>Manufacturer: {resource.manufacturer}</p>
                    <p>Length: {resource.length}</p>
                </div>
            )}
            {resource.name && resource.classification && resource.designation && (
                <div>
                    <p>Name: {resource.name}</p>
                    <p>Classification: {resource.classification}</p>
                    <p>Designation: {resource.designation}</p>
                </div>
            )}
        </div>
    );
};
export default ResourceDetails;