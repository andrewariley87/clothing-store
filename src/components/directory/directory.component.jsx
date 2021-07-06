import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import sections from '../../data/homepage-section-data';

class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections
    }
  }
  render() { 
    return (
      <div className='directory-menu'>
       {this.state.sections.map(({title, imageUrl, size, id, linkUrl}) => (
         <MenuItem
           imageUrl={imageUrl}
           key={id}
           linkUrl={linkUrl}
           size={size}
           title={title}
         >
         </MenuItem>
       ))}
      </div>
    );
  }
}
 
export default Directory;