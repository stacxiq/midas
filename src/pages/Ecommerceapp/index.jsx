import React from "react";

import { Button, Img, Line, Text } from "components";

const EcommerceappPage = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col font-tajawal items-center justify-start mx-auto pb-[131px] shadow-bs2 w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <header className="flex flex-col items-center justify-center md:px-5 w-full">
            <div className="h-[104px] md:h-[84px] relative w-full">
              <div className="header-row absolute">
                <Img
                  src="images/img_asset1sh1_84x99.png"
                  className="absolute h-[84px] left-[0] object-cover top-[0]"
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
                          className="h-[7px] mt-[11px]"
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
          <div className="h-[1212px] sm:h-[1283px] md:h-[907px] max-w-[1237px] mt-[85px] mx-auto md:px-5 relative w-full">
            <div className="absolute h-[1156px] sm:h-[1198px] md:h-[822px] inset-x-[0] mx-auto top-[0] w-full">
              <div className="absolute bottom-[0] sm:h-[1198px] md:h-[822px] h-[974px] inset-x-[0] mx-auto w-full">
                <div className="absolute sm:h-[1198px] md:h-[822px] h-[974px] inset-[0] justify-center m-auto w-[99%] md:w-full">
                  <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                    <div className="flex flex-col md:gap-10 gap-48 justify-start w-full">
                      <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                        <Text
                          className="font-normal sm:mt-0 mt-[29px] text-center text-white_A700"
                          variant="body4"
                        >
                          {" "}
                          مصمم لتعزيز تجربة التسوق عبر الإنترنت. يجمع تطبيق
                          التجارة الإلكترونية الخاص بنا بين واجهة سلسة لتزويدك
                          بطريقة ممتعة وخالية من المتاعب للتسوق لمنتجاتك
                          المفضلة.
                        </Text>
                        <Img
                          src="images/img_ellipse2_5.png"
                          className="h-[558px] md:h-auto object-cover"
                          alt="ellipseTwo"
                        />
                      </div>
                      <Text
                        className="font-bold md:ml-[0] ml-[417px] text-center text-white_A700"
                        variant="body4"
                      >
                        <span className="md:text-[22px] sm:text-xl text-white_A700 text-2xl font-tajawal">
                          <>
                            <br />
                          </>
                        </span>
                        <span className="md:text-[22px] sm:text-xl text-white_A700 text-2xl font-tajawal font-normal">
                          تتبع منتجاتك المفضلة من خلال قائمة الرغبات وميزة
                          العناصر المحفوظة. ما عليك سوى إضافة عناصر إلى قائمة
                          الرغبات الخاصة بك أو حفظها لوقت لاحق للوصول إليها
                          بسهولة وشرائها عندما تكون جاهزا. لا تغفل أبدا عن
                          المنتجات التي تحبها.
                        </span>
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="absolute font-bold left-[0] text-right text-white_A700 top-[34%] w-[94%] sm:w-full"
                    variant="body4"
                  >
                    <span className="md:text-[22px] sm:text-xl text-white_A700 text-2xl font-tajawal">
                      سهولة التنقل والواجهة البديهية:{" "}
                    </span>
                    <span className="md:text-[22px] sm:text-xl text-white_A700 text-2xl font-tajawal font-normal">
                      يتميز تطبيقنا بواجهة سهلة الاستخدام تجعل التصفح والبحث
                      والتنقل عبر المنتجات المختلفة أمرا سهلا. اكتشف المنتجات
                      ببضع نقرات واعثر على ما تبحث عنه في أي وقت من الأوقات.
                    </span>
                  </Text>
                </div>
                <Text
                  className="absolute bottom-[34%] font-bold left-[0] text-right text-white_A700 w-[95%] sm:w-full"
                  variant="body4"
                >
                  <span className="md:text-[22px] sm:text-xl text-white_A700 text-2xl font-tajawal">
                    دفع آمن ومريح:{" "}
                  </span>
                  <span className="md:text-[22px] sm:text-xl text-white_A700 text-2xl font-tajawal font-normal">
                    نعطي الأولوية لأمن معاملاتك. يشتمل تطبيقنا على إجراءات أمنية
                    قوية وبوابات دفع مشفرة لضمان حماية معلوماتك الشخصية وتفاصيل
                    الدفع دائما. استمتع بعملية دفع سلسة وخالية من المتاعب ، مع
                    توفر خيارات دفع متعددة.
                  </span>
                </Text>
              </div>
              <Text
                className="absolute left-[14%] text-white_A700 top-[12%]"
                as="h3"
                variant="h3"
              >
                {" "}
                E-commerce app
              </Text>
              <div className="absolute border border-amber_700 border-solid h-[395px] right-[4%] rounded-lg top-[0] w-[34%]"></div>
            </div>
            <div className="absolute flex flex-col md:gap-10 gap-[469px] justify-start right-[6%] top-[2%] w-[43%]">
              <Img
                src="images/img_image8.png"
                className="h-[426px] sm:h-auto md:ml-[0] ml-[117px] object-cover rounded-lg w-[78%] md:w-full"
                alt="imageEight"
              />
              <Text
                className="font-bold text-center text-white_A700"
                variant="body4"
              >
                قائمة الرغبات والعناصر المحفوظة
              </Text>
            </div>
            <Img
              src="images/img_img03441.png"
              className="absolute bottom-[0] h-[441px] left-[2%] object-cover rounded-lg w-[32%]"
              alt="img03441"
            />
          </div>
          <Line className="bg-amber_700_3d h-px mt-[29px] w-3/5" />
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly mt-3 w-full">
            <Img
              src="images/img_ellipse3_4.png"
              className="md:flex-1 h-[558px] sm:h-auto md:mt-0 mt-[17px] object-cover w-[3%] md:w-full"
              alt="ellipseThree"
            />
            <div className="flex md:flex-1 flex-col justify-start md:px-5 w-[98%] md:w-full">
              <div className="flex md:flex-col flex-row gap-4 items-start justify-start mr-[92px] w-[93%] md:w-full">
                <div className="h-56 md:mt-0 mt-[155px] relative w-[64%] md:w-full">
                  <Text
                    className="font-normal m-auto text-center text-white_A700 w-full"
                    variant="body4"
                  >
                    {" "}
                    نحن نفخر بتقديم تصنيف منتجات واسع ومنظم جيدا. يتيح لك
                    تطبيقنا استكشاف فئات مختلفة بسهولة وتصفية النتائج ومقارنة
                    المنتجات لاتخاذ قرارات شراء مستنيرة. من خلال معلومات المنتج
                    المحدثة والصور عالية الجودة ، يمكنك اختيار المنتجات المناسبة
                    لاحتياجاتك بثقة.
                  </Text>
                  <Text
                    className="absolute font-bold inset-x-[0] mx-auto text-center text-white_A700 top-[6%] w-max"
                    variant="body4"
                  >
                    إدارة سلسة لتصنيف المنتجات
                  </Text>
                </div>
                <Img
                  src="images/img_img03431.png"
                  className="h-[427px] sm:h-auto object-cover rounded-lg w-[36%] md:w-full"
                  alt="img03431"
                />
              </div>
              <Line className="bg-amber_700_3d h-px md:ml-[0] ml-[716px] mt-[95px] w-[43%]" />
              <div className="flex flex-col gap-2.5 items-center justify-start md:ml-[0] ml-[71px] mt-[181px] w-[85%] md:w-full">
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
                    className="h-[22px] md:h-auto mb-[3px] md:ml-[0] ml-[242px] md:mt-0 mt-[51px] object-cover w-[22px]"
                    alt="instagramOne"
                  />
                  <Img
                    src="images/img_gmail1.png"
                    className="h-[22px] md:h-auto mb-[3px] md:ml-[0] ml-[22px] md:mt-0 mt-[51px] object-cover w-[22px]"
                    alt="gmailOne"
                  />
                </div>
                <Line className="bg-amber_700_70 h-px w-full" />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end max-w-[1044px] mt-[3px] mx-auto md:px-5 w-full">
            <Text
              className="font-normal mb-[7px] text-center text-gray_50"
              variant="body5"
            >
              الايميل
            </Text>
            <Text
              className="font-normal md:ml-[0] ml-[129px] md:mt-0 my-[3px] text-center text-gray_50"
              variant="body5"
            >
              رقم الهاتف
            </Text>
            <Img
              src="images/img_materialsymbol.svg"
              className="h-[15px] md:ml-[0] ml-[684px] md:mt-0 mt-[13px] w-[15px]"
              alt="materialsymbol"
            />
            <Text
              className="font-normal ml-3 md:ml-[0] md:mt-0 mt-[7px] text-gray_50"
              variant="body5"
            >
              العنوان
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start max-w-[1046px] mx-auto md:px-5 w-full">
            <Text className="mb-1 text-center text-white_A700" variant="body6">
              midas@gmail.com
            </Text>
            <Text
              className="mb-1.5 ml-11 sm:ml-[0] text-center text-white_A700"
              variant="body6"
            >
              +694 772 788 0505
            </Text>
            <Text
              className="sm:ml-[0] ml-[619px] sm:mt-0 mt-1.5 text-center text-white_A700"
              variant="body6"
            >
              العراق,بغداد,السيدية
            </Text>
          </div>
          <Line className="bg-blue_gray_100_0f h-px mt-[43px] w-full" />
        </div>
      </div>
    </>
  );
};

export default EcommerceappPage;
