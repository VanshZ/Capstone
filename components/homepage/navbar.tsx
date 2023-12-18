"use client"
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import styles from "./index.module.css";
import Link from "next/link";


const MacBookAir2: NextPage = () => {
  const router = useRouter();

  const onHOMETextClick = useCallback(() => {
    // Navigating to "Page2"
    router.push("components/homepage/navbar.tsx");
  }, [router]);
  
  const onSETTINGSTextClick = useCallback(() => {
    // Navigating to "Page5"
    router.push("components/settingspage");
  }, [router]);
  
  const onPORTFOLIOTextClick = useCallback(() => {
    // Navigating to the home page ("/")
    router.push("/portfoliopage");
  }, [router]);
  
  const onDASHBOARDTextClick = useCallback(() => {
    // Navigating to "Page7"
    router.push("/Page7");
  }, [router]);

  return (
    
    <div className={styles.macbookAir2}>
      <img className={styles.image3Icon} alt="" src="https://s3-alpha-sig.figma.com/img/12bd/6f81/d652adc587fec1f35525b0d994ede162?Expires=1704067200&Signature=l2ScZ8kOEY4f2f7b3OXCPWJr0pR2aYA0YlwMvaPMNnO3ZeBFcO6LdbFqp1g1k7ErAdJbah2av5o-c80QQG9YtNKeSr~9sdLCIOAYuhnB5zIB4dq4v5gc3qJx7RBTAeXonVd8cOvKupZaTk2uS5fgzDPNpbD5wPIHmj~rX6a6YmOsLI4RrFs9S1TM-fKyOpoSs0Aj6tU7GRHgovftACP0sgOUs3AiC8kTPQGJXp4b4f38mW-M35b7sg53iiCGaypvsRfDweaT6k4o93Yh9C2NpOiz8kfg3aLQ4BAZPWiMz4AyGDsxF6qWQCdJ7kldD3xUII-VvmZz0KS1bAjSFmGLBA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
      <div className={styles.macbookAir2Child} />
      <img
        className={styles.macbookAir2Item}
        alt=""
        src="/rectangle-9@2x.png"
      />
      <b className={styles.findTheBest2}>Find the Best Places to Invest</b>
      <b className={styles.findTheBest2}>Find the Best Places to Invest</b>
      <img className={styles.macbookAir2Inner} alt="" src="/arrow-1@2x.png" />
      <div className={styles.enterAnAddress1}>
        Enter an Address, City, or Zip Code
      </div>
      <div className={styles.rectangleDiv} />
      <img className={styles.ifs2Icon} alt="" src="https://s3-alpha-sig.figma.com/img/ef80/f3ba/2ed43e54ac903ea502b96e1512f774ad?Expires=1704067200&Signature=o0yeMsmR9XqgO-g5hmHaG~5Cnr8V1RUIUsnEN4sw1M~KMZ8~VkyZWud6oVX8WNqAJ~hkyrAclLfEHz7oZkCbURIsPZp1dqCSNFtcFWe3wFwFV0opBbQqPQ-UnURqh0Vu3o3s4aX8EpjQWIMyT290oZoQ-C98KOoXurIOOvY70cJ2wEyh-rUE2w2vi8XhVWrd95trQUPuE-vVtZpz1fHwENRQELiD3Y6yIKG2MZ4MGOO-wzLFoN2uMnWyUScRtG3dWm~zl6tMvw2-HiSMy~0BCnVRHjO1wAaQkTLt~evL6HHUghZTDlUDZGsx9HzkL0keyNPaI4eHsa5vu9sE2AO9Vg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
      <div className={styles.home} onClick={onHOMETextClick}>
        HOME
      </div>
      <div className={styles.settings} onClick={onSETTINGSTextClick}>
        SETTINGS
      </div>
      <div className={styles.portfolio} onClick={onPORTFOLIOTextClick}>
        PORTFOLIO
      </div>
      <div className={styles.contactUs}>CONTACT US</div>
      <div className={styles.dashboard} onClick={onDASHBOARDTextClick}>
        DASHBOARD
      </div>
      <div className={styles.lineDiv} />
    </div>
    
  );
};

export default MacBookAir2;
