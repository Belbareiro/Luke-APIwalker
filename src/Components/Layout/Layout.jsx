import React from 'react';
import ResourceSelector from '../ResourceSelector/ResourceSelector';

const Layout = ({ children }) => {
    return (
        <div>
            <ResourceSelector onResourceSelect={(resource, id) => {
                window.location.href = `/${resource}/${id}`;
            }} />
            {children}
        </div>
    );
};

export default Layout;