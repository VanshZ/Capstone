// pages/NewPage.tsx
import Link from "next/link";
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const NewPage: NextPage = () => {
    const router = useRouter();
  
    const onAnalyzeText1Click = useCallback(() => {
      // Navigating to "Page4"
      router.push("/Page4");
    }, [router]);
    
    const onHOMETextClick = useCallback(() => {
      // Navigating to "Page2"
      router.push("/Page2");
    }, [router]);
    
    const onSETTINGSTextClick = useCallback(() => {
      // Navigating to "Page5"
      router.push("components/settingspage");
    }, [router]);
    
    const onPORTFOLIOTextClick = useCallback(() => {
      // Navigating to the home page ("/")
      router.push("/");
    }, [router]);
    
    const onDASHBOARDTextClick = useCallback(() => {
      // Navigating to "Page7"
      router.push("/Page7");
    }, [router]);

  return (
    <div className={styles.macbookAir3}>
      <div className={styles.hackensackNjReal}>
        Hackensack, NJ Real Estate Investment Properties
      </div>
      <div className={styles.div}>20</div>
      <div className={styles.macbookAir3Child} />
      <div className={styles.macbookAir3Item} />
      <b className={styles.b}>3</b>
      <div className={styles.macbookAir3Inner} />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-14@2x.png" />
      <div className={styles.rectangleDiv} />
      <div className={styles.southAveWestContainer}>
        <p className={styles.p}>$ 450,000</p>
        <p className={styles.p}>&nbsp;</p>
        <p className={styles.p}>34 South Ave West lake, OH 82039</p>
        <p className={styles.p}>&nbsp;</p>
        <p className={styles.p}>&nbsp;</p>
        <p className={styles.p}>&nbsp;</p>
      </div>
      <img className={styles.image5Icon} alt="" src="https://s3-alpha-sig.figma.com/img/5e13/34e3/643840908cd966aabc968d8c21bec752?Expires=1704067200&Signature=TVDYeQltBDjPUCq44wnMGshVp3uw0tr0Jyqk3uiNiSBy1dIxlVP9C7kIQkjlVDGqgoe9CtBJCZwBvDUBgCREdAeuSuhnUg4n-BOxCVQxfoJweoZ5RPB67k1Oxch7dx0pbO7APvQSRQGsWNX~H0pK251I0zTF89dWY3Itc8bAtVCHODklWVIbYMnliO2fEPFU4Nm8tnFTlVnzimwjnDku3qzP4peDTBK5eQa5rHktbKeDEgOLgzHKLFOBxnHNuLVBA~ZP2fmffoNiphmZPnXr3ANHTKNwItWGPl053L5lHPgZzEuDW3eeNT1UyZU1nnygotnZbBov1GTXkF5JK-ZCJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
      <img className={styles.image4Icon} alt="" src="https://s3-alpha-sig.figma.com/img/6fe4/4df2/3b23711d39f8681362ee9e02e6f42b3e?Expires=1704067200&Signature=K1ePdTdl4tIg4Yvhqpx7nr7ED-O8Xn3eStqfSiWea~r3aki06uycFWXUYmvLCTEVM3TdEqx8rGTwnO~iKMCGjRXE0KDJj1oCDXJYe-q3dYv36tcR6IMnKx5Whzmya~ItE3Fdx~3YaZIg5aFf1QiL8zFH4zLaqKY4Wjm-nl60Q5v-MgK50J7XqZxzocWD-j9YJyrzahUJUzily39U9dcUi9IPEt3nPQTDXdfAQNCYRORYiQIOiV1fKHWa9VTjag6sFveCi2NmSPVfaCeD8ZApGBsu7hV8MdDpjo~ZFLCAd~Hf7Rrejms82YuyViSBQgo66XAMJXSu2V2lTVdoEF36-g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
      <div className={styles.propertyLookup}>Property lookup</div>
      <img className={styles.image6Icon} alt="" src="https://s3-alpha-sig.figma.com/img/d924/37ea/28e45982b80ab17cc5eb6aae21ba2b63?Expires=1704067200&Signature=j7IfkLPZB13J40gdB1YwS6JarurEr0frmu4F66m4d6QbZsC9yDIOdHyp2ap4rVjkFSY9b75pno-WUGSJbZgSLpIPyNq70FyrwbsHNW0rEBaNM~6C1opMXNV0swU-WL5D7CIheqeFY1BD-9SfPOgTXKsJRONqjjxla2jG~3e4crlXdcj34x3xBJqvISeBzZ0qg6SK4imtx~XH8Tm9LOZg5rjmOK2y9STq86-Cp3H627JbGb4S09Lbwzw3WO9SkZ~OC0-vaAwleAhaeahyGCxhcn5qMiQamS0DqbNNtJ5Z45UOPrfO5-41hzkdil99oaTGHP8yVQxuEjzb~lKTIeUeVA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
      <img className={styles.image7Icon} alt="" src="/image-6@2x.png" />
      <div className={styles.macbookAir3Child1} />
      <div className={styles.newListing}>New Listing</div>
      <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
      <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
      <div className={styles.macbookAir3Child2} />
      <div className={styles.newListing1}>New Listing</div>
      <div className={styles.macbookAir3Child3} />
      <div className={styles.analyze}>Analyze</div>
      <div className={styles.div1}>
        <p className={styles.p}>$ 795,000</p>
        <p className={styles.p}>&nbsp;</p>
        <p className={styles.p}>&nbsp;</p>
      </div>
      <div className={styles.macbookAir3Child4} />
      <div className={styles.analyze1} onClick={onAnalyzeText1Click}>
        Analyze
      </div>
      <div className={styles.memphis}>Memphis</div>
      <div className={styles.washingtonStreetClarksville}>
        95 Washington Street Clarksville, TN 37040
      </div>
      <div className={styles.bayVillage}>Bay Village</div>
      <img className={styles.image10Icon} alt="" src="https://s3-alpha-sig.figma.com/img/ef80/f3ba/2ed43e54ac903ea502b96e1512f774ad?Expires=1704067200&Signature=o0yeMsmR9XqgO-g5hmHaG~5Cnr8V1RUIUsnEN4sw1M~KMZ8~VkyZWud6oVX8WNqAJ~hkyrAclLfEHz7oZkCbURIsPZp1dqCSNFtcFWe3wFwFV0opBbQqPQ-UnURqh0Vu3o3s4aX8EpjQWIMyT290oZoQ-C98KOoXurIOOvY70cJ2wEyh-rUE2w2vi8XhVWrd95trQUPuE-vVtZpz1fHwENRQELiD3Y6yIKG2MZ4MGOO-wzLFoN2uMnWyUScRtG3dWm~zl6tMvw2-HiSMy~0BCnVRHjO1wAaQkTLt~evL6HHUghZTDlUDZGsx9HzkL0keyNPaI4eHsa5vu9sE2AO9Vg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
      <b className={styles.b1}>5</b>
      <img className={styles.image11Icon} alt="" src="https://s3-alpha-sig.figma.com/img/563c/4a11/f07d328ec0f7537cd4f4a5aa85bbfe5a?Expires=1704067200&Signature=pIQmvpW7ZbBncCinftbEZoAE06u06XiYL1NACBHj6X4XB~kRze6RfHcXHdXETp~w9nlOwVHGGD-~00wZYPKe346DjM2zQaUihwv5aw8cEYLzhENp4-~O~3rEN~NXucXYwMG-4eS9w~rrDE~YlztQzEqwxT4A-HWYMowXZo7WOczGYdwG2TrXGytQ3FPOW2JqOcPoi8wzxFOZclI07pvGqAqNmq0CT7ng1incbda4FYfwFE2OHNTJwaX3FIWefW5KeqTdmsp8BOaSa0ugm6QpXm2j37rssXp~NSEgWjxojLcE3WIajRtpwqjp5VFBXetzNkofGvvNufLJHVVioWIhRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
      <div className={styles.lineDiv} />
      <div className={styles.macbookAir3Child5} />
      <div className={styles.sqFt}>
        <b>{`2795  `}</b>
        <span className={styles.sqFt1}>sq. ft.</span>
      </div>
      <b className={styles.b2}>2</b>
      <img className={styles.image14Icon} alt="" src="https://s3-alpha-sig.figma.com/img/0072/c980/399a6447eb49131de1e23e7bda40338c?Expires=1704067200&Signature=ZYxIW9hWO9pfezynFIUnfS2rzvgquWYHqxIBm7rW3mlc~bPBZbGssQTDlXl8zgqTMN9SLPsWpNGNuBYfHIPDDxYwVTgobYuibSkI-U4GIq7sbrjke2kIqivBHX3PYIVMLFucHFHqfKzQLAW9waTJbuyBaa47f0IRKUnLfWgzxOdmFlxWwfhU32KpEsV5nFDZezhW~clth9g0OxMLobXspTR3tQJya9yC0BKD14bYmqXP30J4Zc7H1lzjVix8rVLVAjvsCLNf9gZHKpwr4PvL6beEdwyPjSTvtcrJ2bkfoxvERISmouPchxapdnp8YTV41miRPCtKpIlFa8yl9LcYNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
      <b className={styles.b3}>2</b>
      <img className={styles.image15Icon} alt="" src="https://s3-alpha-sig.figma.com/img/a7b4/b8a0/cc90888fd7aadfa3f4da3abe1dfc3180?Expires=1704067200&Signature=gVbKsmI0pmd4hyHrD7Dp4Ljfzd4qmbjI1FoMfDq~44AZhEi~ZYeFn7eYGev2CHqkLm14Cu7lT2GrICOzm6gC2NnEtGQi19NaFpaSa-FSYN61ShH050hpp8x~Mr3czCmpBI9qbSwfAui5D82Bo3zZPFNhrr~GgLOpNDHzNNVSFpPxrZV~JpDP3I5p2qBy5awxseWD0IIBtxV2L5h7MYNRNEZ-xpUug-tqeuj1yszszNDIZO-ZRtPIcPn13eEJPL55a-KL1Nshh6o5t~q034ojFHilpGKPyuktOIVvCFVczgZefkyRMKwEy-UpphI9~3kCmpQPU3EFEzt-mzQ3fVK66g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
      <div className={styles.macbookAir3Child6} />
      <div className={styles.macbookAir3Child7} />
      <div className={styles.sqFt2}>
        <b>{`984  `}</b>
        <span className={styles.sqFt1}>sq. ft.</span>
      </div>
      <div className={styles.macbookAir3Child8} />
      <img className={styles.ifs3Icon} alt="" src="https://s3-alpha-sig.figma.com/img/9c4a/eb2f/7bf776512df8188a923a10a7d87f91fe?Expires=1704067200&Signature=aVglGyYQQxBs5oDPAtgEq7XvnfrMzJYx5vV48K24maJxxrkPcQWNiSennTyVHrtZedMq-TdcyUTHLEBbqjwzqHVdBW6oMcT-eCYGJCdb0YK5SOhRj1Yrpfj-Hoby697mCqLza5YmOxfecU9HwEWIRHYZoBxPzm6IDHdSh-ykt4rvhOGPBmalGjRon5Our5hkufwHVO5MHGXkrZmqhiZTVUf2x2Q8BGhAYYdn1JSEQ6kEaEQEV33vg1hcrFbe1kqv89RZL4oozc93zDongj3h5gfaC5LaV5oyitcwR9EbBounouTkg-zTSkSP2hjbx0nSqSU-ffKYJRZed7H4IGfzZQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
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
      <div className={styles.macbookAir3Child9} />
    </div>
  );
};

export default NewPage;
