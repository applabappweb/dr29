import webglGlobe from '@lib/webglGlobe'
import styles from './Globe.module.css'

export default function Globe() {
  webglGlobe()
  return (
    <div className={styles.dFlex}>
      <div className={`homeHeroContainer jsWebglGlobeData ${styles.flexAuto}`}>
        <div className={`${styles.heightFull} jsWebglGlobe`}></div>
        <div className={styles.stars}>
          <div className={styles.signupBgStars}></div>
          <div className={styles.signupBgStars2}></div>
          <div className={styles.signupBgStars3}></div>
        </div>
      </div>
    </div>
  )
}
