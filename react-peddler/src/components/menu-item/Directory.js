import React, { useState } from 'react';
import MenuItem from '../menu-item/MenuItem'
import './Directory.scss';

const Directory = props => {

  const [sections, setSections] = useState([
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: ''
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: ''
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: ''
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: ''
    }
  ])

  return (

    <div className='directory-menu'>
      {
        sections.map(({imageUrl, title, id, size, linkUrl}) => <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
        //sections.map(({id, ...props}) => <MenuItem key={id} {...props}}/>
        )
      }
    </div>

  );
};

export default Directory;