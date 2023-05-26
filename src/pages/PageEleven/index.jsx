import React from "react";

import { Button, Img, Line, Text } from "components";
import Header from "components/Header";

const PageEleven = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col font-tajawal items-center justify-start mx-auto py-[3px] shadow-bs2 w-full">
        <div className="flex flex-col justify-start mb-[98px] w-full">
          <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row gap-4 items-start justify-between mt-16 w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-16 justify-start md:px-5 w-[53%] md:w-full">
              <div className="border-[3px] border-amber_700 border-dashed flex flex-col h-[494px] sm:h-auto items-center justify-start md:ml-[0] ml-[37px] p-[13px] rounded-[50%] w-[494px] sm:w-full">
                <Img
                  src="images/img_ellipse5.png"
                  className="h-[468px] md:h-auto object-cover rounded-[234px] w-[98%]"
                  alt="ellipseFive"
                />
              </div>
              <div className="h-[697px] relative w-full">
                <Img
                  src="images/img_rectangle146_697x479.png"
                  className="absolute h-[697px] inset-y-[0] left-[0] my-auto object-cover w-[72%]"
                  alt="rectangle146"
                />
                <Img
                  src="images/img_smilingportrai.png"
                  className="absolute bottom-[13%] h-[421px] object-cover right-[0] w-[94%]"
                  alt="smilingportrai"
                />
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-end justify-start md:mt-0 mt-[152px] md:px-5 w-[47%] md:w-full">
              <Text
                className="font-tajawal text-amber_700 text-center"
                as="h4"
                variant="h4"
              >
                <span className="md:text-[41.45px] sm:text-[35.45px] text-amber_700 text-[45.45px] font-bold">
                  طور مشروعك مع{" "}
                </span>
                <span className="md:text-[41.45px] sm:text-[35.45px] text-white_A700 text-[45.45px] font-bold">
                  ميداس
                </span>
              </Text>
              <Text
                className="font-normal font-tajawal mr-[69px] mt-[27px] text-right text-white_A700 w-[89%] sm:w-full"
                variant="body4"
              >
                لتقديم جميع الخدمات التي يحتاجها العميل في مجال التقنية والإعلام
                والتسويق.
              </Text>
              <div className="flex flex-row font-tajawal gap-[27px] items-center justify-end mt-[15px] w-[59%] md:w-full">
                <Button
                  className="cursor-pointer font-normal leading-[normal] min-w-[160px] text-amber_700 text-center text-lg"
                  shape="RoundedBorder10"
                  size="lg"
                  variant="OutlineAmber700_1"
                >
                  توصل معنا
                </Button>
                <Button
                  className="cursor-pointer font-normal leading-[normal] min-w-[160px] text-center text-gray_900 text-lg"
                  shape="RoundedBorder10"
                  size="lg"
                  variant="OutlineAmber700"
                >
                  خدماتنا
                </Button>
              </div>
              <Img
                src="images/img_rectangle148_167x478.png"
                className="h-[167px] sm:h-auto mt-[276px] object-cover w-[82%] md:w-full"
                alt="rectangle148"
              />
              <Text
                className="font-tajawal mt-[71px] text-amber_700_01 text-center w-[69%] sm:w-full"
                as="h5"
                variant="h5"
              >
                سوق لعملك في المكان المناسب
              </Text>
              <Text
                className="font-normal font-poppins mr-[38px] text-center text-white_A700_c1 w-[89%] sm:w-full"
                variant="body4"
              >
                {" "}
                نقدم خدمات متميزة وشاملة للشركات الراغبة في تحسين وتطوير عملها
                في مجال التسويق
              </Text>
            </div>
          </div>
          <Img
            src="images/img_rectangle149_19x954.png"
            className="h-[19px] sm:h-auto md:ml-[0] ml-[326px] mt-[103px] object-cover w-3/4 md:w-full"
            alt="rectangle149"
          />
          <div className="flex md:flex-col flex-row gap-[19px] items-start justify-start max-w-[1190px] mt-[158px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[21px] items-center justify-start md:mt-0 mt-[99px]">
              <Text
                className="text-amber_700_01 text-center"
                as="h5"
                variant="h5"
              >
                مَن نحن ؟
              </Text>
              <Text
                className="font-normal text-center text-white_A700_c1 w-full"
                variant="body4"
              >
                شركة يديرها عدة شباب وتقدم خدمات متنوعة وشاملة للشركات التي ترغب
                في تحسين وتطوير عملها في مجال التسويق وصناعة المحتوى والبرمجيات
                وأي خدمة يحتاجها العميل{" "}
              </Text>
            </div>
            <div className="md:h-[366px] h-[470px] relative w-1/2 md:w-full">
              <Img
                src="images/img_doutes.svg"
                className="absolute bottom-[0] h-[279px] left-[0]"
                alt="doutes"
              />
              <Img
                src="images/img_studentscollab.png"
                className="absolute h-[366px] object-cover right-[0] top-[0] w-[94%]"
                alt="studentscollab"
              />
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[339px] mt-[62px] text-amber_700 text-center"
            as="h5"
            variant="h5"
          >
            تعرف على اعضاء فريقنا المتميزين
          </Text>
          <div className="font-poppins md:ml-[0] ml-[38px] mt-[41px] overflow-x-auto w-[98%]">
            <div className="flex md:flex-col flex-row gap-7 items-center justify-between overflow-auto w-full">
              <div className="flex md:flex-1 flex-col gap-[21px] items-start justify-start md:px-5 w-[63%] md:w-full">
                <div className="flex sm:flex-col flex-row gap-7 items-center justify-between w-full">
                  <Img
                    src="images/img_rectangle133.png"
                    className="h-[378px] md:h-auto object-cover"
                    alt="rectangle133"
                  />
                  <Img
                    src="images/img_rectangle134.png"
                    className="h-[378px] md:h-auto object-cover"
                    alt="rectangle134"
                  />
                </div>
                <div className="flex flex-row sm:gap-10 items-start justify-between w-[74%] md:w-full">
                  <div className="flex flex-col gap-2 items-start justify-start mt-[29px]">
                    <Text
                      className="font-normal text-white_A700"
                      variant="body5"
                    >
                      Team Consultant
                    </Text>
                    <Text
                      className="font-semibold md:ml-[0] ml-[5px] text-white_A700"
                      variant="body5"
                    >
                      Simon Árpád
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="font-semibold text-white_A700"
                      variant="body5"
                    >
                      Mezei Ágnes
                    </Text>
                    <Text
                      className="font-normal text-white_A700"
                      variant="body5"
                    >
                      Financial Analyst
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:px-5 relative w-[63%] md:w-full">
                <div className="flex flex-row items-start justify-between my-auto w-[57%]">
                  <div className="flex flex-col items-start justify-start mt-[403px]">
                    <Text
                      className="font-semibold text-white_A700"
                      variant="body5"
                    >
                      Farkas Ágnes
                    </Text>
                    <Text
                      className="font-normal mt-0.5 text-white_A700"
                      variant="body5"
                    >
                      Web Developer IV
                    </Text>
                  </div>
                  <div className="flex h-[529px] justify-end relative w-[27%]">
                    <Text
                      className="absolute bottom-[12%] font-normal right-[0] text-white_A700"
                      variant="body5"
                    >
                      Financial Analyst
                    </Text>
                    <Text
                      className="font-semibold mb-[95px] ml-auto mt-auto text-white_A700"
                      variant="body5"
                    >
                      Mezei Ágnes
                    </Text>
                    <div className="absolute font-tajawal h-[529px] inset-[0] justify-center m-auto w-full">
                      <Img
                        src="images/img_ellipse2_529x118.png"
                        className="h-[529px] m-auto object-cover w-full"
                        alt="ellipseTwo"
                      />
                      <Text
                        className="absolute bottom-[3%] font-normal left-[0] text-white_A700"
                        variant="body5"
                      >
                        عرض المزيد
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_rectangle135.png"
                  className="h-[378px] ml-[undefinedpx] mt-[11px] object-cover w-[49%] z-[1]"
                  alt="rectangle135"
                />
                <Img
                  src="images/img_rectangle135.png"
                  className="h-[378px] ml-[-36px] mt-[11px] object-cover w-[49%] z-[1]"
                  alt="rectangle147"
                />
              </div>
            </div>
          </div>
          <div className="h-[597px] md:h-[687px] max-w-[1236px] mt-[90px] mx-auto md:px-5 relative w-full">
            <div className="absolute bottom-[32%] flex flex-col md:gap-10 gap-[91px] inset-x-[0] justify-start mx-auto w-full">
              <Img
                src="images/img_rectangle151_42x296.png"
                className="h-[42px] md:h-auto object-cover w-[24%]"
                alt="rectangle151"
              />
              <div className="bg-amber_700 h-[37px] md:ml-[0] ml-[869px] w-[30%]"></div>
            </div>
            <Img
              src="images/img_smilingportrai_597x895.png"
              className="absolute h-[597px] inset-y-[0] my-auto object-cover right-[11%] w-[73%]"
              alt="smilingportrai_One"
            />
          </div>
          <div className="h-4 md:h-[37px] md:ml-[0] ml-[622px] mt-[21px] md:px-5 relative w-[3%]">
            <Img
              src="images/img_contrast.svg"
              className="absolute h-4 inset-y-[0] my-auto right-[0]"
              alt="contrast"
            />
            <div className="absolute bg-blue_gray_100_68 bottom-[13%] h-2 left-[0] rounded-[50%] w-2"></div>
          </div>
          <Text
            className="md:ml-[0] ml-[591px] mt-[104px] text-amber_700 text-center"
            as="h5"
            variant="h5"
          >
            هدفنا
          </Text>
          <Text
            className="font-normal md:ml-[0] ml-[100px] mt-[18px] text-center text-white_A700_c1"
            variant="body4"
          >
            <>
              نسعى جاهدين لتحقيق النجاح المشترك مع عملائنا من خلال تزويدهم بأفضل
              الحلول والخدمات والدعم الفني المستمر. كما نهدف إلى تحقيق الريادة
              في مجالنا وتقديم حلول مبتكرة ومتطورة <br />
              تلبي احتياجات عملائنا وتتميز بالجودة والموثوقية.
            </>
          </Text>
          <Text
            className="md:ml-[0] ml-[577px] mt-[78px] text-amber_700 tracking-[0.40px]"
            as="h5"
            variant="h5"
          >
            خدماتنا
          </Text>
          <div className="font-tajawal md:gap-5 gap-[70px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1163px] min-h-[auto] mt-[42px] mx-auto md:px-5 w-full">
            <div
              className="bg-cover bg-no-repeat hover:border-solid hover:cursor-pointer flex flex-1 flex-col h-[255px] items-center justify-start p-6 sm:px-5 hover:shadow-bs3 hover:w-full w-full"
              style={{ backgroundImage: "url('images/img_group24.png')" }}
            >
              <div className="flex flex-col items-end justify-start mb-[13px] w-[98%] md:w-full">
                <div className="flex flex-row gap-[9px] items-start justify-end w-[46%] md:w-full">
                  <Img
                    src="images/img_arrowleft.svg"
                    className="h-[26px] w-[26px]"
                    alt="arrowleft"
                  />
                  <Text className="text-white_A700" variant="body3">
                    برمجيات
                  </Text>
                </div>
                <Text
                  className="font-normal leading-[32.00px] text-right text-shadow-ts text-white_A700"
                  variant="body5"
                >
                  <>
                    {" "}
                    نحرص على تطوير وانشاء البرامج الخاصة بالشركات وتحسينها
                    وإضافة المزيد من المزايا والخصائص التي تلبي احتياجات
                    العملاء.
                    <br />
                  </>
                </Text>
              </div>
            </div>
            <div className="bg-gradient3  p-px rounded-[10px] w-full ">
              <div
                className="bg-cover bg-gray_900 bg-no-repeat hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col h-[257px] items-start justify-start p-[19px] rounded-[10px] hover:shadow-bs3 shadow-bs3 hover:w-full w-full"
                style={{ backgroundImage: "url('images/img_group24.png')" }}
              >
                <div className="flex flex-col gap-3 items-end justify-start mb-[11px] mt-[3px] w-[96%] md:w-full">
                  <div className="flex flex-row gap-3 items-start justify-end w-[48%] md:w-full">
                    <Img
                      src="images/img_arrowleft_red_400.svg"
                      className="h-[27px] mt-[3px] w-[27px]"
                      alt="arrowleft"
                    />
                    <Text className="text-white_A700" variant="body3">
                      التسويق
                    </Text>
                  </div>
                  <Text
                    className="font-normal leading-[32.00px] mr-0.5 text-right text-shadow-ts text-white_A700"
                    variant="body5"
                  >
                    <span className="text-white_A700 text-xl font-tajawal">
                      نقدم خدمات متميزة ومبتكرة تتضمن التسويق بالمحتوى وإدارة
                      المحتوى والتصميم الجرافيكي وغيرها من الخدمات التي تساعد
                      الشركات...
                    </span>
                    <span className="text-white_A700 text-xl font-tajawal font-bold">
                      <>
                        قراءة المزيد
                        <br />
                      </>
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gradient4  p-px rounded-[10px] w-full ">
              <div
                className="bg-cover bg-gray_900 bg-no-repeat hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col h-[255px] items-center justify-start p-[19px] rounded-[10px] hover:shadow-bs3 shadow-bs3 hover:w-full w-full"
                style={{ backgroundImage: "url('images/img_group24.png')" }}
              >
                <div className="flex flex-col gap-[13px] items-end justify-start mb-2.5 w-[95%] md:w-full">
                  <div className="flex flex-row font-tajawal gap-[9px] items-end justify-end w-[76%] md:w-full">
                    <Img
                      src="images/img_arrowleft_amber_700.svg"
                      className="h-[26px] mt-[5px] w-[26px]"
                      alt="arrowleft"
                    />
                    <Text className="text-white_A700" variant="body2">
                      صناعة المحتوى
                    </Text>
                  </div>
                  <Text
                    className="font-normal font-poppins leading-[32.00px] text-right text-shadow-ts text-white_A700"
                    variant="body5"
                  >
                    <span className="text-white_A700 text-xl font-tajawal">
                      في مجال صناعة المحتوى، نحرص على تقديم محتوى ذو جودة عالية
                      ومتنوع للشركات الراغبة في إثراء مواقعها الإلكترونية
                      وحساباتها الاجتماعية ...
                    </span>
                    <span className="text-white_A700 text-xl font-tajawal font-bold">
                      <>
                        قراءة المزيد
                        <br />
                      </>
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat hover:border-solid hover:cursor-pointer flex flex-1 flex-col h-[255px] items-center justify-start p-[22px] sm:px-5 hover:shadow-bs3 hover:w-full w-full"
              style={{ backgroundImage: "url('images/img_group24.png')" }}
            >
              <div className="flex flex-col gap-3 items-end justify-start mb-[5px] w-[97%] md:w-full">
                <div className="flex flex-row gap-2 items-start justify-end w-[46%] md:w-full">
                  <Img
                    src="images/img_arrowleft_red_400.svg"
                    className="h-[26px] mt-1 w-[26px]"
                    alt="arrowleft"
                  />
                  <Text className="text-white_A700" variant="body3">
                    كورسات
                  </Text>
                </div>
                <Text
                  className="font-normal leading-[32.00px] text-right text-shadow-ts text-white_A700"
                  variant="body5"
                >
                  <span className="text-white_A700 text-xl font-tajawal">
                    أطلق العنان لإمكانياتك من خلال دوراتنا الشاملة المصممة
                    لتوفير المعرفة العملية ومهارات العالم الحقيقي ، تقدم دوراتنا
                    تجربة تعليمية ...
                  </span>
                  <span className="text-white_A700 text-xl font-tajawal font-bold">
                    <>
                      قراءة المزيد
                      <br />
                    </>
                  </span>
                </Text>
              </div>
            </div>
            <div className="bg-gradient5  p-px rounded-[10px] w-full ">
              <div
                className="bg-cover bg-gray_900 bg-no-repeat hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col h-[255px] items-center justify-start p-[22px] sm:px-5 rounded-[10px] hover:shadow-bs3 shadow-bs3 hover:w-full w-full"
                style={{ backgroundImage: "url('images/img_group24.png')" }}
              >
                <div className="flex flex-col gap-3 items-end justify-start mb-[5px] w-[97%] md:w-full">
                  <div className="flex flex-row gap-2 items-start justify-end w-[51%] md:w-full">
                    <Img
                      src="images/img_arrowleft_deep_purple_a400.svg"
                      className="h-[26px] mt-1 w-[26px]"
                      alt="arrowleft"
                    />
                    <Text className="text-white_A700" variant="body2">
                      بودكاست
                    </Text>
                  </div>
                  <Text
                    className="font-normal leading-[32.00px] text-right text-shadow-ts text-white_A700 w-full"
                    variant="body5"
                  >
                    <span className="text-white_A700 text-xl font-tajawal">
                      استمع واكتسب رؤى جديدة من خلال البودكاست المثير للتفكير ،
                      والذي يضم مناقشات جذابة. استمع إلى آراء الخبراء والقصص
                      الملهمة ...
                    </span>
                    <span className="text-white_A700 text-xl font-tajawal font-bold">
                      قراءة المزيد
                    </span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-tajawal md:gap-5 items-end justify-start max-w-[1045px] mt-[351px] mx-auto md:px-5 w-full">
            <Img
              src="images/img_asset1sh1.png"
              className="md:flex-1 h-[70px] sm:h-auto object-cover w-[8%] md:w-full"
              alt="asset1shTwo"
            />
            <Text
              className="mb-0.5 md:ml-[0] ml-[185px] md:mt-0 mt-12 text-center text-white_A700"
              variant="body7"
            >
              تقديم كافة الخدمات التي يحتاجها العميل في مجال التقنية والإعلام
              والتسويق.
            </Text>
            <Img
              src="images/img_instagram1.png"
              className="h-[22px] md:h-auto md:ml-[0] ml-[238px] md:mt-0 mt-12 object-cover w-[22px]"
              alt="instagramOne"
            />
            <Img
              src="images/img_gmail3.png"
              className="md:flex-1 h-[22px] sm:h-auto md:ml-[0] ml-[18px] md:mt-0 mt-12 object-cover w-[3%] md:w-full"
              alt="gmailTwo"
            />
          </div>
          <Line className="bg-amber_700_70 h-px max-w-[1051px] mt-4 mx-auto w-full" />
          <div className="flex sm:flex-col flex-row font-tajawal sm:gap-5 items-start justify-start max-w-[1046px] mt-2.5 mx-auto md:px-5 w-full">
            <Text
              className="font-normal mb-1 text-center text-gray_50"
              variant="body5"
            >
              الايميل
            </Text>
            <Text
              className="font-normal sm:ml-[0] ml-[132px] sm:mt-0 mt-[5px] text-center text-gray_50"
              variant="body5"
            >
              رقم الهاتف
            </Text>
            <Img
              src="images/img_location.svg"
              className="h-3 sm:ml-[0] ml-[685px] sm:mt-0 mt-1.5"
              alt="location"
            />
            <Text
              className="font-normal mb-[5px] ml-3.5 sm:ml-[0] text-gray_50"
              variant="body5"
            >
              العنوان
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row font-tajawal sm:gap-5 items-start justify-start max-w-[1048px] mx-auto md:px-5 w-full">
            <Text
              className="sm:mt-0 mt-1 text-center text-white_A700"
              variant="body6"
            >
              midas@gmail.com
            </Text>
            <Text
              className="sm:ml-[0] ml-[47px] text-center text-white_A700"
              variant="body6"
            >
              +694 772 788 0505
            </Text>
            <Text
              className="mb-1 sm:ml-[0] ml-[618px] text-center text-white_A700"
              variant="body6"
            >
              العراق,بغداد,السيدية
            </Text>
          </div>
          <Line className="bg-blue_gray_100_0f h-px ml-0.5 md:ml-[0] mt-[41px] w-full" />
        </div>
      </div>
    </>
  );
};

export default PageEleven;
