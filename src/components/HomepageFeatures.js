import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const defaultImage = 'img/logo_metasystem.svg';

const FeatureList = [
  {
    title: 'Built-In Boilerplate',
    Img: 'img/features/TRANSPARENT_Built_in_BoilerPlate_trait_illust.png',
    description: (
      <>
        Start creating your system without wasting any time with configuring projects, libraries, and environments!
      </>
    ),
  },
  {
    title: 'Purpose Driven',
    Img: 'img/features/TRANSPARENT_Purpose_Driven_trait_illust.png',
    description: (
      <>
        With Meta-System you don't need to fight with the code, just develop your system guided by the problems you want to solve!
      </>
    ),
  }
];

function Feature({Img, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={Img}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}