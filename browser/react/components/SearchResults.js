import React from 'react';
import {Link} from 'react-router';

export default function (props) {

  const pages = props.pages;

  return (
    <div>
      <h3 className="col-xs-10 col-xs-offset-1">Pages</h3>
      <div className="row">
        {
          pages && pages.map(page => (
            <div className="col-xs-10 col-xs-offset-1" key={ page.id }>
              <Link className="thumbnail" to={`${page.uri}`}>
                <div className="caption">
                  <p style={{fontSize: '1.6em'}}>
                    <span>{ page.title }</span>
                  </p>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
};