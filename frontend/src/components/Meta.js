import React from 'react';
import { Helmet } from 'react-helmet';

function Meta({ title, description, keywords }) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description}></meta>
            <meta name='keywords' content={keywords}></meta>
        </Helmet>
    );
}

Meta.defaultProps = {
    title: 'Welcome To Shop',
    keywords: 'electronics, buy electronics',
    description: 'We sell the best products for cheap',
};

export default Meta;
