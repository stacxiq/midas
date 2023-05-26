import React from "react";

import { Button, Img, Line, Text } from "components";

const PosPage = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col font-tajawal sm:gap-10 md:gap-10 gap-[116px] items-center justify-start mx-auto py-2.5 shadow-bs2 w-full">
        <div className="h-[1256px] sm:h-[701px] md:h-[793px] md:px-5 relative w-full">
          <Img
            src="images/img_ellipse2_3.png"
            className="absolute h-[558px] inset-y-[0] my-auto object-cover right-[0] w-[5%]"
            alt="ellipseTwo"
          />
          <div className="absolute bottom-[0] md:h-[398px] h-[434px] left-[6%] w-[39%] sm:w-full">
            <div className="absolute border border-amber_700 border-solid h-[347px] left-[0] rounded-lg top-[0] w-[87%]"></div>
            <Img
              src="images/img_img00092.png"
              className="absolute bottom-[0] h-[398px] object-cover right-[0] rounded-lg w-[84%]"
              alt="img00092"
            />
          </div>
          <div className="absolute flex flex-col items-end justify-start left-[0] top-[0] w-[96%]">
            <header className="flex flex-col font-tajawal items-center justify-center w-full">
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
                  <Line className="absolute bg-amber_700 bottom-[4%] h-[5px] left-[0] rounded-sm w-[47%]" />
                  <div className="absolute flex flex-row gap-[34px] h-full inset-y-[0] items-start justify-between my-auto right-[0] w-[64%]">
                    <ul className="flex sm:flex-col flex-row md:hidden items-center justify-between w-[83%] common-row-list">
                      <li>
                        <a href="javascript:" className="text-gray_50">
                          <Text variant="body6">الصفحة الرئيسية</Text>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:" className="text-gray_50">
                          <Text variant="body6">معلومات عننا</Text>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:" className="text-gray_50">
                          <Text variant="body6">خدماتنا</Text>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:" className="text-gray_50">
                          <Text variant="body6">الكورسات</Text>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:">
                          <Button
                            className="cursor-pointer font-bold leading-[normal] text-base text-center text-gray_50"
                            shape="RoundedBorder10"
                            size="md"
                            variant="OutlineBlack9003f"
                          >
                            تواصل معنا
                          </Button>
                        </a>
                      </li>
                    </ul>
                    <div className="flex flex-col items-center justify-start mt-[5px] w-[13%]">
                      <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-between ml-1 md:ml-[0] w-[96%] md:w-full">
                          <Text className="mt-1 text-gray_50" variant="body10">
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
                          className="cursor-pointer font-normal leading-[normal] min-w-[67px] text-center text-gray_50 text-xs"
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
            <Text
              className="font-poppins mt-[54px] text-white_A700"
              as="h5"
              variant="h5"
            >
              POS system
            </Text>
            <Text
              className="font-normal font-tajawal mt-[5px] text-center text-white_A700"
              variant="body4"
            >
              <>
                &quot;قم بإدارة أعمالك دون عناء باستخدام نظام البيع الخاص بنا
                &quot;
              </>
            </Text>
            <div className="flex md:flex-col flex-row gap-9 items-start justify-end mt-[61px] w-[96%] md:w-full">
              <div className="h-[124px] md:mt-0 mt-[124px] relative w-[49%] md:w-full">
                <Text
                  className="font-tajawal mb-[-22.96px] ml-[82px] text-center text-white_A700 z-[1]"
                  as="h5"
                  variant="h5"
                >
                  تبسيط عمليات البيع
                </Text>
                <Text
                  className="font-normal font-poppins mt-auto mx-auto text-center text-white_A700"
                  variant="body4"
                >
                  <span className="md:text-[38px] sm:text-4xl text-white_A700 text-[40px] font-tajawal font-bold">
                    <>
                      <br />
                    </>
                  </span>
                  <span className="md:text-[22px] sm:text-xl text-white_A700 text-2xl font-tajawal">
                    {" "}
                    تعمل على تبسيط معاملات المبيعات، مما يجعل عملية الدفع أسرع
                    وأكثر كفاءة.
                  </span>
                </Text>
              </div>
              <div className="md:h-[358px] h-[401px] relative w-[49%] md:w-full">
                <div className="absolute border border-amber_700 border-solid bottom-[0] h-[276px] left-[0] rounded-lg w-[79%]"></div>
                <Img
                  src="images/img_image7.png"
                  className="absolute h-[358px] object-cover right-[0] rounded-lg top-[0] w-[85%]"
                  alt="imageSeven"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-[9%] md:h-[226px] h-[243px] right-[4%] w-[45%] sm:w-full">
            <Text
              className="absolute bottom-[0] font-normal font-poppins inset-x-[0] leading-[124.80%] mx-auto text-center text-white_A700"
              variant="body4"
            >
              <span className="md:text-[38px] sm:text-4xl text-white_A700 text-[40px] font-tajawal font-bold">
                <>
                  <br />
                </>
              </span>
              <span className="md:text-[22px] sm:text-xl text-white_A700 text-2xl font-tajawal">
                {" "}
                مساعدة الشركات في الحفاظ على تحكم أفضل في مخزونها. من خلال تتبع
                المبيعات في الوقت الفعلي ، ومراقبة مستويات المخزون ، وإنشاء
                تنبيهات تلقائية للعناصر منخفضة المخزون أو غير المتوفرة في
                المخزون ، يمكنك تحسين إدارة المخزون الخاص بك ، وتجنب الإفراط في
                التخزين أو نفاد المخزون ، واتخاذ قرارات شراء مستنيرة.
              </span>
            </Text>
            <Text
              className="absolute font-tajawal inset-x-[0] mx-auto text-center text-white_A700 top-[0] w-max"
              as="h5"
              variant="h5"
            >
              تعزيز إدارة المخزون
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start mb-14 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[77px] items-start justify-start md:px-5 w-[92%] md:w-full">
            <Img
              src="images/img_ellipse3_2.png"
              className="h-[558px] sm:h-auto md:mt-0 mt-[78px] object-cover w-[4%] md:w-full"
              alt="ellipseThree"
            />
            <div className="flex flex-col md:gap-10 gap-[304px] items-center justify-start w-[91%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[114px] items-center justify-start w-[97%] md:w-full">
                <div className="h-[178px] relative w-[97%] md:w-full">
                  <Text
                    className="font-normal font-poppins m-auto text-center text-white_A700"
                    variant="body4"
                  >
                    <span className="md:text-[38px] sm:text-4xl text-white_A700 text-[40px] font-tajawal font-bold">
                      <>
                        <br />
                      </>
                    </span>
                    <span className="md:text-[22px] sm:text-xl text-white_A700 text-2xl font-tajawal">
                      {" "}
                      تسمح لك بإنشاء قاعدة بيانات لمعلومات العملاء ، بما في ذلك
                      سجل الشراء وتفاصيل الاتصال والتفضيلات. يتيح ذلك حملات
                      تسويقية مخصصة وبرامج ولاء وعروض ترويجية مستهدفة ، مما يعزز
                      علاقات أقوى مع العملاء وتكرار الأعمال.
                    </span>
                  </Text>
                  <Text
                    className="absolute font-tajawal inset-x-[0] mx-auto text-center text-white_A700 top-[11%] w-max"
                    as="h5"
                    variant="h5"
                  >
                    إدارة علاقات العملاء
                  </Text>
                </div>
                <div className="h-[556px] relative w-full">
                  <div className="absolute border border-amber_700 border-solid h-[476px] inset-[0] justify-center m-auto rounded-lg w-full"></div>
                  <Img
                    src="images/img_img06841.png"
                    className="absolute h-[556px] inset-[0] justify-center m-auto object-cover rounded-lg w-[94%]"
                    alt="img06841"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                  <Img
                    src="images/img_asset1sh1.png"
                    className="md:flex-1 h-[70px] sm:h-auto mb-1.5 object-cover w-[8%] md:w-full"
                    alt="asset1shTwo"
                  />
                  <Text
                    className="md:ml-[0] ml-[185px] md:mt-0 mt-[57px] text-center text-white_A700"
                    variant="body7"
                  >
                    تقديم كافة الخدمات التي يحتاجها العميل في مجال التقنية
                    والإعلام والتسويق.
                  </Text>
                  <Img
                    src="images/img_instagram1.png"
                    className="h-[22px] md:h-auto mb-[11px] md:ml-[0] ml-[242px] md:mt-0 mt-[43px] object-cover w-[22px]"
                    alt="instagramOne"
                  />
                  <Img
                    src="images/img_gmail1.png"
                    className="h-[22px] md:h-auto mb-[11px] md:ml-[0] ml-[22px] md:mt-0 mt-[43px] object-cover w-[22px]"
                    alt="gmailOne"
                  />
                </div>
                <Line className="bg-amber_700_70 h-px w-full" />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end max-w-[1044px] mt-[3px] mx-auto md:px-5 w-full">
            <Text
              className="font-normal mb-[5px] text-center text-gray_50"
              variant="body5"
            >
              الايميل
            </Text>
            <Text
              className="font-normal md:ml-[0] ml-[129px] md:mt-0 mt-1 text-center text-gray_50"
              variant="body5"
            >
              رقم الهاتف
            </Text>
            <Img
              src="images/img_materialsymbol.svg"
              className="h-[15px] md:ml-[0] ml-[684px] md:mt-0 mt-2.5 w-[15px]"
              alt="materialsymbol"
            />
            <Text
              className="font-normal ml-3 md:ml-[0] md:mt-0 mt-[5px] text-gray_50"
              variant="body5"
            >
              العنوان
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start max-w-[1046px] mt-0.5 mx-auto md:px-5 w-full">
            <Text className="text-center text-white_A700" variant="body6">
              midas@gmail.com
            </Text>
            <Text
              className="mb-[3px] ml-11 sm:ml-[0] text-center text-white_A700"
              variant="body6"
            >
              +694 772 788 0505
            </Text>
            <Text
              className="sm:ml-[0] ml-[619px] sm:mt-0 mt-[3px] text-center text-white_A700"
              variant="body6"
            >
              العراق,بغداد,السيدية
            </Text>
          </div>
          <Line className="bg-blue_gray_100_0f h-px mt-24 w-full" />
        </div>
      </div>
    </>
  );
};

export default PosPage;
