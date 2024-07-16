import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import ResourceDetails from '../ ResourceDetails/ ResourceDetails';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { getResourceData, getHomeworld } from '../Utils/Api';

const ResourcePage = () => {
    const { id, resource } = useParams();
    const [resourceData, setResourceData] = useState(null);
    const [homeworld, setHomeworld] = useState(null);
    const [error, setError] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getResourceData(resource, id);
                setResourceData(response);

                if (response.homeworld) {
                    const homeworldData = await getHomeworld(response.homeworld);
                    setHomeworld(homeworldData);
                }
            } catch (error) {
                setError(true);
            }
        };

        fetchData();
    }, [id, resource]);

    return (

        <div>
            {error ? (
                <ErrorMessage />
            ) : (
                <div>
                    {resourceData && (
                        <div>
                            <ResourceDetails resource={resourceData} />
                            {homeworld && <p>Homeworld: {homeworld.name}</p>}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ResourcePage;