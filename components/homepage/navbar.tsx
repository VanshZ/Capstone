"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import styles from "./index.module.css";
import Link from "next/link";

const MacBookAir2: NextPage = () => {
  const router = useRouter();

  const onHOMETextClick = useCallback(() => {
    router.push("/components/homepage/navbar.tsx");
  }, [router]);

  const onSETTINGSTextClick = useCallback(() => {
    router.push("/components/settingspage/settingspage.tsx");
  }, [router]);

  const onPORTFOLIOTextClick = useCallback(() => {
    router.push("/portfoliopage.tsx");
  }, [router]);

  const onDASHBOARDTextClick = useCallback(() => {
    router.push("/dashboard.tsx");
  }, [router]);

  return (
    <div className={styles.macbookAir2}>

      {/* Adjusted JSX for centered and linked buttons */}
      <Link href="/components/homepage/navbar.tsx">
          className={styles.home} onClick={onHOMETextClick}>
          HOME
      </Link>
      <Link href="/components/settingspage/settingspage.tsx">
          className={styles.settings} onClick={onSETTINGSTextClick}>
          SETTINGS
      </Link>
      <Link href="/portfoliopage.tsx">
        className={styles.portfolio} onClick={onPORTFOLIOTextClick}>
          PORTFOLIO
      </Link>
      <div className={styles.contactUs}>CONTACT US</div>
      <Link href="/dashboard.tsx">
          className={styles.dashboard} onClick={onDASHBOARDTextClick}>
          DASHBOARD
      </Link>
    </div>
  );
};

export default MacBookAir2;
