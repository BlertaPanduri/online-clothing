import React from 'react';
import './collection-preview.scss';
import CollectionItem from '../collection-item/collection-item';
/** Me na qit 4 artikujt ne ni rresht */
const CollectionPreview =  ({title, items}) => (
    <div className ="collection-preview">
        <h1 className ="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items
                .filter((item, id) => id < 4)
                .map(item => (
                <CollectionItem key={item.id} item={item}/>      
                      ))}
        </div>
    </div>

)

export default CollectionPreview;