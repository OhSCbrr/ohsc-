import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    icon: '⚡',
    description: (
      <>
        OhSC! is easy to use, syncing VRChat with devices for seamless, real-time haptic feedback and immersive experiences.
      </>
    ),
  },
  {
    title: 'No Setup Required',
    icon: '🚀',
    description: (
      <>
        works with any avatar—no modifications needed. Simply connect and sync with your devices instantly.
      </>
    ),
  },
  {
    title: 'Seamless OSC Compatibility',
    icon: '🔌',
    description: (
      <>
        Integrates flawlessly with other OSC apps, expanding your VRChat experience without extra configuration.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center text--size-10">
        <h1>{icon}</h1>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
