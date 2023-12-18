import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const MacBookAir5: NextPage = () => {
  const router = useRouter();

  const onHOMETextClick = useCallback(() => {
    // Please sync "MacBook Air - 2" to the project
  }, []);

  const onSETTINGSTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onPORTFOLIOTextClick = useCallback(() => {
    // Please sync "MacBook Air - 3" to the project
  }, []);

  const onDASHBOARDTextClick = useCallback(() => {
    // Please sync "MacBook Air - 7" to the project
  }, []);

  return (
    <div className={styles.macbookAir5}>
      <b className={styles.accountSettings}>Account settings</b>
      <div className={styles.macbookAir5Child} />
      <div className={styles.macbookAir5Item} />
      <img className={styles.macbookAir5Inner} alt="" src="/line-10@2x.png" />
      <img className={styles.lineIcon} alt="" src="/line-11@2x.png" />
      <b className={styles.personal}>Personal</b>
      <b className={styles.company}>Company</b>
      <b className={styles.profile}>Profile</b>
      <b className={styles.account}>Account</b>
      <b className={styles.data}>Data</b>
      <b className={styles.companyDetails}>Company Details</b>
      <b className={styles.teamMembers}>Team Members</b>
      <b className={styles.formatSettings}>Format Settings</b>
      <b className={styles.jobBoards}>Job Boards</b>
      <b className={styles.positions}>Positions</b>
      <b className={styles.rejectionReasons}>Rejection Reasons</b>
      <b className={styles.automatedMessages}>Automated messages</b>
      <img className={styles.image16Icon} alt="" src="/image-16@2x.png" />
      <img className={styles.image18Icon} alt="" src="/image-18@2x.png" />
      <img className={styles.image19Icon} alt="" src="/image-19@2x.png" />
      <img className={styles.image20Icon} alt="" src="/image-20@2x.png" />
      <img className={styles.image21Icon} alt="" src="/image-21@2x.png" />
      <img className={styles.image24Icon} alt="" src="/image-24@2x.png" />
      <div className={styles.text}>
        <p className={styles.blankLine}>&nbsp;</p>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.macbookAir5Child1} />
      <div className={styles.ight}>Ight</div>
      <div className={styles.macbookAir5Child2} />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-30@2x.png" />
      <div className={styles.zsofiaGordon}>Zsofia Gordon</div>
      <div className={styles.frameDiv} />
      <div className={styles.roiproUser}>ROIPro User</div>
      <div className={styles.macbookAir5Child3} />
      <div className={styles.accountName}>Account name</div>
      <div className={styles.email}>Email</div>
      <div className={styles.phoneNumber}>Phone Number</div>
      <img
        className={styles.macbookAir5Child4}
        alt=""
        src="/rectangle-36@2x.png"
      />
      <div className={styles.div}>201-445-3129</div>
      <div className={styles.zsovonbergenorg}>zsovon@bergen.org</div>
      <div className={styles.macbookAir5Child5} />
      <div className={styles.macbookAir5Child6} />
      <div className={styles.macbookAir5Child7} />
      <div className={styles.edit}>Edit</div>
      <div className={styles.edit1}>Edit</div>
      <div className={styles.edit2}>Edit</div>
      <div className={styles.zsofiaGordon1}>Zsofia Gordon</div>
      <div className={styles.macbookAir5Child8} />
      <img className={styles.ifs3Icon} alt="" src="/ifs-3@2x.png" />
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

export default MacBookAir5;
