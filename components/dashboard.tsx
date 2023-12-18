import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./index.module.css";

const MacBookAir7: NextPage = () => {
  const onLine5Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='closingCostComparison']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLine6Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='nOIComparisonText']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLine7Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='cashFlowComparison']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onHOMETextClick = useCallback(() => {
    // Please sync "MacBook Air - 2" to the project
  }, []);

  const onSETTINGSTextClick = useCallback(() => {
    // Please sync "MacBook Air - 5" to the project
  }, []);

  const onPORTFOLIOTextClick = useCallback(() => {
    // Please sync "MacBook Air - 3" to the project
  }, []);

  return (
    <div className={styles.macbookAir7}>
      <div className={styles.macbookAir7Child} />
      <div className={styles.macbookAir7Item} />
      <div className={styles.xxx}>$x.xx</div>
      <div className={styles.xxx1}>$x.xx</div>
      <div className={styles.xxx2}>$x.xx</div>
      <div className={styles.xxx3}>$x.xx</div>
      <div className={styles.xxx4}>$x.xx</div>
      <div className={styles.xxx5}>$x.xx</div>
      <div className={styles.xxx6}>$x.xx</div>
      <div className={styles.div}>1</div>
      <div className={styles.div1}>2</div>
      <div className={styles.div2}>3</div>
      <div className={styles.div3}>4</div>
      <div className={styles.div4}>5</div>
      <div className={styles.div5}>6</div>
      <div className={styles.div6}>7</div>
      <div className={styles.div7}>8</div>
      <div className={styles.xxx7}>$x.xx</div>
      <div className={styles.macbookAir7Inner} />
      <div className={styles.x}>$x</div>
      <div className={styles.x1}>$x</div>
      <div className={styles.x2}>$x</div>
      <div className={styles.x3}>$x</div>
      <div className={styles.x4}>$x</div>
      <div className={styles.x5}>$x</div>
      <div className={styles.x6}>$x</div>
      <div className={styles.x7}>$x</div>
      <div className={styles.x8}>$x</div>
      <div className={styles.x9}>$x</div>
      <div className={styles.x10}>$x</div>
      <div className={styles.x11}>$x</div>
      <div className={styles.x12}>$x</div>
      <div className={styles.x13}>$x</div>
      <div className={styles.x14}>$x</div>
      <div className={styles.x15}>$x</div>
      <div className={styles.x16}>$x</div>
      <div className={styles.x17}>$x</div>
      <div className={styles.x18}>$x</div>
      <div className={styles.x19}>$x</div>
      <div className={styles.x20}>$x</div>
      <div className={styles.x21}>$x</div>
      <div className={styles.x22}>$x</div>
      <div className={styles.x23}>$x</div>
      <div className={styles.comparison}>Comparison</div>
      <div className={styles.lineDiv} />
      <div className={styles.macbookAir7Child1} />
      <div className={styles.macbookAir7Child2} />
      <div className={styles.macbookAir7Child3} />
      <div className={styles.rectangleDiv} />
      <div className={styles.macbookAir7Child4} />
      <div className={styles.macbookAir7Child5} />
      <div className={styles.macbookAir7Child6} />
      <div className={styles.macbookAir7Child7} />
      <div className={styles.macbookAir7Child8} />
      <div className={styles.name}>NAME</div>
      <div className={styles.cashFlowBefore}>CASH FLOW BEFORE TAXES</div>
      <div className={styles.noi}>NOI</div>
      <div className={styles.closingCost}>CLOSING COST($)</div>
      <div className={styles.roi}>ROI %</div>
      <div className={styles.property1}>
        <span className={styles.property1TxtContainer}>
          <ul className={styles.property11}>
            <li>Property 1</li>
          </ul>
        </span>
      </div>
      <div className={styles.property8}>
        <span className={styles.property1TxtContainer}>
          <ul className={styles.property11}>
            <li>Property 8</li>
          </ul>
        </span>
      </div>
      <div className={styles.property7}>
        <span className={styles.property1TxtContainer}>
          <ul className={styles.property11}>
            <li>Property 7</li>
          </ul>
        </span>
      </div>
      <div className={styles.property6}>
        <span className={styles.property1TxtContainer}>
          <ul className={styles.property11}>
            <li>Property 6</li>
          </ul>
        </span>
      </div>
      <div className={styles.property5}>
        <span className={styles.property1TxtContainer}>
          <ul className={styles.property11}>
            <li>Property 5</li>
          </ul>
        </span>
      </div>
      <div className={styles.property4}>
        <span className={styles.property1TxtContainer}>
          <ul className={styles.property11}>
            <li>Property 4</li>
          </ul>
        </span>
      </div>
      <div className={styles.property3}>
        <span className={styles.property1TxtContainer}>
          <ul className={styles.property11}>
            <li>Property 3</li>
          </ul>
        </span>
      </div>
      <div className={styles.property2}>
        <span className={styles.property1TxtContainer}>
          <ul className={styles.property11}>
            <li>Property 2</li>
          </ul>
        </span>
      </div>
      <div className={styles.macbookAir7Child9} />
      <div className={styles.roiComparison}>ROI Comparison</div>
      <div
        className={styles.closingCostComparison}
        data-scroll-to="closingCostComparison"
      >
        Closing Cost Comparison
      </div>
      <img className={styles.lineIcon} alt="" src="/line-33@2x.png" />
      <div className={styles.div8}>1 2 3 4 5 6 7 8</div>
      <div className={styles.wrapperVector1}>
        <img
          className={styles.wrapperVector1Child}
          alt=""
          src="/vector-1@2x.png"
        />
      </div>
      <div className={styles.x24}>x%</div>
      <div className={styles.x25}>x%</div>
      <div className={styles.x26}>x%</div>
      <div className={styles.x27}>x%</div>
      <div className={styles.x28}>x%</div>
      <div className={styles.x29}>x%</div>
      <div className={styles.x30}>x%</div>
      <div className={styles.x31}>x%</div>
      <div className={styles.x32}>x%</div>
      <div className={styles.x33}>x%</div>
      <div className={styles.x34}>x%</div>
      <div className={styles.x35}>x%</div>
      <div className={styles.x36}>x%</div>
      <div className={styles.x37}>x%</div>
      <div className={styles.x38}>x%</div>
      <div className={styles.x39}>x%</div>
      <div className={styles.macbookAir7Child10} onClick={onLine5Click} />
      <div className={styles.macbookAir7Child11} />
      <div className={styles.macbookAir7Child12} />
      <div className={styles.macbookAir7Child13} />
      <div className={styles.macbookAir7Child14} />
      <div className={styles.macbookAir7Child15} />
      <div className={styles.macbookAir7Child16} />
      <div className={styles.macbookAir7Child17} />
      <div className={styles.macbookAir7Child18} />
      <div className={styles.macbookAir7Child19} />
      <div className={styles.xxx8}>$x.xx</div>
      <div className={styles.xxx9}>$x.xx</div>
      <div className={styles.xxx10}>$x.xx</div>
      <div className={styles.xxx11}>$x.xx</div>
      <div className={styles.xxx12}>$x.xx</div>
      <div className={styles.xxx13}>$x.xx</div>
      <div className={styles.xxx14}>$x.xx</div>
      <div className={styles.div9}>1</div>
      <div className={styles.div10}>2</div>
      <div className={styles.div11}>3</div>
      <div className={styles.div12}>4</div>
      <div className={styles.div13}>5</div>
      <div className={styles.div14}>6</div>
      <div className={styles.div15}>7</div>
      <div className={styles.div16}>8</div>
      <div className={styles.xxx15}>$x.xx</div>
      <div className={styles.noiComparison} data-scroll-to="nOIComparisonText">
        NOI Comparison
      </div>
      <div className={styles.macbookAir7Child20} onClick={onLine6Click} />
      <div className={styles.macbookAir7Child21} />
      <div className={styles.macbookAir7Child22} />
      <div className={styles.macbookAir7Child23} />
      <div className={styles.macbookAir7Child24} />
      <div className={styles.macbookAir7Child25} />
      <div className={styles.macbookAir7Child26} />
      <div className={styles.macbookAir7Child27} />
      <div className={styles.macbookAir7Child28} />
      <div className={styles.macbookAir7Child29} />
      <div className={styles.xxx16}>$x.xx</div>
      <div className={styles.xxx17}>$x.xx</div>
      <div className={styles.xxx18}>$x.xx</div>
      <div className={styles.xxx19}>$x.xx</div>
      <div className={styles.xxx20}>$x.xx</div>
      <div className={styles.xxx21}>$x.xx</div>
      <div className={styles.xxx22}>$x.xx</div>
      <div className={styles.div17}>1</div>
      <div className={styles.div18}>2</div>
      <div className={styles.div19}>3</div>
      <div className={styles.div20}>4</div>
      <div className={styles.div21}>5</div>
      <div className={styles.div22}>6</div>
      <div className={styles.div23}>7</div>
      <div className={styles.div24}>8</div>
      <div className={styles.xxx23}>$x.xx</div>
      <div
        className={styles.cashFlowComparison}
        data-scroll-to="cashFlowComparison"
      >
        Cash Flow Comparison
      </div>
      <div className={styles.macbookAir7Child30} onClick={onLine7Click} />
      <div className={styles.macbookAir7Child31} />
      <div className={styles.macbookAir7Child32} />
      <div className={styles.macbookAir7Child33} />
      <div className={styles.macbookAir7Child34} />
      <div className={styles.macbookAir7Child35} />
      <div className={styles.macbookAir7Child36} />
      <div className={styles.macbookAir7Child37} />
      <div className={styles.macbookAir7Child38} />
      <div className={styles.macbookAir7Child39} />
      <img className={styles.ifs1Icon} alt="" src="/ifs-1@2x.png" />
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
      <div className={styles.dashboard}>DASHBOARD</div>
      <div className={styles.macbookAir7Child40} />
    </div>
  );
};

export default MacBookAir7;
