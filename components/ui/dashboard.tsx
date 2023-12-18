import { FunctionComponent, useCallback } from "react";

const MacBookAir7: FunctionComponent = () => {
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
    <div className="relative bg-white w-full h-[2643px] overflow-hidden text-center text-xl text-black font-inria-sans">
      <div className="absolute top-[139px] left-[58px] rounded-lg bg-gainsboro-100 box-border w-[1161px] h-[432px] border-[1px] border-solid border-gray" />
      <div className="absolute top-[1101px] left-[52px] rounded-lg bg-gainsboro-100 box-border w-[1161px] h-[455px] border-[1px] border-solid border-gray" />
      <div className="absolute top-[1192px] left-[953px] flex items-center justify-center w-[92px] h-10">
        $x.xx
      </div>
      <div className="absolute top-[1232px] left-[420px] flex items-center justify-center w-[92px] h-[39px]">
        $x.xx
      </div>
      <div className="absolute top-[1271px] left-[756px] flex items-center justify-center w-[91px] h-10">
        $x.xx
      </div>
      <div className="absolute top-[1315px] left-[688px] flex items-center justify-center w-[92px] h-10">
        $x.xx
      </div>
      <div className="absolute top-[1355px] left-[300px] flex items-center justify-center w-[92px] h-[39px]">
        $x.xx
      </div>
      <div className="absolute top-[1394px] left-[1073px] flex items-center justify-center w-[92px] h-10">
        $x.xx
      </div>
      <div className="absolute top-[1437px] left-[838px] flex items-center justify-center w-[92px] h-10">
        $x.xx
      </div>
      <div className="absolute top-[1192px] left-[161px] flex items-center justify-center w-[92px] h-10">
        1
      </div>
      <div className="absolute top-[1232px] left-[161px] flex items-center justify-center w-[92px] h-[39px]">
        2
      </div>
      <div className="absolute top-[1271px] left-[161px] flex items-center justify-center w-[92px] h-10">
        3
      </div>
      <div className="absolute top-[1315px] left-[161px] flex items-center justify-center w-[92px] h-10">
        4
      </div>
      <div className="absolute top-[1355px] left-[161px] flex items-center justify-center w-[92px] h-[39px]">
        5
      </div>
      <div className="absolute top-[1394px] left-[161px] flex items-center justify-center w-[92px] h-10">
        6
      </div>
      <div className="absolute top-[1437px] left-[161px] flex items-center justify-center w-[92px] h-10">
        7
      </div>
      <div className="absolute top-[1477px] left-[161px] flex items-center justify-center w-[92px] h-[39px]">
        8
      </div>
      <div className="absolute top-[1477px] left-[565px] flex items-center justify-center w-[91px] h-[39px]">
        $x.xx
      </div>
      <div className="absolute top-[190px] left-[59px] bg-white box-border w-[1157px] h-[357px] border-[1px] border-solid border-gray" />
      <div className="absolute top-[274px] left-[793px] text-base font-habibi flex items-center justify-center w-[196px] h-[27px]">
        $x
      </div>
      <div className="absolute top-[237px] left-[793px] text-base font-habibi flex items-center justify-center w-[196px] h-[26px]">
        $x
      </div>
      <div className="absolute top-[236px] left-[1010px] text-base font-habibi flex items-center justify-center w-[196px] h-[26px]">
        $x
      </div>
      <div className="absolute top-[436px] left-[1010px] text-base font-habibi flex items-center justify-center w-[196px] h-[27px]">
        $x
      </div>
      <div className="absolute top-[396px] left-[1010px] text-base font-habibi flex items-center justify-center w-[196px] h-[27px]">
        $x
      </div>
      <div className="absolute top-[355px] left-[1010px] text-base font-habibi flex items-center justify-center w-[196px] h-[26px]">
        $x
      </div>
      <div className="absolute top-[321px] left-[1010px] text-base font-habibi flex items-center justify-center w-[196px] h-[27px]">
        $x
      </div>
      <div className="absolute top-[277px] left-[1010px] text-base font-habibi flex items-center justify-center w-[196px] h-[27px]">
        $x
      </div>
      <div className="absolute top-[476px] left-[1016px] text-base font-habibi flex items-center justify-center w-[196px] h-[26px]">
        $x
      </div>
      <div className="absolute top-[513px] left-[1016px] text-base font-habibi flex items-center justify-center w-[196px] h-[27px]">
        $x
      </div>
      <div className="absolute top-[317px] left-[793px] text-base font-habibi flex items-center justify-center w-[196px] h-[27px]">
        $x
      </div>
      <div className="absolute top-[357px] left-[793px] text-base font-habibi flex items-center justify-center w-[196px] h-[26px]">
        $x
      </div>
      <div className="absolute top-[395px] left-[796px] text-base font-habibi flex items-center justify-center w-[196px] h-[27px]">
        $x
      </div>
      <div className="absolute top-[436px] left-[793px] text-base font-habibi flex items-center justify-center w-[196px] h-[27px]">
        $x
      </div>
      <div className="absolute top-[475px] left-[793px] text-base font-habibi flex items-center justify-center w-[196px] h-[26px]">
        $x
      </div>
      <div className="absolute top-[517px] left-[793px] text-base font-habibi flex items-center justify-center w-[196px] h-[27px]">
        $x
      </div>
      <div className="absolute top-[237px] left-[544px] text-base font-habibi flex items-center justify-center w-[195px] h-[26px]">
        $x
      </div>
      <div className="absolute top-[277px] left-[542px] text-base font-habibi flex items-center justify-center w-[196px] h-[27px]">
        $x
      </div>
      <div className="absolute top-[321px] left-[541px] text-base font-habibi flex items-center justify-center w-[195px] h-[27px]">
        $x
      </div>
      <div className="absolute top-[357px] left-[539px] text-base font-habibi flex items-center justify-center w-[196px] h-[26px]">
        $x
      </div>
      <div className="absolute top-[395px] left-[539px] text-base font-habibi flex items-center justify-center w-[196px] h-[27px]">
        $x
      </div>
      <div className="absolute top-[435px] left-[539px] text-base font-habibi flex items-center justify-center w-[196px] h-[27px]">
        $x
      </div>
      <div className="absolute top-[478px] left-[541px] text-base font-habibi flex items-center justify-center w-[195px] h-[26px]">
        $x
      </div>
      <div className="absolute top-[513px] left-[542px] text-base font-habibi flex items-center justify-center w-[196px] h-[27px]">
        $x
      </div>
      <div className="absolute top-[136px] left-[37px] text-13xl font-habibi flex items-center justify-center w-[1204px] h-[57px]">
        Comparison
      </div>
      <div className="absolute top-[188.5px] left-[282.5px] box-border w-px h-[356px] border-r-[1px] border-solid border-black" />
      <div className="absolute top-[189.5px] left-[519.5px] box-border w-px h-[355px] border-r-[1px] border-solid border-black" />
      <div className="absolute top-[189.5px] left-[759.5px] box-border w-px h-[358px] border-r-[1px] border-solid border-black" />
      <div className="absolute top-[188.5px] left-[989.5px] box-border w-px h-[359px] border-r-[1px] border-solid border-black" />
      <div className="absolute top-[190px] left-[59px] bg-gainsboro-200 box-border w-[1159px] h-10 border-[1px] border-solid border-gray" />
      <div className="absolute top-[428px] left-[59px] bg-gainsboro-200 box-border w-[1159px] h-10 border-[1px] border-solid border-gray" />
      <div className="absolute top-[349px] left-[59px] bg-gainsboro-200 box-border w-[1159px] h-[39px] border-[1px] border-solid border-gray" />
      <div className="absolute top-[269px] left-[58px] bg-gainsboro-200 box-border w-[1160px] h-10 border-[1px] border-solid border-gray" />
      <div className="absolute top-[468px] left-[58px] bg-gainsboro-200 box-border w-[1158px] h-[39px] border-[1px] border-solid border-gray" />
      <div className="absolute top-[507px] left-[59px] bg-gainsboro-200 box-border w-[1159px] h-10 border-[1px] border-solid border-gray" />
      <div className="absolute top-[196px] left-[70px] text-6xl font-habibi flex items-center justify-center w-[206px] h-7">
        NAME
      </div>
      <div className="absolute top-[196px] left-[999px] text-[12px] font-habibi flex items-center justify-center w-[207px] h-7">
        CASH FLOW BEFORE TAXES
      </div>
      <div className="absolute top-[196px] left-[774px] text-6xl font-habibi flex items-center justify-center w-[206px] h-7">
        NOI
      </div>
      <div className="absolute top-[180px] left-[507px] text-[14px] font-habibi flex items-center justify-center w-[267px] h-[61px]">
        CLOSING COST($)
      </div>
      <div className="absolute top-[196px] left-[291px] text-6xl font-habibi flex items-center justify-center w-[206px] h-7">
        ROI %
      </div>
      <div className="absolute top-[235px] left-[70px] text-base font-habibi flex items-center w-[200px] h-7">
        <span className="w-full">
          <ul className="m-0 font-inherit text-inherit pl-[21px]">
            <li>Property 1</li>
          </ul>
        </span>
      </div>
      <div className="absolute top-[510px] left-[70px] text-base font-habibi flex items-center w-[200px] h-[29px]">
        <span className="w-full">
          <ul className="m-0 font-inherit text-inherit pl-[21px]">
            <li>Property 8</li>
          </ul>
        </span>
      </div>
      <div className="absolute top-[471px] left-[70px] text-base font-habibi flex items-center w-[200px] h-7">
        <span className="w-full">
          <ul className="m-0 font-inherit text-inherit pl-[21px]">
            <li>Property 7</li>
          </ul>
        </span>
      </div>
      <div className="absolute top-[434px] left-[70px] text-base font-habibi flex items-center w-[200px] h-[29px]">
        <span className="w-full">
          <ul className="m-0 font-inherit text-inherit pl-[21px]">
            <li>Property 6</li>
          </ul>
        </span>
      </div>
      <div className="absolute top-[394px] left-[70px] text-base font-habibi flex items-center w-[200px] h-[29px]">
        <span className="w-full">
          <ul className="m-0 font-inherit text-inherit pl-[21px]">
            <li>Property 5</li>
          </ul>
        </span>
      </div>
      <div className="absolute top-[355px] left-[70px] text-base font-habibi flex items-center w-[200px] h-7">
        <span className="w-full">
          <ul className="m-0 font-inherit text-inherit pl-[21px]">
            <li>Property 4</li>
          </ul>
        </span>
      </div>
      <div className="absolute top-[316px] left-[70px] text-base font-habibi flex items-center w-[200px] h-[29px]">
        <span className="w-full">
          <ul className="m-0 font-inherit text-inherit pl-[21px]">
            <li>Property 3</li>
          </ul>
        </span>
      </div>
      <div className="absolute top-[275px] left-[70px] text-base font-habibi flex items-center w-[200px] h-[29px]">
        <span className="w-full">
          <ul className="m-0 font-inherit text-inherit pl-[21px]">
            <li>Property 2</li>
          </ul>
        </span>
      </div>
      <div className="absolute top-[603px] left-[56px] rounded-lg bg-gainsboro-100 box-border w-[1162px] h-[455px] border-[1px] border-solid border-gray" />
      <div className="absolute top-[603px] left-[35px] text-13xl font-habibi flex items-center justify-center w-[1204px] h-[57px]">
        ROI Comparison
      </div>
      <div
        className="absolute top-[1110px] left-[40px] text-13xl font-habibi flex items-center justify-center w-[1204px] h-[58px]"
        data-scroll-to="closingCostComparison"
      >
        Closing Cost Comparison
      </div>
      <img
        className="absolute top-[975.2px] left-[104.21px] w-[1057.74px] h-[3.04px] object-contain"
        alt=""
        src="/line-33@2x.png"
      />
      <div className="absolute top-[991px] left-[100px] text-13xl whitespace-pre-wrap flex items-center justify-center w-[1062px] h-[29px]">
        1 2 3 4 5 6 7 8
      </div>
      <div className="absolute top-[714px] left-[119px] w-[1026px] h-[225px] flex items-center justify-center">
        <img
          className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.019)]"
          alt=""
          src="/vector-1@2x.png"
        />
      </div>
      <div className="absolute top-[672px] left-[73px] flex items-center justify-center w-[91px] h-10">
        x%
      </div>
      <div className="absolute top-[840px] left-[205px] flex items-center justify-center w-[92px] h-10">
        x%
      </div>
      <div className="absolute top-[770px] left-[354px] flex items-center justify-center w-[92px] h-[39px]">
        x%
      </div>
      <div className="absolute top-[939px] left-[503px] flex items-center justify-center w-[92px] h-[39px]">
        x%
      </div>
      <div className="absolute top-[812px] left-[653px] flex items-center justify-center w-[92px] h-10">
        x%
      </div>
      <div className="absolute top-[911px] left-[792px] flex items-center justify-center w-[92px] h-10">
        x%
      </div>
      <div className="absolute top-[923px] left-[951px] flex items-center justify-center w-[92px] h-10">
        x%
      </div>
      <div className="absolute top-[715px] left-[1099px] flex items-center justify-center w-[92px] h-[39px]">
        x%
      </div>
      <div className="absolute top-[237px] left-[301px] text-base font-habibi flex items-center justify-center w-[196px] h-[26px]">
        x%
      </div>
      <div className="absolute top-[277px] left-[304px] text-base font-habibi flex items-center justify-center w-[196px] h-[27px]">
        x%
      </div>
      <div className="absolute top-[315px] left-[304px] text-base font-habibi flex items-center justify-center w-[196px] h-[26px]">
        x%
      </div>
      <div className="absolute top-[358px] left-[304px] text-base font-habibi flex items-center justify-center w-[196px] h-[26px]">
        x%
      </div>
      <div className="absolute top-[396px] left-[304px] text-base font-habibi flex items-center justify-center w-[196px] h-[27px]">
        x%
      </div>
      <div className="absolute top-[434px] left-[306px] text-base font-habibi flex items-center justify-center w-[195px] h-[26px]">
        x%
      </div>
      <div className="absolute top-[475px] left-[304px] text-base font-habibi flex items-center justify-center w-[196px] h-[26px]">
        x%
      </div>
      <div className="absolute top-[513px] left-[301px] text-base font-habibi flex items-center justify-center w-[196px] h-[27px]">
        x%
      </div>
      <div
        className="absolute top-[1180.5px] left-[251.5px] box-border w-[3px] h-[355px] cursor-pointer border-r-[3px] border-solid border-red"
        onClick={onLine5Click}
      />
      <div className="absolute top-[1201px] left-[253px] bg-red w-[698px] h-[23px]" />
      <div className="absolute top-[1242px] left-[253px] bg-red w-[167px] h-[23px]" />
      <div className="absolute top-[1282px] left-[253px] bg-red w-[503px] h-6" />
      <div className="absolute top-[1323px] left-[253px] bg-red w-[435px] h-[23px]" />
      <div className="absolute top-[1364px] left-[253px] bg-red w-[47px] h-[23px]" />
      <div className="absolute top-[1404px] left-[253px] bg-red w-[820px] h-6" />
      <div className="absolute top-[1445px] left-[253px] bg-red w-[585px] h-6" />
      <div className="absolute top-[1486px] left-[253px] bg-red w-[312px] h-[23px]" />
      <div className="absolute top-[1607px] left-[59px] rounded-lg bg-gainsboro-100 box-border w-[1161px] h-[455px] border-[1px] border-solid border-gray" />
      <div className="absolute top-[1692px] left-[953px] flex items-center justify-center w-[92px] h-10">
        $x.xx
      </div>
      <div className="absolute top-[1732px] left-[420px] flex items-center justify-center w-[92px] h-[39px]">
        $x.xx
      </div>
      <div className="absolute top-[1771px] left-[756px] flex items-center justify-center w-[91px] h-10">
        $x.xx
      </div>
      <div className="absolute top-[1815px] left-[688px] flex items-center justify-center w-[92px] h-10">
        $x.xx
      </div>
      <div className="absolute top-[1855px] left-[300px] flex items-center justify-center w-[92px] h-[39px]">
        $x.xx
      </div>
      <div className="absolute top-[1894px] left-[1073px] flex items-center justify-center w-[92px] h-10">
        $x.xx
      </div>
      <div className="absolute top-[1937px] left-[838px] flex items-center justify-center w-[92px] h-10">
        $x.xx
      </div>
      <div className="absolute top-[1692px] left-[161px] flex items-center justify-center w-[92px] h-10">
        1
      </div>
      <div className="absolute top-[1732px] left-[161px] flex items-center justify-center w-[92px] h-[39px]">
        2
      </div>
      <div className="absolute top-[1771px] left-[161px] flex items-center justify-center w-[92px] h-10">
        3
      </div>
      <div className="absolute top-[1815px] left-[161px] flex items-center justify-center w-[92px] h-10">
        4
      </div>
      <div className="absolute top-[1855px] left-[161px] flex items-center justify-center w-[92px] h-[39px]">
        5
      </div>
      <div className="absolute top-[1894px] left-[161px] flex items-center justify-center w-[92px] h-10">
        6
      </div>
      <div className="absolute top-[1937px] left-[161px] flex items-center justify-center w-[92px] h-10">
        7
      </div>
      <div className="absolute top-[1977px] left-[161px] flex items-center justify-center w-[92px] h-[39px]">
        8
      </div>
      <div className="absolute top-[1977px] left-[565px] flex items-center justify-center w-[91px] h-[39px]">
        $x.xx
      </div>
      <div
        className="absolute top-[1610px] left-[40px] text-13xl font-habibi flex items-center justify-center w-[1204px] h-[58px]"
        data-scroll-to="nOIComparisonText"
      >
        NOI Comparison
      </div>
      <div
        className="absolute top-[1680.5px] left-[251.5px] box-border w-[3px] h-[355px] cursor-pointer border-r-[3px] border-solid border-blue"
        onClick={onLine6Click}
      />
      <div className="absolute top-[1701px] left-[253px] bg-blue w-[698px] h-[23px]" />
      <div className="absolute top-[1742px] left-[253px] bg-blue w-[167px] h-[23px]" />
      <div className="absolute top-[1782px] left-[253px] bg-blue w-[503px] h-6" />
      <div className="absolute top-[1823px] left-[253px] bg-blue w-[435px] h-[23px]" />
      <div className="absolute top-[1864px] left-[253px] bg-blue w-[47px] h-[23px]" />
      <div className="absolute top-[1904px] left-[253px] bg-blue w-[820px] h-6" />
      <div className="absolute top-[1945px] left-[253px] bg-blue w-[585px] h-6" />
      <div className="absolute top-[1986px] left-[253px] bg-blue w-[312px] h-[23px]" />
      <div className="absolute top-[2114px] left-[59px] rounded-lg bg-gainsboro-100 box-border w-[1161px] h-[456px] border-[1px] border-solid border-gray" />
      <div className="absolute top-[2205px] left-[953px] flex items-center justify-center w-[92px] h-[41px]">
        $x.xx
      </div>
      <div className="absolute top-[2245px] left-[420px] flex items-center justify-center w-[92px] h-10">
        $x.xx
      </div>
      <div className="absolute top-[2284px] left-[756px] flex items-center justify-center w-[91px] h-[41px]">
        $x.xx
      </div>
      <div className="absolute top-[2328px] left-[688px] flex items-center justify-center w-[92px] h-[41px]">
        $x.xx
      </div>
      <div className="absolute top-[2368px] left-[300px] flex items-center justify-center w-[92px] h-10">
        $x.xx
      </div>
      <div className="absolute top-[2407px] left-[1073px] flex items-center justify-center w-[92px] h-[41px]">
        $x.xx
      </div>
      <div className="absolute top-[2450px] left-[838px] flex items-center justify-center w-[92px] h-[41px]">
        $x.xx
      </div>
      <div className="absolute top-[2205px] left-[161px] flex items-center justify-center w-[92px] h-[41px]">
        1
      </div>
      <div className="absolute top-[2245px] left-[161px] flex items-center justify-center w-[92px] h-10">
        2
      </div>
      <div className="absolute top-[2284px] left-[161px] flex items-center justify-center w-[92px] h-[41px]">
        3
      </div>
      <div className="absolute top-[2328px] left-[161px] flex items-center justify-center w-[92px] h-[41px]">
        4
      </div>
      <div className="absolute top-[2368px] left-[161px] flex items-center justify-center w-[92px] h-10">
        5
      </div>
      <div className="absolute top-[2407px] left-[161px] flex items-center justify-center w-[92px] h-[41px]">
        6
      </div>
      <div className="absolute top-[2450px] left-[161px] flex items-center justify-center w-[92px] h-[41px]">
        7
      </div>
      <div className="absolute top-[2490px] left-[161px] flex items-center justify-center w-[92px] h-10">
        8
      </div>
      <div className="absolute top-[2490px] left-[565px] flex items-center justify-center w-[91px] h-10">
        $x.xx
      </div>
      <div
        className="absolute top-[2123px] left-[40px] text-13xl font-habibi flex items-center justify-center w-[1204px] h-[59px]"
        data-scroll-to="cashFlowComparison"
      >
        Cash Flow Comparison
      </div>
      <div
        className="absolute top-[2193.5px] left-[251.5px] box-border w-1 h-[355px] cursor-pointer border-r-[3px] border-solid border-darkgreen"
        onClick={onLine7Click}
      />
      <div className="absolute top-[2214px] left-[253px] bg-darkgreen w-[698px] h-6" />
      <div className="absolute top-[2255px] left-[253px] bg-darkgreen w-[167px] h-6" />
      <div className="absolute top-[2295px] left-[253px] bg-darkgreen w-[503px] h-[25px]" />
      <div className="absolute top-[2336px] left-[253px] bg-darkgreen w-[435px] h-6" />
      <div className="absolute top-[2377px] left-[253px] bg-darkgreen w-[47px] h-6" />
      <div className="absolute top-[2417px] left-[253px] bg-darkgreen w-[820px] h-[25px]" />
      <div className="absolute top-[2458px] left-[253px] bg-darkgreen w-[585px] h-[25px]" />
      <div className="absolute top-[2499px] left-[253px] bg-darkgreen w-[312px] h-6" />
      <div className="absolute top-[0px] left-[0px] bg-white box-border w-[1280px] h-[110px] border-[1px] border-solid border-black" />
      <img
        className="absolute top-[21px] left-[36px] w-[219px] h-[77px] object-cover"
        alt=""
        src="/ifs-1@2x.png"
      />
      <div
        className="absolute top-[43px] left-[309px] text-5xl font-imprima inline-block w-[108px] h-8 cursor-pointer"
        onClick={onHOMETextClick}
      >
        HOME
      </div>
      <div
        className="absolute top-[43px] left-[1063px] text-5xl font-imprima inline-block w-[108px] h-8 cursor-pointer"
        onClick={onSETTINGSTextClick}
      >
        SETTINGS
      </div>
      <div
        className="absolute top-[43px] left-[477px] text-5xl font-imprima inline-block w-[125px] h-8 cursor-pointer"
        onClick={onPORTFOLIOTextClick}
      >
        PORTFOLIO
      </div>
      <div className="absolute top-[43px] left-[847px] text-5xl font-imprima inline-block w-36 h-8">
        CONTACT US
      </div>
      <div className="absolute top-[43px] left-[650px] text-5xl font-imprima inline-block w-[149px] h-8">
        DASHBOARD
      </div>
      <div className="absolute top-[73.5px] left-[648.5px] box-border w-[152px] h-[3px] border-t-[3px] border-solid border-skyblue" />
    </div>
  );
};

export default MacBookAir7;
