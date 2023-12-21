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
      {/* ... (your existing code) ... */}

      {/* Adjusted JSX for centered and linked buttons */}
      <Link href="/components/homepage/navbar.tsx">
        <a className={styles.home} onClick={onHOMETextClick}>
          HOME
        </a>
      </Link>
      <Link href="/components/settingspage/settingspage.tsx">
        <a className={styles.settings} onClick={onSETTINGSTextClick}>
          SETTINGS
        </a>
      </Link>
      <Link href="/portfoliopage.tsx">
        <a className={styles.portfolio} onClick={onPORTFOLIOTextClick}>
          PORTFOLIO
        </a>
      </Link>
      <div className={styles.contactUs}>CONTACT US</div>
      <Link href="/dashboard.tsx">
        <a className={styles.dashboard} onClick={onDASHBOARDTextClick}>
          DASHBOARD
        </a>
      </Link>
      {/* ... (your existing code) ... */}
    </div>
  );
};

export default MacBookAir2;
