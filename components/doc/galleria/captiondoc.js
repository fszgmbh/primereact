import React, { useState, useEffect } from 'react';
import { Galleria } from '../../lib/galleria/Galleria';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';
import { PhotoService } from '../../../service/PhotoService';

export function CaptionDoc(props) {
    const [images, setImages] = useState(null);

    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then((data) => setImages(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    };

    const caption = (item) => {
        return (
            <React.Fragment>
                <div className="text-xl mb-2 font-bold">{item.title}</div>
                <p className="text-white">{item.alt}</p>
            </React.Fragment>
        );
    };

    const code = {
        basic: `
<Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} 
    item={itemTemplate} thumbnail={thumbnailTemplate} caption={caption} style={{ maxWidth: '640px' }} />
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function CaptionDemo() {
    const [images, setImages] = useState(null);
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    const caption = (item) => {
        return (
            <React.Fragment>
                <div className="text-xl mb-2 font-bold">{item.title}</div>
                <p className="text-white">{item.alt}</p>
            </React.Fragment>
        );
    }

    return (
        <div className="card">
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} 
                item={itemTemplate} thumbnail={thumbnailTemplate} caption={caption} style={{ maxWidth: '640px' }} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { Galleria, GalleriaResponsiveOptions } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function CaptionDoc() {
    const [images, setImages] = useState(null);
    const responsiveOptions: GalleriaResponsiveOptions[] = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    const caption = (item: any) => {
        return (
            <React.Fragment>
                <div className="text-xl mb-2 font-bold">{item.title}</div>
                <p className="text-white">{item.alt}</p>
            </React.Fragment>
        );
    }

    return (
        <div className="card">
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} 
                item={itemTemplate} thumbnail={thumbnailTemplate} caption={caption} style={{ maxWidth: '640px' }} />
        </div>
    )
}
        `,
        data: `
/* PhotoService */
{
    itemImageSrc: 'https://primereact.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primereact.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Description of an image is specified with the <i>caption</i> property that takes the displayed object and returns content.
                </p>
            </DocSectionText>
            <div className="card">
                <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} item={itemTemplate} thumbnail={thumbnailTemplate} caption={caption} style={{ maxWidth: '640px' }} />
            </div>
            <DocSectionCode code={code} service={['PhotoService']} />
        </>
    );
}
