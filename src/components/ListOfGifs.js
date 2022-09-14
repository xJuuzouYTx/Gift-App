import React, { useState, useEffect } from 'react';

import Gift from './Gift';

const ListOfGifs = ({ gifs }) => {

    return (
        <div>
            {
                gifs.map(({ id, title, url }) => (
                    <Gift
                        title={title}
                        id={id}
                        url={url}
                        key={id}
                    />
                ))
            }
        </div>
    )
}

export default ListOfGifs