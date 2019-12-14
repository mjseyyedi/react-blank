import React, { useEffect } from 'react';

import styles from './styles.scss'

export function HomePage({fetchHomePage}) {

  useEffect(() =>{

     fetchHomePage()
  }, [])

  return (
    <article>
      hello world
    </article>
  );
}

export default HomePage;
