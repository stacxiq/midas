import React from "react";

import { Button, Img, Line, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="h-[111px] md:h-[91px] relative w-full">
          <div className="header-row absolute">
            <Img
              src="images/img_asset1sh1.png"
              className="absolute h-[91px] left-[0] object-cover top-[0]"
              alt="asset1shOne"
            />
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="absolute bottom-[0] h-[71px] sm:hidden inset-x-[0] mx-auto w-full">
            <Line className="absolute bg-amber_700 bottom-[4%] h-[5px] left-[0] rounded-sm w-[48%]" />
            <div className="absolute flex flex-row gap-[34px] h-full inset-y-[0] items-start justify-between my-auto right-[0] w-[64%]">
              <ul className="flex sm:flex-col flex-row md:hidden items-center justify-between w-[83%] common-row-list">
                <li>
                  <Text className="font-tajawal text-gray_50" variant="body6">
                    الصفحة الرئيسية
                  </Text>
                </li>
                <li>
                  <Text className="font-tajawal text-gray_50" variant="body6">
                    معلومات عننا
                  </Text>
                </li>
                <li>
                  <Text className="font-tajawal text-gray_50" variant="body6">
                    خدماتنا
                  </Text>
                </li>
                <li>
                  <Text className="font-tajawal text-gray_50" variant="body6">
                    الكورسات
                  </Text>
                </li>
                <li>
                  <Button
                    className="cursor-pointer font-bold font-tajawal leading-[normal] text-base text-center text-gray_50"
                    shape="RoundedBorder10"
                    size="md"
                    variant="OutlineBlack9003f"
                  >
                    تواصل معنا
                  </Button>
                </li>
              </ul>
              <div className="flex flex-col items-center justify-start mt-[5px] w-[13%]">
                <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                  <div className="flex flex-row items-start justify-between ml-1 md:ml-[0] w-[96%] md:w-full">
                    <Text
                      className="font-tajawal mt-1 text-gray_50"
                      variant="body10"
                    >
                      العربية
                    </Text>
                    <Img
                      src="images/img_checkmark.svg"
                      className="h-[7px] mt-2"
                      alt="checkmark"
                    />
                    <Img
                      src="images/img_materialsymbolslanguage.svg"
                      className="h-[21px] w-[21px]"
                      alt="materialsymbols"
                    />
                  </div>
                  <Button
                    className="cursor-pointer font-normal font-tajawal leading-[normal] min-w-[67px] text-center text-gray_50 text-xs"
                    size="sm"
                    variant="FillAmber700"
                  >
                    English
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
