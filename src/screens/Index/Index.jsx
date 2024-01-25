import React from "react";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const Index = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="index">
      <div
        className="div"
        style={{
          height:
            screenWidth < 1024
              ? "7203.39px"
              : screenWidth >= 1024 && screenWidth < 1440
              ? "5332.19px"
              : screenWidth >= 1440 && screenWidth < 1920
              ? "5475.53px"
              : screenWidth >= 1920
              ? "5484.83px"
              : undefined,
          overflow: (screenWidth >= 1024 && screenWidth < 1440) || screenWidth < 1024 ? "hidden" : undefined,
          width:
            screenWidth < 1024
              ? "390.29px"
              : screenWidth >= 1024 && screenWidth < 1440
              ? "1024px"
              : screenWidth >= 1440 && screenWidth < 1920
              ? "1440px"
              : screenWidth >= 1920
              ? "1920px"
              : undefined,
        }}
      >
        {((screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920) && (
          <>
            <div
              className="overlap"
              style={{
                height: screenWidth >= 1440 && screenWidth < 1920 ? "721px" : screenWidth >= 1920 ? "730px" : undefined,
                width:
                  screenWidth >= 1440 && screenWidth < 1920 ? "1440px" : screenWidth >= 1920 ? "1920px" : undefined,
              }}
            >
              <div
                className="section"
                style={{
                  height:
                    screenWidth >= 1440 && screenWidth < 1920 ? "98px" : screenWidth >= 1920 ? "107px" : undefined,
                  width:
                    screenWidth >= 1440 && screenWidth < 1920 ? "1440px" : screenWidth >= 1920 ? "1920px" : undefined,
                }}
              >
                <div
                  className="div-elementor"
                  style={{
                    height:
                      screenWidth >= 1440 && screenWidth < 1920 ? "98px" : screenWidth >= 1920 ? "107px" : undefined,
                    left: screenWidth >= 1920 ? "160px" : undefined,
                    width: screenWidth >= 1920 ? "1600px" : undefined,
                  }}
                >
                  <div
                    className="div-elementor-widget"
                    style={{
                      height:
                        screenWidth >= 1440 && screenWidth < 1920 ? "98px" : screenWidth >= 1920 ? "107px" : undefined,
                      width:
                        screenWidth >= 1440 && screenWidth < 1920 ? "288px" : screenWidth >= 1920 ? "320px" : undefined,
                    }}
                  >
                    <div
                      className="trollface-png"
                      style={{
                        height:
                          screenWidth >= 1440 && screenWidth < 1920 ? "78px" : screenWidth >= 1920 ? "87px" : undefined,
                        left:
                          screenWidth >= 1440 && screenWidth < 1920
                            ? "97px"
                            : screenWidth >= 1920
                            ? "108px"
                            : undefined,
                        width:
                          screenWidth >= 1440 && screenWidth < 1920
                            ? "94px"
                            : screenWidth >= 1920
                            ? "105px"
                            : undefined,
                      }}
                    />
                  </div>
                  <div
                    className="link-wrapper"
                    style={{
                      height:
                        screenWidth >= 1440 && screenWidth < 1920 ? "98px" : screenWidth >= 1920 ? "107px" : undefined,
                      left:
                        screenWidth >= 1440 && screenWidth < 1920
                          ? "1142px"
                          : screenWidth >= 1920
                          ? "1269px"
                          : undefined,
                      width:
                        screenWidth >= 1440 && screenWidth < 1920 ? "288px" : screenWidth >= 1920 ? "320px" : undefined,
                    }}
                  >
                    <div className="link">
                      <div className="text-wrapper">Connect</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="section-wrapper"
                style={{
                  top: screenWidth >= 1440 && screenWidth < 1920 ? "93px" : screenWidth >= 1920 ? "102px" : undefined,
                  width:
                    screenWidth >= 1440 && screenWidth < 1920 ? "1440px" : screenWidth >= 1920 ? "1920px" : undefined,
                }}
              >
                <div
                  className="section-2"
                  style={{
                    left:
                      screenWidth >= 1440 && screenWidth < 1920 ? "160px" : screenWidth >= 1920 ? "400px" : undefined,
                  }}
                >
                  <div className="div-elementor-widget-2">
                    <div
                      className="heading"
                      style={{
                        height:
                          screenWidth >= 1920
                            ? "90px"
                            : screenWidth >= 1440 && screenWidth < 1920
                            ? "195px"
                            : undefined,
                        position:
                          screenWidth >= 1920
                            ? "absolute"
                            : screenWidth >= 1440 && screenWidth < 1920
                            ? "relative"
                            : undefined,
                      }}
                    >
                      {screenWidth >= 1920 && <div className="text-wrapper-2">TROLL</div>}

                      {screenWidth >= 1440 && screenWidth < 1920 && (
                        <>
                          <div className="div-wrapper">
                            <div className="text-wrapper-2">TROLL</div>
                          </div>
                          <div className="heading-2">
                            <div className="text-wrapper-3">Trollface is back</div>
                          </div>
                          <div className="div-elementor-widget-3">
                            <div className="link-2">
                              <div className="text-wrapper-4">Buy Now</div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    {screenWidth >= 1920 && (
                      <>
                        <div className="heading-3">
                          <div className="text-wrapper-3">Trollface is back</div>
                        </div>
                        <div className="div-elementor-widget-4">
                          <div className="link-2">
                            <div className="text-wrapper-4">Buy Now</div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="trollface-png-wrapper">
                    <div className="trollface-png-2" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="section-3"
              style={{
                top: screenWidth >= 1440 && screenWidth < 1920 ? "721px" : screenWidth >= 1920 ? "730px" : undefined,
                width:
                  screenWidth >= 1440 && screenWidth < 1920 ? "1440px" : screenWidth >= 1920 ? "1920px" : undefined,
              }}
            >
              <img
                className="div-elementor-shape"
                style={{
                  width:
                    screenWidth >= 1440 && screenWidth < 1920 ? "1440px" : screenWidth >= 1920 ? "1920px" : undefined,
                }}
                alt="Div elementor shape"
                src={
                  screenWidth >= 1440 && screenWidth < 1920
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/div-elementor-shape-14.svg"
                    : screenWidth >= 1920
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/div-elementor-shape.svg"
                    : undefined
                }
              />
              <div
                className="heading-listed-in"
                style={{
                  left: screenWidth >= 1440 && screenWidth < 1920 ? "302px" : screenWidth >= 1920 ? "542px" : undefined,
                }}
              >
                LISTED IN MULTIPLE EXCHANGES
              </div>
              <div
                className="section-4"
                style={{
                  left: screenWidth >= 1440 && screenWidth < 1920 ? "150px" : screenWidth >= 1920 ? "390px" : undefined,
                }}
              >
                <div className="div-elementor-column">
                  <div className="link-full-gate-io" />
                </div>
                <div className="link-HTX-logo-wrapper">
                  <div className="link-HTX-logo" />
                </div>
                <div className="div-elementor-column-2">
                  <div className="link-3" />
                </div>
                <div className="link-full-lbank-logo-wrapper">
                  <div className="link-full-lbank-logo" />
                </div>
                <div className="div-elementor-column-3">
                  <div className="link-4" />
                </div>
                <div className="link-full-bitmart-wrapper">
                  <div className="link-full-bitmart" />
                </div>
              </div>
              <div
                className="section-5"
                style={{
                  left: screenWidth >= 1440 && screenWidth < 1920 ? "150px" : screenWidth >= 1920 ? "390px" : undefined,
                }}
              >
                <div className="div-elementor-column-4">
                  <div className="link-5" />
                </div>
                <div className="link-screenshot-wrapper">
                  <div className="link-screenshot" />
                </div>
                <div className="div-elementor-column-5">
                  <div className="link-screenshot-2" />
                </div>
                <div className="link-ac-wrapper">
                  <div className="link-ac" />
                </div>
                <div className="link-review-wrapper">
                  <div className="link-review" />
                </div>
                <div className="link-download-wrapper">
                  <div className="link-download" />
                </div>
              </div>
              <div
                className="section-6"
                style={{
                  left: screenWidth >= 1440 && screenWidth < 1920 ? "30px" : screenWidth >= 1920 ? "270px" : undefined,
                }}
              >
                <div className="link-bitrue-logo-wrapper">
                  <div className="link-bitrue-logo" />
                </div>
                <div className="link-full-poloniex-wrapper">
                  <div className="link-full-poloniex" />
                </div>
                <div className="div-elementor-column-6">
                  <div className="link-screenshot-3" />
                </div>
                <div className="link-images-removebg-wrapper">
                  <div className="link-images-removebg" />
                </div>
                <div className="link-full-tapbit-wrapper">
                  <div className="link-full-tapbit" />
                </div>
                <div className="div-elementor-column-7">
                  <div className="link-6" />
                </div>
                <div className="div-elementor-column-8">
                  <div className="link-screenshot-4" />
                </div>
                <div className="link-digifinex-svg-wrapper">
                  <div className="link-digifinex-svg" />
                </div>
              </div>
            </div>
          </>
        )}

        <div
          className="section-7"
          style={{
            backgroundColor:
              (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                ? "#ffffff"
                : (screenWidth >= 1024 && screenWidth < 1440) || screenWidth < 1024
                ? "#000000"
                : undefined,
            height:
              (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                ? "797px"
                : screenWidth < 1024
                ? "114px"
                : screenWidth >= 1024 && screenWidth < 1440
                ? "78px"
                : undefined,
            top:
              screenWidth >= 1440 && screenWidth < 1920
                ? "1438px"
                : screenWidth >= 1920
                ? "1447px"
                : screenWidth < 1024
                ? "0"
                : screenWidth >= 1024 && screenWidth < 1440
                ? "1px"
                : undefined,
            width:
              screenWidth >= 1440 && screenWidth < 1920
                ? "1440px"
                : screenWidth >= 1920
                ? "1920px"
                : screenWidth < 1024
                ? "390px"
                : screenWidth >= 1024 && screenWidth < 1440
                ? "1024px"
                : undefined,
          }}
        >
          {((screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920) && (
            <>
              <img
                className="img"
                style={{
                  width:
                    screenWidth >= 1440 && screenWidth < 1920 ? "1440px" : screenWidth >= 1920 ? "1920px" : undefined,
                }}
                alt="Div elementor shape"
                src={
                  screenWidth >= 1440 && screenWidth < 1920
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/div-elementor-shape-15.svg"
                    : screenWidth >= 1920
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/div-elementor-shape-1.svg"
                    : undefined
                }
              />
              <img
                className="div-elementor-shape-2"
                style={{
                  width:
                    screenWidth >= 1440 && screenWidth < 1920 ? "1440px" : screenWidth >= 1920 ? "1920px" : undefined,
                }}
                alt="Div elementor shape"
                src={
                  screenWidth >= 1440 && screenWidth < 1920
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/div-elementor-shape-16.svg"
                    : screenWidth >= 1920
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/div-elementor-shape-2.svg"
                    : undefined
                }
              />
              <div
                className="div-elementor-2"
                style={{
                  left: screenWidth >= 1440 && screenWidth < 1920 ? "150px" : screenWidth >= 1920 ? "390px" : undefined,
                }}
              >
                <div className="div-elementor-widget-5">
                  <div className="div-2" />
                </div>
                <div className="div-elementor-widget-6">
                  <div
                    className="heading-4"
                    style={{
                      height:
                        screenWidth >= 1920 ? "80px" : screenWidth >= 1440 && screenWidth < 1920 ? "322px" : undefined,
                      left:
                        screenWidth >= 1920 ? "10px" : screenWidth >= 1440 && screenWidth < 1920 ? "9px" : undefined,
                      width:
                        screenWidth >= 1920 ? "550px" : screenWidth >= 1440 && screenWidth < 1920 ? "551px" : undefined,
                    }}
                  >
                    {screenWidth >= 1920 && <div className="text-wrapper-5">ABOUT</div>}

                    {screenWidth >= 1440 && screenWidth < 1920 && (
                      <>
                        <div className="heading-5">
                          <div className="text-wrapper-6">ABOUT</div>
                        </div>
                        <div className="TROLL-COIN-is-a-wrapper">
                          <p className="TROLL-COIN-is-a">
                            $TROLL COIN is a memebreaking
                            <br />
                            cryptocurrency that embraces the
                            <br />
                            spirit of internet culture. With a<br />
                            strong community and a renounced
                            <br />
                            contract, it aims to bring laughter
                            <br />
                            and fun. Join us on this exciting
                            <br />
                            journey to becoming one of the top
                            <br />
                            meme coins available on thy
                            <br />
                            internet.
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                  {screenWidth >= 1920 && (
                    <div className="heading-6">
                      <p className="p">
                        $TROLL COIN is a memebreaking
                        <br />
                        cryptocurrency that embraces the
                        <br />
                        spirit of internet culture. With a<br />
                        strong community and a renounced
                        <br />
                        contract, it aims to bring laughter
                        <br />
                        and fun. Join us on this exciting
                        <br />
                        journey to becoming one of the top
                        <br />
                        meme coins available on thy
                        <br />
                        internet.
                      </p>
                    </div>
                  )}

                  <div className="screenshot-png" />
                </div>
              </div>
            </>
          )}

          {((screenWidth >= 1024 && screenWidth < 1440) || screenWidth < 1024) && (
            <div
              className="div-elementor-3"
              style={{
                height: screenWidth < 1024 ? "114px" : screenWidth >= 1024 && screenWidth < 1440 ? "78px" : undefined,
              }}
            >
              <div
                className="div-elementor-widget-7"
                style={{
                  height: screenWidth < 1024 ? "114px" : screenWidth >= 1024 && screenWidth < 1440 ? "78px" : undefined,
                  width: screenWidth < 1024 ? "195px" : screenWidth >= 1024 && screenWidth < 1440 ? "205px" : undefined,
                }}
              >
                <div
                  className="trollface-png-3"
                  style={{
                    height:
                      screenWidth < 1024 ? "94px" : screenWidth >= 1024 && screenWidth < 1440 ? "54px" : undefined,
                    left: screenWidth < 1024 ? "41px" : screenWidth >= 1024 && screenWidth < 1440 ? "70px" : undefined,
                    top: screenWidth < 1024 ? "10px" : screenWidth >= 1024 && screenWidth < 1440 ? "12px" : undefined,
                    width:
                      screenWidth < 1024 ? "114px" : screenWidth >= 1024 && screenWidth < 1440 ? "65px" : undefined,
                  }}
                />
              </div>
              <div
                className="connect-wrapper"
                style={{
                  border: screenWidth < 1024 ? "1px solid" : undefined,
                  borderColor: screenWidth < 1024 ? "#ffffff" : undefined,
                  borderRadius: screenWidth < 1024 ? "30px" : undefined,
                  height: screenWidth < 1024 ? "40px" : screenWidth >= 1024 && screenWidth < 1440 ? "78px" : undefined,
                  left: screenWidth < 1024 ? "228px" : screenWidth >= 1024 && screenWidth < 1440 ? "812px" : undefined,
                  overflow: screenWidth < 1024 ? "hidden" : undefined,
                  top: screenWidth < 1024 ? "37px" : screenWidth >= 1024 && screenWidth < 1440 ? "0" : undefined,
                  width: screenWidth < 1024 ? "140px" : screenWidth >= 1024 && screenWidth < 1440 ? "205px" : undefined,
                }}
              >
                <div
                  className="connect"
                  style={{
                    border: screenWidth >= 1024 && screenWidth < 1440 ? "1px solid" : undefined,
                    borderColor: screenWidth >= 1024 && screenWidth < 1440 ? "#ffffff" : undefined,
                    borderRadius: screenWidth >= 1024 && screenWidth < 1440 ? "30px" : undefined,
                    color: screenWidth < 1024 ? "#ffffff" : undefined,
                    fontFamily: screenWidth < 1024 ? "'Inter', Helvetica" : undefined,
                    fontSize: screenWidth < 1024 ? "18px" : undefined,
                    fontWeight: screenWidth < 1024 ? "800" : undefined,
                    height:
                      screenWidth < 1024 ? "27px" : screenWidth >= 1024 && screenWidth < 1440 ? "40px" : undefined,
                    left: screenWidth < 1024 ? "13px" : screenWidth >= 1024 && screenWidth < 1440 ? "21px" : undefined,
                    letterSpacing: screenWidth < 1024 ? "3.00px" : undefined,
                    lineHeight: screenWidth < 1024 ? "27px" : undefined,
                    overflow: screenWidth >= 1024 && screenWidth < 1440 ? "hidden" : undefined,
                    position:
                      screenWidth < 1024
                        ? "absolute"
                        : screenWidth >= 1024 && screenWidth < 1440
                        ? "relative"
                        : undefined,
                    textAlign: screenWidth < 1024 ? "center" : undefined,
                    top: screenWidth < 1024 ? "5px" : screenWidth >= 1024 && screenWidth < 1440 ? "19px" : undefined,
                    whiteSpace: screenWidth < 1024 ? "nowrap" : undefined,
                    width:
                      screenWidth < 1024 ? "114px" : screenWidth >= 1024 && screenWidth < 1440 ? "140px" : undefined,
                  }}
                >
                  {screenWidth < 1024 && <>Connect</>}

                  {screenWidth >= 1024 && screenWidth < 1440 && <div className="text-wrapper">Connect</div>}
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          className="section-8"
          style={{
            height:
              (screenWidth >= 1024 && screenWidth < 1440) || screenWidth < 1024
                ? "628px"
                : (screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920
                ? "1116px"
                : undefined,
            top:
              screenWidth < 1024
                ? "114px"
                : screenWidth >= 1024 && screenWidth < 1440
                ? "79px"
                : screenWidth >= 1440 && screenWidth < 1920
                ? "2235px"
                : screenWidth >= 1920
                ? "2244px"
                : undefined,
            width:
              screenWidth < 1024
                ? "390px"
                : screenWidth >= 1024 && screenWidth < 1440
                ? "1024px"
                : screenWidth >= 1440 && screenWidth < 1920
                ? "1440px"
                : screenWidth >= 1920
                ? "1920px"
                : undefined,
          }}
        >
          {((screenWidth >= 1024 && screenWidth < 1440) || screenWidth < 1024) && (
            <div
              className="section-9"
              style={{
                height: screenWidth < 1024 ? "508px" : screenWidth >= 1024 && screenWidth < 1440 ? "308px" : undefined,
                top: screenWidth < 1024 ? "60px" : screenWidth >= 1024 && screenWidth < 1440 ? "160px" : undefined,
                width: screenWidth < 1024 ? "370px" : screenWidth >= 1024 && screenWidth < 1440 ? "1004px" : undefined,
              }}
            >
              <div
                className="div-elementor-widget-8"
                style={{
                  height:
                    screenWidth < 1024 ? "200px" : screenWidth >= 1024 && screenWidth < 1440 ? "308px" : undefined,
                  width: screenWidth < 1024 ? "370px" : screenWidth >= 1024 && screenWidth < 1440 ? "552px" : undefined,
                }}
              >
                <div
                  className="group"
                  style={{
                    height:
                      screenWidth >= 1024 && screenWidth < 1440 ? "196px" : screenWidth < 1024 ? "106px" : undefined,
                    left: screenWidth >= 1024 && screenWidth < 1440 ? "9px" : screenWidth < 1024 ? "41px" : undefined,
                    position:
                      screenWidth >= 1024 && screenWidth < 1440
                        ? "relative"
                        : screenWidth < 1024
                        ? "absolute"
                        : undefined,
                    top: screenWidth >= 1024 && screenWidth < 1440 ? "56px" : screenWidth < 1024 ? "-5px" : undefined,
                    width:
                      screenWidth >= 1024 && screenWidth < 1440 ? "532px" : screenWidth < 1024 ? "289px" : undefined,
                  }}
                >
                  {screenWidth >= 1024 && screenWidth < 1440 && (
                    <>
                      <div className="heading-7">
                        <div className="text-wrapper-7">TROLL</div>
                      </div>
                      <div className="heading-8">
                        <div className="text-wrapper-8">Trollface is back</div>
                      </div>
                      <div className="div-elementor-widget-9">
                        <div className="link-2">
                          <div className="text-wrapper-4">Buy Now</div>
                        </div>
                      </div>
                    </>
                  )}

                  {screenWidth < 1024 && <div className="text-wrapper-9">TROLL</div>}
                </div>
                {screenWidth < 1024 && (
                  <>
                    <div className="heading-9">
                      <div className="text-wrapper-8">Trollface is back</div>
                    </div>
                    <div className="div-elementor-widget-10">
                      <div className="link-7">
                        <div className="text-wrapper-10">Buy Now</div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div
                className="div-elementor-widget-11"
                style={{
                  left: screenWidth < 1024 ? "0" : screenWidth >= 1024 && screenWidth < 1440 ? "552px" : undefined,
                  top: screenWidth < 1024 ? "200px" : screenWidth >= 1024 && screenWidth < 1440 ? "0" : undefined,
                  width: screenWidth < 1024 ? "370px" : screenWidth >= 1024 && screenWidth < 1440 ? "452px" : undefined,
                }}
              >
                <div
                  className="trollface-png-4"
                  style={{
                    left: screenWidth < 1024 ? "12px" : screenWidth >= 1024 && screenWidth < 1440 ? "52px" : undefined,
                  }}
                />
              </div>
            </div>
          )}

          {((screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920) && (
            <>
              <div
                className="heading-HOW-TO-BUY"
                style={{
                  left: screenWidth >= 1440 && screenWidth < 1920 ? "525px" : screenWidth >= 1920 ? "765px" : undefined,
                }}
              >
                HOW TO BUY
              </div>
              <div
                className="div-elementor-wrapper"
                style={{
                  left: screenWidth >= 1440 && screenWidth < 1920 ? "160px" : screenWidth >= 1920 ? "400px" : undefined,
                }}
              >
                <div className="div-elementor-4">
                  <div className="untitled-design-wrapper">
                    <div className="untitled-design" />
                  </div>
                  <div className="div-elementor-widget-12">
                    <div className="heading-10">
                      <div className="text-wrapper-11">Create a Wallet</div>
                    </div>
                    <div className="download-metamask-or-wrapper">
                      <p
                        className="download-metamask-or"
                        style={{
                          fontSize:
                            screenWidth >= 1440 && screenWidth < 1920
                              ? "20.6px"
                              : screenWidth >= 1920
                              ? "20px"
                              : undefined,
                        }}
                      >
                        Download metamask or your wallet of choice from the app store
                        <br />
                        or google play store for free. Desktop users, download the
                        <br />
                        google chrome extension by going to metamask.io.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="section-10"
                style={{
                  left: screenWidth >= 1440 && screenWidth < 1920 ? "160px" : screenWidth >= 1920 ? "400px" : undefined,
                }}
              >
                <div className="div-elementor-4">
                  <div className="untitled-design-wrapper">
                    <div className="untitled-design-2" />
                  </div>
                  <div className="div-elementor-widget-12">
                    <div className="heading-11">
                      <div className="text-wrapper-12">Get Some BNB</div>
                    </div>
                    <div className="have-BNB-in-your-wrapper">
                      <p className="have-BNB-in-your">
                        Have BNB in your wallet to switch to $TROLL. If you don’t have
                        <br />
                        any BNB, you can buy directly on metamask, transfer from
                        <br />
                        another wallet, or buy on another exchange and send it to your
                        <br />
                        wallet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="section-11"
                style={{
                  left: screenWidth >= 1440 && screenWidth < 1920 ? "160px" : screenWidth >= 1920 ? "400px" : undefined,
                }}
              >
                <div className="div-elementor-5">
                  <div className="uniswap-webp-wrapper">
                    <div className="uniswap-webp" />
                  </div>
                  <div className="div-elementor-widget-13">
                    <div className="heading-11">
                      <div
                        className="text-wrapper-13"
                        style={{
                          height:
                            screenWidth >= 1440 && screenWidth < 1920
                              ? "54px"
                              : screenWidth >= 1920
                              ? "43px"
                              : undefined,
                          top:
                            screenWidth >= 1440 && screenWidth < 1920
                              ? "-13px"
                              : screenWidth >= 1920
                              ? "-8px"
                              : undefined,
                          width:
                            screenWidth >= 1440 && screenWidth < 1920
                              ? "356px"
                              : screenWidth >= 1920
                              ? "360px"
                              : undefined,
                        }}
                      >
                        Go to Pancakeswap
                      </div>
                    </div>
                    <div
                      className="connect-to-wrapper"
                      style={{
                        height:
                          screenWidth >= 1440 && screenWidth < 1920
                            ? "110px"
                            : screenWidth >= 1920
                            ? "153px"
                            : undefined,
                        top:
                          screenWidth >= 1440 && screenWidth < 1920 ? "60px" : screenWidth >= 1920 ? "40px" : undefined,
                      }}
                    >
                      <div
                        className="connect-to"
                        style={{
                          fontSize:
                            screenWidth >= 1440 && screenWidth < 1920
                              ? "20.8px"
                              : screenWidth >= 1920
                              ? "20px"
                              : undefined,
                          top:
                            screenWidth >= 1440 && screenWidth < 1920
                              ? "-3px"
                              : screenWidth >= 1920
                              ? "17px"
                              : undefined,
                        }}
                      >
                        {screenWidth >= 1440 && screenWidth < 1920 && (
                          <p className="text-wrapper-29">
                            Connect to Pancakeswap. Go to Pancakeswap in google
                            <br />
                            chrome or on the browser inside your Metamask app.
                            <br />
                            Connect your wallet. Paste the $TROLL token address
                            <br />
                            into Pancakeswap, select Troll, and confirm. When Metamask
                            <br />
                            prompts you for a wallet signature, sign.
                          </p>
                        )}

                        {screenWidth >= 1920 && (
                          <p className="text-wrapper-29">
                            Connect to Pancakeswap. Go to Pancakeswap in google chrome or
                            <br />
                            on the browser inside your Metamask app. Connect your wallet.
                            <br />
                            Paste the $TROLL token address into Pancakeswap, select Troll, and
                            <br />
                            confirm. When Metamask prompts you for a wallet signature,
                            <br />
                            sign.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="section-12"
                style={{
                  left: screenWidth >= 1440 && screenWidth < 1920 ? "160px" : screenWidth >= 1920 ? "400px" : undefined,
                }}
              >
                <div className="div-elementor-6">
                  <div className="div-elementor-widget-14">
                    <div className="trollface-png-5" />
                  </div>
                  <div className="div-elementor-widget-15">
                    <div className="heading-11">
                      <div className="text-wrapper-14">Switch BNB for Troll</div>
                    </div>
                    <div className="switch-BNB-for-TROLL-wrapper">
                      <p
                        className="switch-BNB-for-TROLL"
                        style={{
                          fontSize:
                            screenWidth >= 1440 && screenWidth < 1920
                              ? "20.6px"
                              : screenWidth >= 1920
                              ? "20px"
                              : undefined,
                        }}
                      >
                        Switch BNB for $TROLL. We have ZERO taxes so you don’t
                        <br />
                        need to worry about buying with a specific slippage, although
                        <br />
                        you may need to use slippage during times of market volatility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        {((screenWidth >= 1440 && screenWidth < 1920) || screenWidth >= 1920) && (
          <>
            <div
              className="section-13"
              style={{
                top: screenWidth >= 1440 && screenWidth < 1920 ? "3350px" : screenWidth >= 1920 ? "3360px" : undefined,
                width:
                  screenWidth >= 1440 && screenWidth < 1920 ? "1440px" : screenWidth >= 1920 ? "1920px" : undefined,
              }}
            >
              <img
                className="div-elementor-shape-3"
                style={{
                  width:
                    screenWidth >= 1440 && screenWidth < 1920 ? "1440px" : screenWidth >= 1920 ? "1920px" : undefined,
                }}
                alt="Div elementor shape"
                src={
                  screenWidth >= 1440 && screenWidth < 1920
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/div-elementor-shape-17.svg"
                    : screenWidth >= 1920
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/div-elementor-shape-3.svg"
                    : undefined
                }
              />
              <img
                className="div-elementor-shape-4"
                style={{
                  width:
                    screenWidth >= 1440 && screenWidth < 1920 ? "1440px" : screenWidth >= 1920 ? "1920px" : undefined,
                }}
                alt="Div elementor shape"
                src={
                  screenWidth >= 1440 && screenWidth < 1920
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/div-elementor-shape-18.svg"
                    : screenWidth >= 1920
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/div-elementor-shape-4.svg"
                    : undefined
                }
              />
              <div
                className="heading-TOKENOMICS"
                style={{
                  left: screenWidth >= 1440 && screenWidth < 1920 ? "516px" : screenWidth >= 1920 ? "756px" : undefined,
                }}
              >
                TOKENOMICS
              </div>
              <div
                className="section-14"
                style={{
                  left: screenWidth >= 1440 && screenWidth < 1920 ? "160px" : screenWidth >= 1920 ? "400px" : undefined,
                }}
              >
                <div className="div-elementor-7">
                  <div className="div-elementor-widget-16">
                    <div
                      className="heading-12"
                      style={{
                        height:
                          screenWidth >= 1440 && screenWidth < 1920 ? "30px" : screenWidth >= 1920 ? "42px" : undefined,
                        left:
                          screenWidth >= 1440 && screenWidth < 1920
                            ? "20px"
                            : screenWidth >= 1920
                            ? "152px"
                            : undefined,
                        top:
                          screenWidth >= 1440 && screenWidth < 1920
                            ? "102px"
                            : screenWidth >= 1920
                            ? "96px"
                            : undefined,
                        width:
                          screenWidth >= 1440 && screenWidth < 1920
                            ? "518px"
                            : screenWidth >= 1920
                            ? "255px"
                            : undefined,
                      }}
                    >
                      <div
                        className="text-wrapper-15"
                        style={{
                          left:
                            screenWidth >= 1440 && screenWidth < 1920 ? "132px" : screenWidth >= 1920 ? "0" : undefined,
                          top:
                            screenWidth >= 1440 && screenWidth < 1920
                              ? "-7px"
                              : screenWidth >= 1920
                              ? "-1px"
                              : undefined,
                        }}
                      >
                        Token Supply
                      </div>
                    </div>
                    <div
                      className="heading-13"
                      style={{
                        height:
                          screenWidth >= 1440 && screenWidth < 1920 ? "30px" : screenWidth >= 1920 ? "34px" : undefined,
                        left:
                          screenWidth >= 1440 && screenWidth < 1920
                            ? "20px"
                            : screenWidth >= 1920
                            ? "109px"
                            : undefined,
                        top:
                          screenWidth >= 1440 && screenWidth < 1920
                            ? "152px"
                            : screenWidth >= 1920
                            ? "150px"
                            : undefined,
                        width:
                          screenWidth >= 1440 && screenWidth < 1920
                            ? "518px"
                            : screenWidth >= 1920
                            ? "341px"
                            : undefined,
                      }}
                    >
                      <div
                        className="text-wrapper-16"
                        style={{
                          left:
                            screenWidth >= 1440 && screenWidth < 1920 ? "89px" : screenWidth >= 1920 ? "0" : undefined,
                          top:
                            screenWidth >= 1440 && screenWidth < 1920
                              ? "-3px"
                              : screenWidth >= 1920
                              ? "-1px"
                              : undefined,
                        }}
                      >
                        960,420,000,000,000
                      </div>
                    </div>
                    <div
                      className="tax-sell-tax-buy-wrapper"
                      style={{
                        height:
                          screenWidth >= 1440 && screenWidth < 1920
                            ? "30px"
                            : screenWidth >= 1920
                            ? "103px"
                            : undefined,
                        left:
                          screenWidth >= 1440 && screenWidth < 1920 ? "20px" : screenWidth >= 1920 ? "30px" : undefined,
                        top:
                          screenWidth >= 1440 && screenWidth < 1920
                            ? "202px"
                            : screenWidth >= 1920
                            ? "196px"
                            : undefined,
                        width:
                          screenWidth >= 1440 && screenWidth < 1920
                            ? "518px"
                            : screenWidth >= 1920
                            ? "497px"
                            : undefined,
                      }}
                    >
                      <p
                        className="tax-sell-tax-buy"
                        style={{
                          height:
                            screenWidth >= 1440 && screenWidth < 1920
                              ? "117px"
                              : screenWidth >= 1920
                              ? "103px"
                              : undefined,
                          left:
                            screenWidth >= 1440 && screenWidth < 1920 ? "18px" : screenWidth >= 1920 ? "0" : undefined,
                          top:
                            screenWidth >= 1440 && screenWidth < 1920
                              ? "-7px"
                              : screenWidth >= 1920
                              ? "-1px"
                              : undefined,
                          width:
                            screenWidth >= 1440 && screenWidth < 1920
                              ? "500px"
                              : screenWidth >= 1920
                              ? "497px"
                              : undefined,
                        }}
                      >
                        Tax Sell: 5% - Tax Buy : 5%
                        <br />
                        Liquidity Pool 95%
                        <br />
                        CEX 5%
                      </p>
                    </div>
                  </div>
                  <div className="div-elementor-widget-wrapper">
                    <div className="troll-face-gif-wrapper">
                      <div className="troll-face-gif" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="overlap-wrapper"
              style={{
                top: screenWidth >= 1440 && screenWidth < 1920 ? "4028px" : screenWidth >= 1920 ? "4037px" : undefined,
                width:
                  screenWidth >= 1440 && screenWidth < 1920 ? "1440px" : screenWidth >= 1920 ? "1920px" : undefined,
              }}
            >
              <div className="overlap-group">
                <div
                  className="div-elementor-8"
                  style={{
                    width:
                      screenWidth >= 1440 && screenWidth < 1920 ? "1440px" : screenWidth >= 1920 ? "1920px" : undefined,
                  }}
                />
                <div
                  className="heading-ROADMAP"
                  style={{
                    left:
                      screenWidth >= 1440 && screenWidth < 1920 ? "571px" : screenWidth >= 1920 ? "811px" : undefined,
                  }}
                >
                  ROADMAP
                </div>
                <div
                  className="section-15"
                  style={{
                    left:
                      screenWidth >= 1440 && screenWidth < 1920 ? "150px" : screenWidth >= 1920 ? "390px" : undefined,
                  }}
                >
                  <div className="dgzmk-fdd-wrapper">
                    <div className="dgzmk-fdd" />
                  </div>
                  <div className="div-elementor-widget-17">
                    <div className="heading-14">
                      <div className="text-wrapper-17">Phase 1: Troll</div>
                    </div>
                    <div className="heading-15">
                      <p className="text-wrapper-18">Phase 2: Troll and HODL</p>
                    </div>
                    <div className="heading-16">
                      <div className="text-wrapper-19">Phase 3: Troll Takeover</div>
                    </div>
                  </div>
                  <div className="div-elementor-widget-18">
                    <div className="dgzmk-fdd-2" />
                  </div>
                </div>
                <div
                  className="section-16"
                  style={{
                    left:
                      screenWidth >= 1440 && screenWidth < 1920 ? "480px" : screenWidth >= 1920 ? "720px" : undefined,
                  }}
                >
                  <div className="heading-17">
                    <div className="text-wrapper-20">$TROLL</div>
                  </div>
                  <div
                    className="list-item-strong-wrapper"
                    style={{
                      height:
                        screenWidth >= 1440 && screenWidth < 1920 ? "249px" : screenWidth >= 1920 ? "200px" : undefined,
                      top:
                        screenWidth >= 1440 && screenWidth < 1920 ? "44px" : screenWidth >= 1920 ? "69px" : undefined,
                      width:
                        screenWidth >= 1440 && screenWidth < 1920 ? "342px" : screenWidth >= 1920 ? "383px" : undefined,
                    }}
                  >
                    <p
                      className="list-item-strong"
                      style={{
                        top:
                          screenWidth >= 1440 && screenWidth < 1920
                            ? "-1px"
                            : screenWidth >= 1920
                            ? "-26px"
                            : undefined,
                      }}
                    >
                      Launch
                      <br />
                      CoinGecko/ Coinmarketcap 
                      <br />
                      Listings
                      <br />
                      1,000+ Holders
                      <br />
                      Get $TROLL 
                      <br />
                      Trending on twitter
                      <br />
                      with our memetic power
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="section-17"
              style={{
                top: screenWidth >= 1440 && screenWidth < 1920 ? "4716px" : screenWidth >= 1920 ? "4726px" : undefined,
                width:
                  screenWidth >= 1440 && screenWidth < 1920 ? "1440px" : screenWidth >= 1920 ? "1920px" : undefined,
              }}
            >
              <img
                className="div-elementor-shape-5"
                style={{
                  width:
                    screenWidth >= 1440 && screenWidth < 1920 ? "1440px" : screenWidth >= 1920 ? "1920px" : undefined,
                }}
                alt="Div elementor shape"
                src={
                  screenWidth >= 1440 && screenWidth < 1920
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/div-elementor-shape-19.svg"
                    : screenWidth >= 1920
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/div-elementor-shape-5.svg"
                    : undefined
                }
              />
              <img
                className="div-elementor-shape-6"
                style={{
                  width:
                    screenWidth >= 1440 && screenWidth < 1920 ? "1440px" : screenWidth >= 1920 ? "1920px" : undefined,
                }}
                alt="Div elementor shape"
                src={
                  screenWidth >= 1440 && screenWidth < 1920
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/div-elementor-shape-20.svg"
                    : screenWidth >= 1920
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/div-elementor-shape-6.svg"
                    : undefined
                }
              />
              <div
                className="heading-CONTACT"
                style={{
                  left: screenWidth >= 1440 && screenWidth < 1920 ? "602px" : screenWidth >= 1920 ? "842px" : undefined,
                }}
              >
                CONTACT
              </div>
              <div
                className="troll-face-gif-2"
                style={{
                  left: screenWidth >= 1440 && screenWidth < 1920 ? "496px" : screenWidth >= 1920 ? "736px" : undefined,
                }}
              />
              <img
                className="link-8"
                style={{
                  left: screenWidth >= 1440 && screenWidth < 1920 ? "580px" : screenWidth >= 1920 ? "820px" : undefined,
                }}
                alt="Link"
                src={
                  screenWidth >= 1440 && screenWidth < 1920
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link-6.svg"
                    : screenWidth >= 1920
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link.svg"
                    : undefined
                }
              />
              <img
                className="link-9"
                style={{
                  left: screenWidth >= 1440 && screenWidth < 1920 ? "680px" : screenWidth >= 1920 ? "920px" : undefined,
                }}
                alt="Link"
                src={
                  screenWidth >= 1440 && screenWidth < 1920
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link-7.svg"
                    : screenWidth >= 1920
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link-1.svg"
                    : undefined
                }
              />
              <img
                className="link-10"
                style={{
                  left:
                    screenWidth >= 1440 && screenWidth < 1920 ? "780px" : screenWidth >= 1920 ? "1020px" : undefined,
                }}
                alt="Link"
                src={
                  screenWidth >= 1440 && screenWidth < 1920
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link-8.svg"
                    : screenWidth >= 1920
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link-2.svg"
                    : undefined
                }
              />
            </div>
            <div
              className="section-18"
              style={{
                top: screenWidth >= 1440 && screenWidth < 1920 ? "5388px" : screenWidth >= 1920 ? "5397px" : undefined,
                width:
                  screenWidth >= 1440 && screenWidth < 1920 ? "1440px" : screenWidth >= 1920 ? "1920px" : undefined,
              }}
            >
              <div
                className="heading-trollerc"
                style={{
                  left: screenWidth >= 1440 && screenWidth < 1920 ? "616px" : screenWidth >= 1920 ? "856px" : undefined,
                }}
              >
                TrollERC20@gmx.de
              </div>
              <p
                className="heading-by"
                style={{
                  left: screenWidth >= 1440 && screenWidth < 1920 ? "521px" : screenWidth >= 1920 ? "761px" : undefined,
                }}
              >
                © 2023 by TROLL. All rights reserved!
              </p>
            </div>
          </>
        )}

        {((screenWidth >= 1024 && screenWidth < 1440) || screenWidth < 1024) && (
          <>
            <div
              className="section-19"
              style={{
                height: screenWidth < 1024 ? "788px" : screenWidth >= 1024 && screenWidth < 1440 ? "673px" : undefined,
                top: screenWidth < 1024 ? "743px" : screenWidth >= 1024 && screenWidth < 1440 ? "707px" : undefined,
                width: screenWidth < 1024 ? "390px" : screenWidth >= 1024 && screenWidth < 1440 ? "1024px" : undefined,
              }}
            >
              <img
                className="div-elementor-shape-7"
                style={{
                  width:
                    screenWidth < 1024 ? "390px" : screenWidth >= 1024 && screenWidth < 1440 ? "1024px" : undefined,
                }}
                alt="Div elementor shape"
                src={
                  screenWidth < 1024
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/div-elementor-shape-7.svg"
                    : screenWidth >= 1024 && screenWidth < 1440
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/div-elementor-shape-21.svg"
                    : undefined
                }
              />
              <div
                className="heading-listed-in-2"
                style={{
                  fontSize:
                    screenWidth < 1024 ? "30px" : screenWidth >= 1024 && screenWidth < 1440 ? "40px" : undefined,
                  height: screenWidth < 1024 ? "102px" : screenWidth >= 1024 && screenWidth < 1440 ? "40px" : undefined,
                  left: screenWidth < 1024 ? "77px" : screenWidth >= 1024 && screenWidth < 1440 ? "94px" : undefined,
                  lineHeight:
                    screenWidth < 1024 ? "30px" : screenWidth >= 1024 && screenWidth < 1440 ? "40px" : undefined,
                  top: screenWidth < 1024 ? "103px" : screenWidth >= 1024 && screenWidth < 1440 ? "159px" : undefined,
                  whiteSpace: screenWidth >= 1024 && screenWidth < 1440 ? "nowrap" : undefined,
                  width: screenWidth < 1024 ? "236px" : screenWidth >= 1024 && screenWidth < 1440 ? "836px" : undefined,
                }}
              >
                {screenWidth < 1024 && (
                  <>
                    LISTED IN
                    <br />
                    MULTIPLE
                    <br />
                    EXCHANGES
                  </>
                )}

                {screenWidth >= 1024 && screenWidth < 1440 && <>LISTED IN MULTIPLE EXCHANGES</>}
              </div>
              <div
                className="section-20"
                style={{
                  height: screenWidth < 1024 ? "125px" : screenWidth >= 1024 && screenWidth < 1440 ? "97px" : undefined,
                  width:
                    screenWidth < 1024 ? "370px" : screenWidth >= 1024 && screenWidth < 1440 ? "1004px" : undefined,
                }}
              >
                <div
                  className="link-full-gate-io-wrapper"
                  style={{
                    height:
                      screenWidth < 1024 ? "67px" : screenWidth >= 1024 && screenWidth < 1440 ? "97px" : undefined,
                    width:
                      screenWidth < 1024 ? "122px" : screenWidth >= 1024 && screenWidth < 1440 ? "167px" : undefined,
                  }}
                >
                  <div
                    className="link-full-gate-io-2"
                    style={{
                      backgroundImage:
                        screenWidth < 1024
                          ? "url(https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link---full-gate-io-logo-768x176-png@2x.png)"
                          : screenWidth >= 1024 && screenWidth < 1440
                          ? "url(https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link---full-gate-io-logo-1536x352-png@2x.png)"
                          : undefined,
                      height:
                        screenWidth < 1024 ? "21px" : screenWidth >= 1024 && screenWidth < 1440 ? "27px" : undefined,
                      left:
                        screenWidth < 1024 ? "15px" : screenWidth >= 1024 && screenWidth < 1440 ? "25px" : undefined,
                      top: screenWidth < 1024 ? "25px" : screenWidth >= 1024 && screenWidth < 1440 ? "35px" : undefined,
                      width:
                        screenWidth < 1024 ? "92px" : screenWidth >= 1024 && screenWidth < 1440 ? "117px" : undefined,
                    }}
                  />
                </div>
                <div
                  className="div-elementor-column-9"
                  style={{
                    height:
                      screenWidth < 1024 ? "67px" : screenWidth >= 1024 && screenWidth < 1440 ? "97px" : undefined,
                    left:
                      screenWidth < 1024 ? "122px" : screenWidth >= 1024 && screenWidth < 1440 ? "167px" : undefined,
                    width:
                      screenWidth < 1024 ? "122px" : screenWidth >= 1024 && screenWidth < 1440 ? "167px" : undefined,
                  }}
                >
                  <div
                    className="link-HTX-logo-2"
                    style={{
                      height:
                        screenWidth < 1024 ? "37px" : screenWidth >= 1024 && screenWidth < 1440 ? "47px" : undefined,
                      left:
                        screenWidth < 1024 ? "15px" : screenWidth >= 1024 && screenWidth < 1440 ? "25px" : undefined,
                      top: screenWidth < 1024 ? "15px" : screenWidth >= 1024 && screenWidth < 1440 ? "25px" : undefined,
                      width:
                        screenWidth < 1024 ? "92px" : screenWidth >= 1024 && screenWidth < 1440 ? "117px" : undefined,
                    }}
                  />
                </div>
                <div
                  className="div-elementor-column-10"
                  style={{
                    height:
                      screenWidth < 1024 ? "67px" : screenWidth >= 1024 && screenWidth < 1440 ? "97px" : undefined,
                    left:
                      screenWidth < 1024 ? "244px" : screenWidth >= 1024 && screenWidth < 1440 ? "335px" : undefined,
                    width:
                      screenWidth < 1024 ? "122px" : screenWidth >= 1024 && screenWidth < 1440 ? "167px" : undefined,
                  }}
                >
                  <div
                    className="link-11"
                    style={{
                      backgroundImage:
                        screenWidth < 1024
                          ? "url(https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link---1-xxpjizoimoywt69edwqita-removebg-preview-768x202-png@2x.png)"
                          : screenWidth >= 1024 && screenWidth < 1440
                          ? "url(https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link---1-xxpjizoimoywt69edwqita-removebg-preview-png@2x.png)"
                          : undefined,
                      height:
                        screenWidth < 1024 ? "24px" : screenWidth >= 1024 && screenWidth < 1440 ? "31px" : undefined,
                      left:
                        screenWidth < 1024 ? "15px" : screenWidth >= 1024 && screenWidth < 1440 ? "25px" : undefined,
                      top: screenWidth < 1024 ? "22px" : screenWidth >= 1024 && screenWidth < 1440 ? "33px" : undefined,
                      width:
                        screenWidth < 1024 ? "92px" : screenWidth >= 1024 && screenWidth < 1440 ? "117px" : undefined,
                    }}
                  />
                </div>
                <div
                  className="div-elementor-column-11"
                  style={{
                    height:
                      screenWidth < 1024 ? "58px" : screenWidth >= 1024 && screenWidth < 1440 ? "97px" : undefined,
                    left: screenWidth < 1024 ? "0" : screenWidth >= 1024 && screenWidth < 1440 ? "502px" : undefined,
                    top: screenWidth < 1024 ? "67px" : screenWidth >= 1024 && screenWidth < 1440 ? "0" : undefined,
                    width:
                      screenWidth < 1024 ? "122px" : screenWidth >= 1024 && screenWidth < 1440 ? "167px" : undefined,
                  }}
                >
                  <div
                    className="link-full-lbank-logo-2"
                    style={{
                      backgroundImage:
                        screenWidth < 1024
                          ? "url(https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link---full-lbank-logo-768x145-webp@2x.png)"
                          : screenWidth >= 1024 && screenWidth < 1440
                          ? "url(https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link---full-lbank-logo-1536x291-webp@2x.png)"
                          : undefined,
                      height:
                        screenWidth < 1024 ? "17px" : screenWidth >= 1024 && screenWidth < 1440 ? "22px" : undefined,
                      left:
                        screenWidth < 1024 ? "15px" : screenWidth >= 1024 && screenWidth < 1440 ? "25px" : undefined,
                      top: screenWidth < 1024 ? "22px" : screenWidth >= 1024 && screenWidth < 1440 ? "39px" : undefined,
                      width:
                        screenWidth < 1024 ? "92px" : screenWidth >= 1024 && screenWidth < 1440 ? "117px" : undefined,
                    }}
                  />
                </div>
                <div
                  className="div-elementor-column-12"
                  style={{
                    height:
                      screenWidth < 1024 ? "58px" : screenWidth >= 1024 && screenWidth < 1440 ? "97px" : undefined,
                    left:
                      screenWidth < 1024 ? "122px" : screenWidth >= 1024 && screenWidth < 1440 ? "669px" : undefined,
                    top: screenWidth < 1024 ? "67px" : screenWidth >= 1024 && screenWidth < 1440 ? "0" : undefined,
                    width:
                      screenWidth < 1024 ? "122px" : screenWidth >= 1024 && screenWidth < 1440 ? "167px" : undefined,
                  }}
                >
                  <div
                    className="link-12"
                    style={{
                      height:
                        screenWidth < 1024 ? "27px" : screenWidth >= 1024 && screenWidth < 1440 ? "34px" : undefined,
                      left:
                        screenWidth < 1024 ? "15px" : screenWidth >= 1024 && screenWidth < 1440 ? "25px" : undefined,
                      top: screenWidth < 1024 ? "16px" : screenWidth >= 1024 && screenWidth < 1440 ? "31px" : undefined,
                      width:
                        screenWidth < 1024 ? "92px" : screenWidth >= 1024 && screenWidth < 1440 ? "117px" : undefined,
                    }}
                  />
                </div>
                <div
                  className="div-elementor-column-13"
                  style={{
                    height:
                      screenWidth < 1024 ? "58px" : screenWidth >= 1024 && screenWidth < 1440 ? "97px" : undefined,
                    left:
                      screenWidth < 1024 ? "244px" : screenWidth >= 1024 && screenWidth < 1440 ? "837px" : undefined,
                    top: screenWidth < 1024 ? "67px" : screenWidth >= 1024 && screenWidth < 1440 ? "0" : undefined,
                    width:
                      screenWidth < 1024 ? "122px" : screenWidth >= 1024 && screenWidth < 1440 ? "167px" : undefined,
                  }}
                >
                  <div
                    className="link-full-bitmart-2"
                    style={{
                      backgroundImage:
                        screenWidth < 1024
                          ? "url(https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link---full-bitmart-logo-768x198-webp@2x.png)"
                          : screenWidth >= 1024 && screenWidth < 1440
                          ? "url(https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link---full-bitmart-logo-1536x396-webp@2x.png)"
                          : undefined,
                      height:
                        screenWidth < 1024 ? "24px" : screenWidth >= 1024 && screenWidth < 1440 ? "30px" : undefined,
                      left:
                        screenWidth < 1024 ? "15px" : screenWidth >= 1024 && screenWidth < 1440 ? "25px" : undefined,
                      top: screenWidth < 1024 ? "18px" : screenWidth >= 1024 && screenWidth < 1440 ? "33px" : undefined,
                      width:
                        screenWidth < 1024 ? "92px" : screenWidth >= 1024 && screenWidth < 1440 ? "117px" : undefined,
                    }}
                  />
                </div>
              </div>
              <div
                className="section-21"
                style={{
                  height:
                    screenWidth < 1024 ? "133px" : screenWidth >= 1024 && screenWidth < 1440 ? "109px" : undefined,
                  top: screenWidth < 1024 ? "345px" : screenWidth >= 1024 && screenWidth < 1440 ? "317px" : undefined,
                  width:
                    screenWidth < 1024 ? "370px" : screenWidth >= 1024 && screenWidth < 1440 ? "1004px" : undefined,
                }}
              >
                <div
                  className="div-elementor-column-14"
                  style={{
                    height:
                      screenWidth < 1024 ? "57px" : screenWidth >= 1024 && screenWidth < 1440 ? "109px" : undefined,
                    width:
                      screenWidth < 1024 ? "122px" : screenWidth >= 1024 && screenWidth < 1440 ? "167px" : undefined,
                  }}
                >
                  <div
                    className="link-13"
                    style={{
                      height:
                        screenWidth < 1024 ? "25px" : screenWidth >= 1024 && screenWidth < 1440 ? "32px" : undefined,
                      left:
                        screenWidth < 1024 ? "15px" : screenWidth >= 1024 && screenWidth < 1440 ? "25px" : undefined,
                      top: screenWidth < 1024 ? "17px" : screenWidth >= 1024 && screenWidth < 1440 ? "39px" : undefined,
                      width:
                        screenWidth < 1024 ? "92px" : screenWidth >= 1024 && screenWidth < 1440 ? "117px" : undefined,
                    }}
                  />
                </div>
                <div
                  className="div-elementor-column-15"
                  style={{
                    height:
                      screenWidth < 1024 ? "57px" : screenWidth >= 1024 && screenWidth < 1440 ? "109px" : undefined,
                    left:
                      screenWidth < 1024 ? "122px" : screenWidth >= 1024 && screenWidth < 1440 ? "167px" : undefined,
                    width:
                      screenWidth < 1024 ? "122px" : screenWidth >= 1024 && screenWidth < 1440 ? "167px" : undefined,
                  }}
                >
                  <div
                    className="link-screenshot-5"
                    style={{
                      backgroundImage:
                        screenWidth < 1024
                          ? "url(https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link---screenshot-2-removebg-preview-768x218-png@2x.png)"
                          : screenWidth >= 1024 && screenWidth < 1440
                          ? "url(https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link---screenshot-2-removebg-preview-png@2x.png)"
                          : undefined,
                      height:
                        screenWidth < 1024 ? "26px" : screenWidth >= 1024 && screenWidth < 1440 ? "33px" : undefined,
                      left:
                        screenWidth < 1024 ? "15px" : screenWidth >= 1024 && screenWidth < 1440 ? "25px" : undefined,
                      top: screenWidth < 1024 ? "16px" : screenWidth >= 1024 && screenWidth < 1440 ? "38px" : undefined,
                      width:
                        screenWidth < 1024 ? "92px" : screenWidth >= 1024 && screenWidth < 1440 ? "117px" : undefined,
                    }}
                  />
                </div>
                <div
                  className="div-elementor-column-16"
                  style={{
                    height:
                      screenWidth < 1024 ? "57px" : screenWidth >= 1024 && screenWidth < 1440 ? "109px" : undefined,
                    left:
                      screenWidth < 1024 ? "244px" : screenWidth >= 1024 && screenWidth < 1440 ? "335px" : undefined,
                    width:
                      screenWidth < 1024 ? "122px" : screenWidth >= 1024 && screenWidth < 1440 ? "167px" : undefined,
                  }}
                >
                  <div
                    className="link-screenshot-6"
                    style={{
                      backgroundImage:
                        screenWidth < 1024
                          ? "url(https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link---screenshot-3-removebg-preview-768x192-png@2x.png)"
                          : screenWidth >= 1024 && screenWidth < 1440
                          ? "url(https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link---screenshot-3-removebg-preview-png@2x.png)"
                          : undefined,
                      height:
                        screenWidth < 1024 ? "23px" : screenWidth >= 1024 && screenWidth < 1440 ? "29px" : undefined,
                      left:
                        screenWidth < 1024 ? "15px" : screenWidth >= 1024 && screenWidth < 1440 ? "25px" : undefined,
                      top: screenWidth < 1024 ? "19px" : screenWidth >= 1024 && screenWidth < 1440 ? "40px" : undefined,
                      width:
                        screenWidth < 1024 ? "92px" : screenWidth >= 1024 && screenWidth < 1440 ? "117px" : undefined,
                    }}
                  />
                </div>
                <div
                  className="div-elementor-column-17"
                  style={{
                    height:
                      screenWidth < 1024 ? "76px" : screenWidth >= 1024 && screenWidth < 1440 ? "109px" : undefined,
                    left: screenWidth < 1024 ? "0" : screenWidth >= 1024 && screenWidth < 1440 ? "502px" : undefined,
                    top: screenWidth < 1024 ? "57px" : screenWidth >= 1024 && screenWidth < 1440 ? "0" : undefined,
                    width:
                      screenWidth < 1024 ? "122px" : screenWidth >= 1024 && screenWidth < 1440 ? "167px" : undefined,
                  }}
                >
                  <div
                    className="link-14"
                    style={{
                      backgroundImage:
                        screenWidth < 1024
                          ? "url(https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link---0a27c-1-zwfoeuqhsnxudcesnr6la-768x130-png@2x.png)"
                          : screenWidth >= 1024 && screenWidth < 1440
                          ? "url(https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link---0a27c-1-zwfoeuqhsnxudcesnr6la-png@2x.png)"
                          : undefined,
                      height:
                        screenWidth < 1024 ? "16px" : screenWidth >= 1024 && screenWidth < 1440 ? "20px" : undefined,
                      left:
                        screenWidth < 1024 ? "15px" : screenWidth >= 1024 && screenWidth < 1440 ? "25px" : undefined,
                      top: screenWidth < 1024 ? "33px" : screenWidth >= 1024 && screenWidth < 1440 ? "47px" : undefined,
                      width:
                        screenWidth < 1024 ? "92px" : screenWidth >= 1024 && screenWidth < 1440 ? "117px" : undefined,
                    }}
                  />
                </div>
                <div
                  className="link-review-cfdac-wrapper"
                  style={{
                    height:
                      screenWidth < 1024 ? "76px" : screenWidth >= 1024 && screenWidth < 1440 ? "109px" : undefined,
                    left:
                      screenWidth < 1024 ? "122px" : screenWidth >= 1024 && screenWidth < 1440 ? "669px" : undefined,
                    top: screenWidth < 1024 ? "57px" : screenWidth >= 1024 && screenWidth < 1440 ? "0" : undefined,
                    width:
                      screenWidth < 1024 ? "122px" : screenWidth >= 1024 && screenWidth < 1440 ? "167px" : undefined,
                  }}
                >
                  <div
                    className="link-review-cfdac"
                    style={{
                      height:
                        screenWidth < 1024 ? "46px" : screenWidth >= 1024 && screenWidth < 1440 ? "59px" : undefined,
                      left:
                        screenWidth < 1024 ? "15px" : screenWidth >= 1024 && screenWidth < 1440 ? "25px" : undefined,
                      top: screenWidth < 1024 ? "15px" : screenWidth >= 1024 && screenWidth < 1440 ? "25px" : undefined,
                      width:
                        screenWidth < 1024 ? "92px" : screenWidth >= 1024 && screenWidth < 1440 ? "117px" : undefined,
                    }}
                  />
                </div>
                <div
                  className="div-elementor-column-18"
                  style={{
                    height:
                      screenWidth < 1024 ? "76px" : screenWidth >= 1024 && screenWidth < 1440 ? "109px" : undefined,
                    left:
                      screenWidth < 1024 ? "244px" : screenWidth >= 1024 && screenWidth < 1440 ? "837px" : undefined,
                    top: screenWidth < 1024 ? "57px" : screenWidth >= 1024 && screenWidth < 1440 ? "0" : undefined,
                    width:
                      screenWidth < 1024 ? "122px" : screenWidth >= 1024 && screenWidth < 1440 ? "167px" : undefined,
                  }}
                >
                  <div
                    className="link-download-2"
                    style={{
                      height:
                        screenWidth < 1024 ? "25px" : screenWidth >= 1024 && screenWidth < 1440 ? "31px" : undefined,
                      left:
                        screenWidth < 1024 ? "15px" : screenWidth >= 1024 && screenWidth < 1440 ? "25px" : undefined,
                      top: screenWidth < 1024 ? "27px" : screenWidth >= 1024 && screenWidth < 1440 ? "39px" : undefined,
                      width:
                        screenWidth < 1024 ? "92px" : screenWidth >= 1024 && screenWidth < 1440 ? "117px" : undefined,
                    }}
                  />
                </div>
              </div>
              <div
                className="section-22"
                style={{
                  height: screenWidth < 1024 ? "200px" : screenWidth >= 1024 && screenWidth < 1440 ? "88px" : undefined,
                  top: screenWidth < 1024 ? "478px" : screenWidth >= 1024 && screenWidth < 1440 ? "425px" : undefined,
                  width:
                    screenWidth < 1024 ? "370px" : screenWidth >= 1024 && screenWidth < 1440 ? "1004px" : undefined,
                }}
              >
                <div
                  className="div-elementor-column-19"
                  style={{
                    height:
                      screenWidth < 1024 ? "59px" : screenWidth >= 1024 && screenWidth < 1440 ? "88px" : undefined,
                    width:
                      screenWidth < 1024 ? "122px" : screenWidth >= 1024 && screenWidth < 1440 ? "126px" : undefined,
                  }}
                >
                  <div
                    className="link-bitrue-logo-2"
                    style={{
                      height:
                        screenWidth < 1024 ? "29px" : screenWidth >= 1024 && screenWidth < 1440 ? "24px" : undefined,
                      left:
                        screenWidth < 1024 ? "15px" : screenWidth >= 1024 && screenWidth < 1440 ? "25px" : undefined,
                      top: screenWidth < 1024 ? "15px" : screenWidth >= 1024 && screenWidth < 1440 ? "33px" : undefined,
                      width:
                        screenWidth < 1024 ? "92px" : screenWidth >= 1024 && screenWidth < 1440 ? "76px" : undefined,
                    }}
                  />
                </div>
                <div
                  className="div-elementor-column-20"
                  style={{
                    height:
                      screenWidth < 1024 ? "59px" : screenWidth >= 1024 && screenWidth < 1440 ? "88px" : undefined,
                    left:
                      screenWidth < 1024 ? "122px" : screenWidth >= 1024 && screenWidth < 1440 ? "126px" : undefined,
                    width:
                      screenWidth < 1024 ? "122px" : screenWidth >= 1024 && screenWidth < 1440 ? "126px" : undefined,
                  }}
                >
                  <div
                    className="link-full-poloniex-2"
                    style={{
                      backgroundImage:
                        screenWidth < 1024
                          ? "url(https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link---full-poloniex-logo-removebg-preview-768x230-png@2x.png)"
                          : screenWidth >= 1024 && screenWidth < 1440
                          ? "url(https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link---full-poloniex-logo-removebg-preview-png@2x.png)"
                          : undefined,
                      height:
                        screenWidth < 1024 ? "28px" : screenWidth >= 1024 && screenWidth < 1440 ? "23px" : undefined,
                      left:
                        screenWidth < 1024 ? "15px" : screenWidth >= 1024 && screenWidth < 1440 ? "25px" : undefined,
                      top: screenWidth < 1024 ? "16px" : screenWidth >= 1024 && screenWidth < 1440 ? "34px" : undefined,
                      width:
                        screenWidth < 1024 ? "92px" : screenWidth >= 1024 && screenWidth < 1440 ? "76px" : undefined,
                    }}
                  />
                </div>
                <div
                  className="div-elementor-column-21"
                  style={{
                    height:
                      screenWidth < 1024 ? "59px" : screenWidth >= 1024 && screenWidth < 1440 ? "88px" : undefined,
                    left:
                      screenWidth < 1024 ? "244px" : screenWidth >= 1024 && screenWidth < 1440 ? "251px" : undefined,
                    width:
                      screenWidth < 1024 ? "122px" : screenWidth >= 1024 && screenWidth < 1440 ? "126px" : undefined,
                  }}
                >
                  <div
                    className="link-screenshot-7"
                    style={{
                      backgroundImage:
                        screenWidth < 1024
                          ? "url(https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link---screenshot-2-removebg-preview-2-768x197-png@2x.png)"
                          : screenWidth >= 1024 && screenWidth < 1440
                          ? "url(https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link---screenshot-2-removebg-preview-2-png@2x.png)"
                          : undefined,
                      height:
                        screenWidth < 1024 ? "24px" : screenWidth >= 1024 && screenWidth < 1440 ? "19px" : undefined,
                      left:
                        screenWidth < 1024 ? "15px" : screenWidth >= 1024 && screenWidth < 1440 ? "25px" : undefined,
                      top: screenWidth < 1024 ? "19px" : screenWidth >= 1024 && screenWidth < 1440 ? "36px" : undefined,
                      width:
                        screenWidth < 1024 ? "92px" : screenWidth >= 1024 && screenWidth < 1440 ? "76px" : undefined,
                    }}
                  />
                </div>
                <div
                  className="div-elementor-column-22"
                  style={{
                    height:
                      screenWidth < 1024 ? "76px" : screenWidth >= 1024 && screenWidth < 1440 ? "88px" : undefined,
                    left: screenWidth < 1024 ? "0" : screenWidth >= 1024 && screenWidth < 1440 ? "376px" : undefined,
                    top: screenWidth < 1024 ? "59px" : screenWidth >= 1024 && screenWidth < 1440 ? "0" : undefined,
                    width:
                      screenWidth < 1024 ? "122px" : screenWidth >= 1024 && screenWidth < 1440 ? "126px" : undefined,
                  }}
                >
                  <div
                    className="link-images-removebg-2"
                    style={{
                      height:
                        screenWidth < 1024 ? "17px" : screenWidth >= 1024 && screenWidth < 1440 ? "14px" : undefined,
                      left:
                        screenWidth < 1024 ? "15px" : screenWidth >= 1024 && screenWidth < 1440 ? "25px" : undefined,
                      top: screenWidth < 1024 ? "32px" : screenWidth >= 1024 && screenWidth < 1440 ? "39px" : undefined,
                      width:
                        screenWidth < 1024 ? "92px" : screenWidth >= 1024 && screenWidth < 1440 ? "76px" : undefined,
                    }}
                  />
                </div>
                <div
                  className="div-elementor-column-23"
                  style={{
                    height:
                      screenWidth < 1024 ? "76px" : screenWidth >= 1024 && screenWidth < 1440 ? "88px" : undefined,
                    left:
                      screenWidth < 1024 ? "122px" : screenWidth >= 1024 && screenWidth < 1440 ? "502px" : undefined,
                    top: screenWidth < 1024 ? "59px" : screenWidth >= 1024 && screenWidth < 1440 ? "0" : undefined,
                    width:
                      screenWidth < 1024 ? "122px" : screenWidth >= 1024 && screenWidth < 1440 ? "126px" : undefined,
                  }}
                >
                  <div
                    className="link-full-tapbit-2"
                    style={{
                      backgroundImage:
                        screenWidth < 1024
                          ? "url(https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link---full-tapbit-logo-removebg-preview-768x282-png@2x.png)"
                          : screenWidth >= 1024 && screenWidth < 1440
                          ? "url(https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link---full-tapbit-logo-removebg-preview-png@2x.png)"
                          : undefined,
                      height:
                        screenWidth < 1024 ? "34px" : screenWidth >= 1024 && screenWidth < 1440 ? "28px" : undefined,
                      left:
                        screenWidth < 1024 ? "15px" : screenWidth >= 1024 && screenWidth < 1440 ? "25px" : undefined,
                      top: screenWidth < 1024 ? "21px" : screenWidth >= 1024 && screenWidth < 1440 ? "30px" : undefined,
                      width:
                        screenWidth < 1024 ? "92px" : screenWidth >= 1024 && screenWidth < 1440 ? "76px" : undefined,
                    }}
                  />
                </div>
                <div
                  className="div-elementor-column-24"
                  style={{
                    height:
                      screenWidth < 1024 ? "76px" : screenWidth >= 1024 && screenWidth < 1440 ? "88px" : undefined,
                    left:
                      screenWidth < 1024 ? "244px" : screenWidth >= 1024 && screenWidth < 1440 ? "628px" : undefined,
                    top: screenWidth < 1024 ? "59px" : screenWidth >= 1024 && screenWidth < 1440 ? "0" : undefined,
                    width:
                      screenWidth < 1024 ? "122px" : screenWidth >= 1024 && screenWidth < 1440 ? "126px" : undefined,
                  }}
                >
                  <div
                    className="link-15"
                    style={{
                      height:
                        screenWidth < 1024 ? "46px" : screenWidth >= 1024 && screenWidth < 1440 ? "38px" : undefined,
                      left:
                        screenWidth < 1024 ? "15px" : screenWidth >= 1024 && screenWidth < 1440 ? "25px" : undefined,
                      top: screenWidth < 1024 ? "15px" : screenWidth >= 1024 && screenWidth < 1440 ? "25px" : undefined,
                      width:
                        screenWidth < 1024 ? "92px" : screenWidth >= 1024 && screenWidth < 1440 ? "76px" : undefined,
                    }}
                  />
                </div>
                <div
                  className="div-elementor-column-25"
                  style={{
                    height:
                      screenWidth < 1024 ? "65px" : screenWidth >= 1024 && screenWidth < 1440 ? "88px" : undefined,
                    left: screenWidth < 1024 ? "0" : screenWidth >= 1024 && screenWidth < 1440 ? "753px" : undefined,
                    top: screenWidth < 1024 ? "135px" : screenWidth >= 1024 && screenWidth < 1440 ? "0" : undefined,
                    width:
                      screenWidth < 1024 ? "185px" : screenWidth >= 1024 && screenWidth < 1440 ? "126px" : undefined,
                  }}
                >
                  <div
                    className="link-screenshot-8"
                    style={{
                      height:
                        screenWidth < 1024 ? "35px" : screenWidth >= 1024 && screenWidth < 1440 ? "24px" : undefined,
                      left:
                        screenWidth < 1024 ? "38px" : screenWidth >= 1024 && screenWidth < 1440 ? "25px" : undefined,
                      top: screenWidth < 1024 ? "15px" : screenWidth >= 1024 && screenWidth < 1440 ? "33px" : undefined,
                      width:
                        screenWidth < 1024 ? "109px" : screenWidth >= 1024 && screenWidth < 1440 ? "76px" : undefined,
                    }}
                  />
                </div>
                <div
                  className="div-elementor-column-26"
                  style={{
                    height:
                      screenWidth < 1024 ? "65px" : screenWidth >= 1024 && screenWidth < 1440 ? "88px" : undefined,
                    left:
                      screenWidth < 1024 ? "185px" : screenWidth >= 1024 && screenWidth < 1440 ? "878px" : undefined,
                    top: screenWidth < 1024 ? "135px" : screenWidth >= 1024 && screenWidth < 1440 ? "0" : undefined,
                    width:
                      screenWidth < 1024 ? "185px" : screenWidth >= 1024 && screenWidth < 1440 ? "126px" : undefined,
                  }}
                >
                  <div
                    className="link-digifinex-svg-2"
                    style={{
                      backgroundImage:
                        screenWidth < 1024
                          ? "url(https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link---digifinex-svg-768x140-png@2x.png)"
                          : screenWidth >= 1024 && screenWidth < 1440
                          ? "url(https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link---digifinex-svg-1536x280-png@2x.png)"
                          : undefined,
                      height:
                        screenWidth < 1024 ? "20px" : screenWidth >= 1024 && screenWidth < 1440 ? "14px" : undefined,
                      left:
                        screenWidth < 1024 ? "38px" : screenWidth >= 1024 && screenWidth < 1440 ? "25px" : undefined,
                      top: screenWidth < 1024 ? "25px" : screenWidth >= 1024 && screenWidth < 1440 ? "39px" : undefined,
                      width:
                        screenWidth < 1024 ? "109px" : screenWidth >= 1024 && screenWidth < 1440 ? "76px" : undefined,
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              className="section-23"
              style={{
                height: screenWidth < 1024 ? "988px" : screenWidth >= 1024 && screenWidth < 1440 ? "736px" : undefined,
                top: screenWidth < 1024 ? "1531px" : screenWidth >= 1024 && screenWidth < 1440 ? "1380px" : undefined,
                width: screenWidth < 1024 ? "390px" : screenWidth >= 1024 && screenWidth < 1440 ? "1024px" : undefined,
              }}
            >
              <img
                className="div-elementor-shape-8"
                style={{
                  width:
                    screenWidth < 1024 ? "390px" : screenWidth >= 1024 && screenWidth < 1440 ? "1024px" : undefined,
                }}
                alt="Div elementor shape"
                src={
                  screenWidth < 1024
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/div-elementor-shape-8.svg"
                    : screenWidth >= 1024 && screenWidth < 1440
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/div-elementor-shape-22.svg"
                    : undefined
                }
              />
              <img
                className="div-elementor-shape-9"
                style={{
                  top: screenWidth < 1024 ? "929px" : screenWidth >= 1024 && screenWidth < 1440 ? "677px" : undefined,
                  width:
                    screenWidth < 1024 ? "390px" : screenWidth >= 1024 && screenWidth < 1440 ? "1024px" : undefined,
                }}
                alt="Div elementor shape"
                src={
                  screenWidth < 1024
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/div-elementor-shape-9.svg"
                    : screenWidth >= 1024 && screenWidth < 1440
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/div-elementor-shape-23.svg"
                    : undefined
                }
              />
              <div
                className="div-elementor-9"
                style={{
                  height:
                    screenWidth < 1024 ? "788px" : screenWidth >= 1024 && screenWidth < 1440 ? "536px" : undefined,
                  width:
                    screenWidth < 1024 ? "390px" : screenWidth >= 1024 && screenWidth < 1440 ? "1024px" : undefined,
                }}
              >
                <div
                  className="div-elementor-widget-19"
                  style={{
                    height:
                      screenWidth < 1024 ? "408px" : screenWidth >= 1024 && screenWidth < 1440 ? "536px" : undefined,
                    width:
                      screenWidth < 1024 ? "390px" : screenWidth >= 1024 && screenWidth < 1440 ? "512px" : undefined,
                  }}
                >
                  <div
                    className="div-3"
                    style={{
                      height:
                        screenWidth < 1024 ? "388px" : screenWidth >= 1024 && screenWidth < 1440 ? "516px" : undefined,
                      width:
                        screenWidth < 1024 ? "370px" : screenWidth >= 1024 && screenWidth < 1440 ? "492px" : undefined,
                    }}
                  />
                </div>
                <div
                  className="div-elementor-widget-20"
                  style={{
                    height:
                      screenWidth < 1024 ? "380px" : screenWidth >= 1024 && screenWidth < 1440 ? "536px" : undefined,
                    left: screenWidth < 1024 ? "0" : screenWidth >= 1024 && screenWidth < 1440 ? "512px" : undefined,
                    top: screenWidth < 1024 ? "408px" : screenWidth >= 1024 && screenWidth < 1440 ? "0" : undefined,
                    width:
                      screenWidth < 1024 ? "390px" : screenWidth >= 1024 && screenWidth < 1440 ? "512px" : undefined,
                  }}
                >
                  <div
                    className="overlap-group-2"
                    style={{
                      height:
                        screenWidth >= 1024 && screenWidth < 1440 ? "372px" : screenWidth < 1024 ? "30px" : undefined,
                      top:
                        screenWidth >= 1024 && screenWidth < 1440 ? "-36px" : screenWidth < 1024 ? "10px" : undefined,
                      width:
                        screenWidth >= 1024 && screenWidth < 1440 ? "485px" : screenWidth < 1024 ? "370px" : undefined,
                    }}
                  >
                    <div
                      className="text-wrapper-21"
                      style={{
                        fontSize:
                          screenWidth < 1024 ? "30px" : screenWidth >= 1024 && screenWidth < 1440 ? "80px" : undefined,
                        height:
                          screenWidth < 1024 ? "42px" : screenWidth >= 1024 && screenWidth < 1440 ? "113px" : undefined,
                        left:
                          screenWidth < 1024 ? "118px" : screenWidth >= 1024 && screenWidth < 1440 ? "81px" : undefined,
                        lineHeight:
                          screenWidth < 1024 ? "30px" : screenWidth >= 1024 && screenWidth < 1440 ? "80px" : undefined,
                        top: screenWidth < 1024 ? "-7px" : screenWidth >= 1024 && screenWidth < 1440 ? "0" : undefined,
                        width:
                          screenWidth < 1024
                            ? "134px"
                            : screenWidth >= 1024 && screenWidth < 1440
                            ? "331px"
                            : undefined,
                      }}
                    >
                      ABOUT
                    </div>
                    {screenWidth >= 1024 && screenWidth < 1440 && (
                      <div className="heading-18">
                        <p className="TROLL-COIN-is-a-2">
                          $TROLL COIN is a memebreaking
                          <br />
                          cryptocurrency that embraces
                          <br />
                          the spirit of internet culture.
                          <br />
                          With a strong community and a<br />
                          renounced contract, it aims to
                          <br />
                          bring laughter and fun. Join us
                          <br />
                          on this exciting journey to
                          <br />
                          becoming one of the top meme
                          <br />
                          coins available on thy internet.
                        </p>
                      </div>
                    )}
                  </div>
                  {screenWidth < 1024 && (
                    <div className="heading-19">
                      <p className="TROLL-COIN-is-a-3">
                        $TROLL COIN is a<br />
                        memebreaking cryptocurrency
                        <br />
                        that embraces the spirit of
                        <br />
                        internet culture. With a strong
                        <br />
                        community and a renounced
                        <br />
                        contract, it aims to bring
                        <br />
                        laughter and fun. Join us on
                        <br />
                        this exciting journey to
                        <br />
                        becoming one of the top meme
                        <br />
                        coins available on thy internet.
                      </p>
                    </div>
                  )}

                  <div
                    className="screenshot-png-2"
                    style={{
                      height:
                        screenWidth >= 1024 && screenWidth < 1440 ? "146px" : screenWidth < 1024 ? "110px" : undefined,
                      top:
                        screenWidth >= 1024 && screenWidth < 1440 ? "355px" : screenWidth < 1024 ? "260px" : undefined,
                      width:
                        screenWidth >= 1024 && screenWidth < 1440 ? "492px" : screenWidth < 1024 ? "370px" : undefined,
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              className="section-24"
              style={{
                height:
                  screenWidth < 1024 ? "2239px" : screenWidth >= 1024 && screenWidth < 1440 ? "1138px" : undefined,
                top: screenWidth < 1024 ? "2519px" : screenWidth >= 1024 && screenWidth < 1440 ? "2116px" : undefined,
                width: screenWidth < 1024 ? "390px" : screenWidth >= 1024 && screenWidth < 1440 ? "1024px" : undefined,
              }}
            >
              <div
                className="heading-HOW-TO-BUY-2"
                style={{
                  fontSize:
                    screenWidth < 1024 ? "30px" : screenWidth >= 1024 && screenWidth < 1440 ? "50px" : undefined,
                  height: screenWidth < 1024 ? "30px" : screenWidth >= 1024 && screenWidth < 1440 ? "50px" : undefined,
                  left: screenWidth < 1024 ? "72px" : screenWidth >= 1024 && screenWidth < 1440 ? "317px" : undefined,
                  lineHeight:
                    screenWidth < 1024 ? "30px" : screenWidth >= 1024 && screenWidth < 1440 ? "50px" : undefined,
                  width: screenWidth < 1024 ? "246px" : screenWidth >= 1024 && screenWidth < 1440 ? "390px" : undefined,
                }}
              >
                HOW TO BUY
              </div>
              <div
                className="section-25"
                style={{
                  height:
                    screenWidth < 1024 ? "437px" : screenWidth >= 1024 && screenWidth < 1440 ? "191px" : undefined,
                  top: screenWidth < 1024 ? "130px" : screenWidth >= 1024 && screenWidth < 1440 ? "150px" : undefined,
                  width:
                    screenWidth < 1024 ? "370px" : screenWidth >= 1024 && screenWidth < 1440 ? "1004px" : undefined,
                }}
              >
                <div
                  className="div-elementor-10"
                  style={{
                    height:
                      screenWidth < 1024 ? "404px" : screenWidth >= 1024 && screenWidth < 1440 ? "158px" : undefined,
                    width:
                      screenWidth < 1024 ? "337px" : screenWidth >= 1024 && screenWidth < 1440 ? "971px" : undefined,
                  }}
                >
                  <div
                    className="div-elementor-widget-21"
                    style={{
                      width:
                        screenWidth < 1024 ? "337px" : screenWidth >= 1024 && screenWidth < 1440 ? "225px" : undefined,
                    }}
                  >
                    <div
                      className="untitled-design-3"
                      style={{
                        left:
                          screenWidth < 1024 ? "99px" : screenWidth >= 1024 && screenWidth < 1440 ? "44px" : undefined,
                      }}
                    />
                  </div>
                  <div
                    className="div-elementor-widget-22"
                    style={{
                      height:
                        screenWidth < 1024 ? "246px" : screenWidth >= 1024 && screenWidth < 1440 ? "158px" : undefined,
                      left: screenWidth < 1024 ? "0" : screenWidth >= 1024 && screenWidth < 1440 ? "225px" : undefined,
                      top: screenWidth < 1024 ? "158px" : screenWidth >= 1024 && screenWidth < 1440 ? "0" : undefined,
                      width:
                        screenWidth < 1024 ? "337px" : screenWidth >= 1024 && screenWidth < 1440 ? "745px" : undefined,
                    }}
                  >
                    <div
                      className="heading-20"
                      style={{
                        width:
                          screenWidth < 1024
                            ? "317px"
                            : screenWidth >= 1024 && screenWidth < 1440
                            ? "725px"
                            : undefined,
                      }}
                    >
                      <div
                        className="text-wrapper-22"
                        style={{
                          left:
                            screenWidth < 1024 ? "10px" : screenWidth >= 1024 && screenWidth < 1440 ? "0" : undefined,
                          textAlign: screenWidth < 1024 ? "center" : undefined,
                        }}
                      >
                        Create a Wallet
                      </div>
                    </div>
                    <div
                      className="heading-21"
                      style={{
                        height:
                          screenWidth < 1024 ? "176px" : screenWidth >= 1024 && screenWidth < 1440 ? "88px" : undefined,
                        width:
                          screenWidth < 1024
                            ? "317px"
                            : screenWidth >= 1024 && screenWidth < 1440
                            ? "725px"
                            : undefined,
                      }}
                    >
                      <div
                        className="download-metamask-or-2"
                        style={{
                          fontSize:
                            screenWidth < 1024
                              ? "16px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "20.6px"
                              : undefined,
                          height:
                            screenWidth < 1024
                              ? "179px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "91px"
                              : undefined,
                          width:
                            screenWidth < 1024
                              ? "291px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "691px"
                              : undefined,
                        }}
                      >
                        {screenWidth < 1024 && (
                          <p className="text-wrapper-29">
                            Download metamask or
                            <br />
                            your wallet of choice
                            <br />
                            from the app store or
                            <br />
                            google play store for
                            <br />
                            free. Desktop users,
                            <br />
                            download the google
                            <br />
                            chrome extension by
                            <br />
                            going to metamask.io.
                          </p>
                        )}

                        {screenWidth >= 1024 && screenWidth < 1440 && (
                          <p className="text-wrapper-29">
                            Download metamask or your wallet of choice from the
                            <br />
                            app store or google play store for free. Desktop users,
                            <br />
                            download the google chrome extension by going to
                            <br />
                            metamask.io.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="section-26"
                style={{
                  height:
                    screenWidth < 1024 ? "437px" : screenWidth >= 1024 && screenWidth < 1440 ? "191px" : undefined,
                  top: screenWidth < 1024 ? "607px" : screenWidth >= 1024 && screenWidth < 1440 ? "381px" : undefined,
                  width:
                    screenWidth < 1024 ? "370px" : screenWidth >= 1024 && screenWidth < 1440 ? "1004px" : undefined,
                }}
              >
                <div
                  className="div-elementor-11"
                  style={{
                    height:
                      screenWidth < 1024 ? "404px" : screenWidth >= 1024 && screenWidth < 1440 ? "158px" : undefined,
                    width:
                      screenWidth < 1024 ? "337px" : screenWidth >= 1024 && screenWidth < 1440 ? "971px" : undefined,
                  }}
                >
                  <div
                    className="div-elementor-widget-23"
                    style={{
                      width:
                        screenWidth < 1024 ? "337px" : screenWidth >= 1024 && screenWidth < 1440 ? "225px" : undefined,
                    }}
                  >
                    <div
                      className="untitled-design-4"
                      style={{
                        left:
                          screenWidth < 1024 ? "99px" : screenWidth >= 1024 && screenWidth < 1440 ? "44px" : undefined,
                      }}
                    />
                  </div>
                  <div
                    className="div-elementor-widget-24"
                    style={{
                      height:
                        screenWidth < 1024 ? "246px" : screenWidth >= 1024 && screenWidth < 1440 ? "158px" : undefined,
                      left: screenWidth < 1024 ? "0" : screenWidth >= 1024 && screenWidth < 1440 ? "225px" : undefined,
                      top: screenWidth < 1024 ? "158px" : screenWidth >= 1024 && screenWidth < 1440 ? "0" : undefined,
                      width:
                        screenWidth < 1024 ? "337px" : screenWidth >= 1024 && screenWidth < 1440 ? "745px" : undefined,
                    }}
                  >
                    <div
                      className="heading-22"
                      style={{
                        width:
                          screenWidth < 1024
                            ? "317px"
                            : screenWidth >= 1024 && screenWidth < 1440
                            ? "725px"
                            : undefined,
                      }}
                    >
                      <div
                        className="text-wrapper-23"
                        style={{
                          left:
                            screenWidth < 1024 ? "21px" : screenWidth >= 1024 && screenWidth < 1440 ? "0" : undefined,
                          textAlign: screenWidth < 1024 ? "center" : undefined,
                        }}
                      >
                        Get Some BNB
                      </div>
                    </div>
                    <div
                      className="heading-23"
                      style={{
                        height:
                          screenWidth < 1024 ? "176px" : screenWidth >= 1024 && screenWidth < 1440 ? "88px" : undefined,
                        width:
                          screenWidth < 1024
                            ? "317px"
                            : screenWidth >= 1024 && screenWidth < 1440
                            ? "725px"
                            : undefined,
                      }}
                    >
                      <div
                        className="have-BNB-in-your-2"
                        style={{
                          fontSize:
                            screenWidth < 1024
                              ? "16px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "20.5px"
                              : undefined,
                          height:
                            screenWidth < 1024
                              ? "179px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "91px"
                              : undefined,
                          width:
                            screenWidth < 1024
                              ? "316px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "722px"
                              : undefined,
                        }}
                      >
                        {screenWidth < 1024 && (
                          <p className="text-wrapper-29">
                            Have BNB in your wallet
                            <br />
                            to switch to $TROLL. If
                            <br />
                            you don’t have any BNB,
                            <br />
                            you can buy directly on
                            <br />
                            metamask, transfer from
                            <br />
                            another wallet, or buy on
                            <br />
                            another exchange and
                            <br />
                            send it to your wallet.
                          </p>
                        )}

                        {screenWidth >= 1024 && screenWidth < 1440 && (
                          <p className="text-wrapper-29">
                            Have BNB in your wallet to switch to $TROLL. If you
                            <br />
                            don’t have any BNB, you can buy directly on metamask,
                            <br />
                            transfer from another wallet, or buy on another exchange
                            <br />
                            and send it to your wallet.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="section-27"
                style={{
                  height:
                    screenWidth < 1024 ? "525px" : screenWidth >= 1024 && screenWidth < 1440 ? "213px" : undefined,
                  top: screenWidth < 1024 ? "1085px" : screenWidth >= 1024 && screenWidth < 1440 ? "613px" : undefined,
                  width:
                    screenWidth < 1024 ? "370px" : screenWidth >= 1024 && screenWidth < 1440 ? "1004px" : undefined,
                }}
              >
                <div
                  className="div-elementor-12"
                  style={{
                    height:
                      screenWidth < 1024 ? "492px" : screenWidth >= 1024 && screenWidth < 1440 ? "180px" : undefined,
                    width:
                      screenWidth < 1024 ? "337px" : screenWidth >= 1024 && screenWidth < 1440 ? "971px" : undefined,
                  }}
                >
                  <div
                    className="div-elementor-widget-25"
                    style={{
                      height:
                        screenWidth < 1024 ? "158px" : screenWidth >= 1024 && screenWidth < 1440 ? "180px" : undefined,
                      width:
                        screenWidth < 1024 ? "337px" : screenWidth >= 1024 && screenWidth < 1440 ? "225px" : undefined,
                    }}
                  >
                    <div
                      className="uniswap-webp-2"
                      style={{
                        left:
                          screenWidth < 1024 ? "99px" : screenWidth >= 1024 && screenWidth < 1440 ? "44px" : undefined,
                        top:
                          screenWidth < 1024 ? "10px" : screenWidth >= 1024 && screenWidth < 1440 ? "21px" : undefined,
                      }}
                    />
                  </div>
                  <div
                    className="div-elementor-widget-26"
                    style={{
                      height:
                        screenWidth < 1024 ? "334px" : screenWidth >= 1024 && screenWidth < 1440 ? "180px" : undefined,
                      left: screenWidth < 1024 ? "0" : screenWidth >= 1024 && screenWidth < 1440 ? "225px" : undefined,
                      top: screenWidth < 1024 ? "158px" : screenWidth >= 1024 && screenWidth < 1440 ? "0" : undefined,
                      width:
                        screenWidth < 1024 ? "337px" : screenWidth >= 1024 && screenWidth < 1440 ? "745px" : undefined,
                    }}
                  >
                    <div
                      className="heading-24"
                      style={{
                        width:
                          screenWidth < 1024
                            ? "317px"
                            : screenWidth >= 1024 && screenWidth < 1440
                            ? "725px"
                            : undefined,
                      }}
                    >
                      <div
                        className="text-wrapper-24"
                        style={{
                          height:
                            screenWidth < 1024
                              ? "43px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "42px"
                              : undefined,
                          left:
                            screenWidth < 1024 ? "-12px" : screenWidth >= 1024 && screenWidth < 1440 ? "0" : undefined,
                          textAlign: screenWidth < 1024 ? "center" : undefined,
                          top:
                            screenWidth < 1024
                              ? "-8px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "-7px"
                              : undefined,
                          width:
                            screenWidth < 1024
                              ? "341px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "405px"
                              : undefined,
                        }}
                      >
                        Go to Pancakeswap
                      </div>
                    </div>
                    <div
                      className="heading-25"
                      style={{
                        height:
                          screenWidth < 1024
                            ? "264px"
                            : screenWidth >= 1024 && screenWidth < 1440
                            ? "110px"
                            : undefined,
                        width:
                          screenWidth < 1024
                            ? "317px"
                            : screenWidth >= 1024 && screenWidth < 1440
                            ? "725px"
                            : undefined,
                      }}
                    >
                      <div
                        className="connect-to-2"
                        style={{
                          fontSize:
                            screenWidth < 1024
                              ? "16px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "20.8px"
                              : undefined,
                          height:
                            screenWidth < 1024
                              ? "267px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "113px"
                              : undefined,
                          width:
                            screenWidth < 1024
                              ? "311px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "710px"
                              : undefined,
                        }}
                      >
                        {screenWidth < 1024 && (
                          <p className="text-wrapper-29">
                            Connect to Pancakeswap. Go
                            <br />
                            to pancakeswap in
                            <br />
                            google chrome or on the
                            <br />
                            browser inside your
                            <br />
                            Metamask app. Connect
                            <br />
                            your wallet. Paste the
                            <br />
                            $TROLL token address
                            <br />
                            into Pancakeswap, select
                            <br />
                            Troll, and confirm. When
                            <br />
                            Metamask prompts you
                            <br />
                            for a wallet signature,
                            <br />
                            sign.
                          </p>
                        )}

                        {screenWidth >= 1024 && screenWidth < 1440 && (
                          <p className="text-wrapper-29">
                            Connect to Pancakeswap. Go to Pancakeswap in google
                            <br />
                            chrome or on the browser inside your Metamask app.
                            <br />
                            Connect your wallet. Paste the $TROLL token address
                            <br />
                            into Pancakeswap, select Troll, and confirm. When Metamask
                            <br />
                            prompts you for a wallet signature, sign.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="section-28"
                style={{
                  height:
                    screenWidth < 1024 ? "509px" : screenWidth >= 1024 && screenWidth < 1440 ? "191px" : undefined,
                  top: screenWidth < 1024 ? "1650px" : screenWidth >= 1024 && screenWidth < 1440 ? "866px" : undefined,
                  width:
                    screenWidth < 1024 ? "370px" : screenWidth >= 1024 && screenWidth < 1440 ? "1004px" : undefined,
                }}
              >
                <div
                  className="div-elementor-13"
                  style={{
                    height:
                      screenWidth < 1024 ? "476px" : screenWidth >= 1024 && screenWidth < 1440 ? "158px" : undefined,
                    width:
                      screenWidth < 1024 ? "337px" : screenWidth >= 1024 && screenWidth < 1440 ? "971px" : undefined,
                  }}
                >
                  <div
                    className="div-elementor-widget-27"
                    style={{
                      height:
                        screenWidth < 1024 ? "178px" : screenWidth >= 1024 && screenWidth < 1440 ? "158px" : undefined,
                      width:
                        screenWidth < 1024 ? "337px" : screenWidth >= 1024 && screenWidth < 1440 ? "225px" : undefined,
                    }}
                  >
                    <div
                      className="trollface-png-6"
                      style={{
                        height:
                          screenWidth < 1024
                            ? "158px"
                            : screenWidth >= 1024 && screenWidth < 1440
                            ? "102px"
                            : undefined,
                        left:
                          screenWidth < 1024 ? "73px" : screenWidth >= 1024 && screenWidth < 1440 ? "51px" : undefined,
                        top:
                          screenWidth < 1024 ? "10px" : screenWidth >= 1024 && screenWidth < 1440 ? "28px" : undefined,
                        width:
                          screenWidth < 1024
                            ? "190px"
                            : screenWidth >= 1024 && screenWidth < 1440
                            ? "123px"
                            : undefined,
                      }}
                    />
                  </div>
                  <div
                    className="div-elementor-widget-28"
                    style={{
                      height:
                        screenWidth < 1024 ? "298px" : screenWidth >= 1024 && screenWidth < 1440 ? "158px" : undefined,
                      left: screenWidth < 1024 ? "0" : screenWidth >= 1024 && screenWidth < 1440 ? "225px" : undefined,
                      top: screenWidth < 1024 ? "178px" : screenWidth >= 1024 && screenWidth < 1440 ? "0" : undefined,
                      width:
                        screenWidth < 1024 ? "337px" : screenWidth >= 1024 && screenWidth < 1440 ? "745px" : undefined,
                    }}
                  >
                    <div
                      className="switch-BNB-for-troll-wrapper"
                      style={{
                        height:
                          screenWidth < 1024 ? "60px" : screenWidth >= 1024 && screenWidth < 1440 ? "30px" : undefined,
                        width:
                          screenWidth < 1024
                            ? "317px"
                            : screenWidth >= 1024 && screenWidth < 1440
                            ? "725px"
                            : undefined,
                      }}
                    >
                      <div
                        className="switch-BNB-for-troll"
                        style={{
                          height:
                            screenWidth < 1024
                              ? "72px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "42px"
                              : undefined,
                          left:
                            screenWidth < 1024 ? "15px" : screenWidth >= 1024 && screenWidth < 1440 ? "0" : undefined,
                          textAlign: screenWidth < 1024 ? "center" : undefined,
                          width:
                            screenWidth < 1024
                              ? "288px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "390px"
                              : undefined,
                        }}
                      >
                        {screenWidth < 1024 && (
                          <>
                            Switch BNB for
                            <br />
                            Troll
                          </>
                        )}

                        {screenWidth >= 1024 && screenWidth < 1440 && <>Switch BNB for Troll</>}
                      </div>
                    </div>
                    <div
                      className="heading-26"
                      style={{
                        height:
                          screenWidth < 1024 ? "198px" : screenWidth >= 1024 && screenWidth < 1440 ? "88px" : undefined,
                        top:
                          screenWidth < 1024 ? "90px" : screenWidth >= 1024 && screenWidth < 1440 ? "60px" : undefined,
                        width:
                          screenWidth < 1024
                            ? "317px"
                            : screenWidth >= 1024 && screenWidth < 1440
                            ? "725px"
                            : undefined,
                      }}
                    >
                      <div
                        className="switch-BNB-for-TROLL-2"
                        style={{
                          fontSize:
                            screenWidth < 1024
                              ? "16px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "20.8px"
                              : undefined,
                          height:
                            screenWidth < 1024
                              ? "201px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "91px"
                              : undefined,
                          width:
                            screenWidth < 1024
                              ? "308px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "706px"
                              : undefined,
                        }}
                      >
                        {screenWidth < 1024 && (
                          <p className="text-wrapper-29">
                            Switch BNB for $TROLL.
                            <br />
                            We have ZERO taxes so
                            <br />
                            you don’t need to worry
                            <br />
                            about buying with a<br />
                            specific slippage,
                            <br />
                            although you may need
                            <br />
                            to use slippage during
                            <br />
                            times of market
                            <br />
                            volatility.
                          </p>
                        )}

                        {screenWidth >= 1024 && screenWidth < 1440 && (
                          <p className="text-wrapper-29">
                            Switch BNB for $TROLL. We have ZERO taxes so you
                            <br />
                            don’t need to worry about buying with a specific
                            <br />
                            slippage, although you may need to use slippage during
                            <br />
                            times of market volatility.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="section-29"
              style={{
                height: screenWidth < 1024 ? "768px" : screenWidth >= 1024 && screenWidth < 1440 ? "640px" : undefined,
                top: screenWidth < 1024 ? "4758px" : screenWidth >= 1024 && screenWidth < 1440 ? "3254px" : undefined,
                width: screenWidth < 1024 ? "390px" : screenWidth >= 1024 && screenWidth < 1440 ? "1024px" : undefined,
              }}
            >
              <img
                className="div-elementor-shape-10"
                style={{
                  width:
                    screenWidth < 1024 ? "390px" : screenWidth >= 1024 && screenWidth < 1440 ? "1024px" : undefined,
                }}
                alt="Div elementor shape"
                src={
                  screenWidth < 1024
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/div-elementor-shape-10.svg"
                    : screenWidth >= 1024 && screenWidth < 1440
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/div-elementor-shape-24.svg"
                    : undefined
                }
              />
              <img
                className="div-elementor-shape-11"
                style={{
                  top: screenWidth < 1024 ? "709px" : screenWidth >= 1024 && screenWidth < 1440 ? "581px" : undefined,
                  width:
                    screenWidth < 1024 ? "390px" : screenWidth >= 1024 && screenWidth < 1440 ? "1024px" : undefined,
                }}
                alt="Div elementor shape"
                src={
                  screenWidth < 1024
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/div-elementor-shape-11.svg"
                    : screenWidth >= 1024 && screenWidth < 1440
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/div-elementor-shape-25.svg"
                    : undefined
                }
              />
              <div
                className="heading-TOKENOMICS-2"
                style={{
                  fontSize:
                    screenWidth < 1024 ? "30px" : screenWidth >= 1024 && screenWidth < 1440 ? "50px" : undefined,
                  height: screenWidth < 1024 ? "30px" : screenWidth >= 1024 && screenWidth < 1440 ? "50px" : undefined,
                  left: screenWidth < 1024 ? "67px" : screenWidth >= 1024 && screenWidth < 1440 ? "308px" : undefined,
                  lineHeight:
                    screenWidth < 1024 ? "30px" : screenWidth >= 1024 && screenWidth < 1440 ? "50px" : undefined,
                  width: screenWidth < 1024 ? "257px" : screenWidth >= 1024 && screenWidth < 1440 ? "409px" : undefined,
                }}
              >
                TOKENOMICS
              </div>
              <div
                className="section-30"
                style={{
                  height:
                    screenWidth < 1024 ? "498px" : screenWidth >= 1024 && screenWidth < 1440 ? "350px" : undefined,
                  top: screenWidth < 1024 ? "160px" : screenWidth >= 1024 && screenWidth < 1440 ? "180px" : undefined,
                  width:
                    screenWidth < 1024 ? "370px" : screenWidth >= 1024 && screenWidth < 1440 ? "1004px" : undefined,
                }}
              >
                <div
                  className="div-elementor-14"
                  style={{
                    height:
                      screenWidth < 1024 ? "494px" : screenWidth >= 1024 && screenWidth < 1440 ? "346px" : undefined,
                    width:
                      screenWidth < 1024 ? "367px" : screenWidth >= 1024 && screenWidth < 1440 ? "1001px" : undefined,
                  }}
                >
                  <div
                    className="div-elementor-widget-29"
                    style={{
                      height:
                        screenWidth < 1024 ? "235px" : screenWidth >= 1024 && screenWidth < 1440 ? "346px" : undefined,
                      width:
                        screenWidth < 1024 ? "367px" : screenWidth >= 1024 && screenWidth < 1440 ? "500px" : undefined,
                    }}
                  >
                    <div
                      className="heading-27"
                      style={{
                        top:
                          screenWidth < 1024 ? "20px" : screenWidth >= 1024 && screenWidth < 1440 ? "83px" : undefined,
                        width:
                          screenWidth < 1024
                            ? "327px"
                            : screenWidth >= 1024 && screenWidth < 1440
                            ? "460px"
                            : undefined,
                      }}
                    >
                      <div
                        className="text-wrapper-25"
                        style={{
                          left:
                            screenWidth < 1024
                              ? "36px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "103px"
                              : undefined,
                        }}
                      >
                        Token Supply
                      </div>
                    </div>
                    <div
                      className="heading-28"
                      style={{
                        top:
                          screenWidth < 1024 ? "70px" : screenWidth >= 1024 && screenWidth < 1440 ? "133px" : undefined,
                        width:
                          screenWidth < 1024
                            ? "327px"
                            : screenWidth >= 1024 && screenWidth < 1440
                            ? "460px"
                            : undefined,
                      }}
                    >
                      <div
                        className="text-wrapper-26"
                        style={{
                          fontSize:
                            screenWidth < 1024
                              ? "25.2px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "25.5px"
                              : undefined,
                          left:
                            screenWidth < 1024
                              ? "26px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "60px"
                              : undefined,
                          letterSpacing:
                            screenWidth < 1024
                              ? "-0.50px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "3.00px"
                              : undefined,
                          width:
                            screenWidth < 1024
                              ? "274px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "341px"
                              : undefined,
                        }}
                      >
                        960,420,000,000,000
                      </div>
                    </div>
                    <div
                      className="heading-29"
                      style={{
                        height:
                          screenWidth < 1024 ? "25px" : screenWidth >= 1024 && screenWidth < 1440 ? "30px" : undefined,
                        top:
                          screenWidth < 1024
                            ? "120px"
                            : screenWidth >= 1024 && screenWidth < 1440
                            ? "183px"
                            : undefined,
                        width:
                          screenWidth < 1024
                            ? "327px"
                            : screenWidth >= 1024 && screenWidth < 1440
                            ? "460px"
                            : undefined,
                      }}
                    >
                      <p
                        className="tax-sell-tax-buy-2"
                        style={{
                          height:
                            screenWidth < 1024
                              ? "93px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "99px"
                              : undefined,
                          left:
                            screenWidth < 1024
                              ? "-7px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "12px"
                              : undefined,
                          width:
                            screenWidth < 1024
                              ? "346px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "448px"
                              : undefined,
                        }}
                      >
                        Tax Sell: 5% - Tax Buy : 5%
                        <br />
                        Liquidity Pool 95%
                        <br />
                        CEX 5%
                      </p>
                    </div>
                  </div>
                  <div
                    className="div-elementor-column-27"
                    style={{
                      height:
                        screenWidth < 1024 ? "259px" : screenWidth >= 1024 && screenWidth < 1440 ? "346px" : undefined,
                      left: screenWidth < 1024 ? "0" : screenWidth >= 1024 && screenWidth < 1440 ? "500px" : undefined,
                      top: screenWidth < 1024 ? "235px" : screenWidth >= 1024 && screenWidth < 1440 ? "0" : undefined,
                      width:
                        screenWidth < 1024 ? "367px" : screenWidth >= 1024 && screenWidth < 1440 ? "500px" : undefined,
                    }}
                  >
                    <div
                      className="div-elementor-widget-30"
                      style={{
                        height:
                          screenWidth < 1024
                            ? "199px"
                            : screenWidth >= 1024 && screenWidth < 1440
                            ? "286px"
                            : undefined,
                        width:
                          screenWidth < 1024
                            ? "307px"
                            : screenWidth >= 1024 && screenWidth < 1440
                            ? "440px"
                            : undefined,
                      }}
                    >
                      <div
                        className="troll-face-gif-3"
                        style={{
                          height:
                            screenWidth < 1024
                              ? "199px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "286px"
                              : undefined,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="overlap-group-wrapper"
              style={{
                height: screenWidth < 1024 ? "1051px" : screenWidth >= 1024 && screenWidth < 1440 ? "711px" : undefined,
                top: screenWidth < 1024 ? "5526px" : screenWidth >= 1024 && screenWidth < 1440 ? "3894px" : undefined,
                width: screenWidth < 1024 ? "390px" : screenWidth >= 1024 && screenWidth < 1440 ? "1024px" : undefined,
              }}
            >
              <div
                className="overlap-group-3"
                style={{
                  height:
                    screenWidth < 1024 ? "1051px" : screenWidth >= 1024 && screenWidth < 1440 ? "711px" : undefined,
                }}
              >
                <div
                  className="div-elementor-15"
                  style={{
                    height:
                      screenWidth < 1024 ? "1051px" : screenWidth >= 1024 && screenWidth < 1440 ? "711px" : undefined,
                    width:
                      screenWidth < 1024 ? "390px" : screenWidth >= 1024 && screenWidth < 1440 ? "1024px" : undefined,
                  }}
                />
                <div
                  className="heading-ROADMAP-2"
                  style={{
                    fontSize:
                      screenWidth < 1024 ? "30px" : screenWidth >= 1024 && screenWidth < 1440 ? "50px" : undefined,
                    height:
                      screenWidth < 1024 ? "30px" : screenWidth >= 1024 && screenWidth < 1440 ? "50px" : undefined,
                    left:
                      screenWidth < 1024 ? "101px" : screenWidth >= 1024 && screenWidth < 1440 ? "363px" : undefined,
                    lineHeight:
                      screenWidth < 1024 ? "30px" : screenWidth >= 1024 && screenWidth < 1440 ? "50px" : undefined,
                    width:
                      screenWidth < 1024 ? "188px" : screenWidth >= 1024 && screenWidth < 1440 ? "299px" : undefined,
                  }}
                >
                  ROADMAP
                </div>
                <div
                  className="section-31"
                  style={{
                    height:
                      screenWidth < 1024 ? "488px" : screenWidth >= 1024 && screenWidth < 1440 ? "188px" : undefined,
                    top: screenWidth < 1024 ? "110px" : screenWidth >= 1024 && screenWidth < 1440 ? "130px" : undefined,
                    width:
                      screenWidth < 1024 ? "370px" : screenWidth >= 1024 && screenWidth < 1440 ? "1004px" : undefined,
                  }}
                >
                  <div
                    className="div-elementor-widget-31"
                    style={{
                      height:
                        screenWidth < 1024 ? "162px" : screenWidth >= 1024 && screenWidth < 1440 ? "188px" : undefined,
                      width:
                        screenWidth < 1024 ? "370px" : screenWidth >= 1024 && screenWidth < 1440 ? "335px" : undefined,
                    }}
                  >
                    <div
                      className="dgzmk-fdd-3"
                      style={{
                        height:
                          screenWidth < 1024
                            ? "142px"
                            : screenWidth >= 1024 && screenWidth < 1440
                            ? "128px"
                            : undefined,
                        left:
                          screenWidth < 1024 ? "98px" : screenWidth >= 1024 && screenWidth < 1440 ? "89px" : undefined,
                        width:
                          screenWidth < 1024
                            ? "175px"
                            : screenWidth >= 1024 && screenWidth < 1440
                            ? "157px"
                            : undefined,
                      }}
                    />
                  </div>
                  <div
                    className="div-elementor-widget-32"
                    style={{
                      height:
                        screenWidth < 1024 ? "163px" : screenWidth >= 1024 && screenWidth < 1440 ? "188px" : undefined,
                      left: screenWidth < 1024 ? "0" : screenWidth >= 1024 && screenWidth < 1440 ? "335px" : undefined,
                      top: screenWidth < 1024 ? "162px" : screenWidth >= 1024 && screenWidth < 1440 ? "0" : undefined,
                      width:
                        screenWidth < 1024 ? "370px" : screenWidth >= 1024 && screenWidth < 1440 ? "335px" : undefined,
                    }}
                  >
                    <div
                      className="heading-30"
                      style={{
                        width:
                          screenWidth < 1024
                            ? "347px"
                            : screenWidth >= 1024 && screenWidth < 1440
                            ? "311px"
                            : undefined,
                      }}
                    >
                      <div
                        className="text-wrapper-27"
                        style={{
                          fontSize:
                            screenWidth < 1024
                              ? "20px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "24.8px"
                              : undefined,
                          left:
                            screenWidth < 1024
                              ? "76px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "58px"
                              : undefined,
                        }}
                      >
                        Phase 1: Troll
                      </div>
                    </div>
                    <div
                      className="phase-troll-and-wrapper"
                      style={{
                        width:
                          screenWidth < 1024
                            ? "347px"
                            : screenWidth >= 1024 && screenWidth < 1440
                            ? "311px"
                            : undefined,
                      }}
                    >
                      <div
                        className="phase-troll-and"
                        style={{
                          fontSize:
                            screenWidth < 1024
                              ? "20px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "24px"
                              : undefined,
                          left:
                            screenWidth < 1024
                              ? "46px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "28px"
                              : undefined,
                        }}
                      >
                        Phase 2: Troll and
                        <br />
                        HODL
                      </div>
                    </div>
                    <div
                      className="phase-troll-wrapper"
                      style={{
                        height:
                          screenWidth < 1024 ? "25px" : screenWidth >= 1024 && screenWidth < 1440 ? "50px" : undefined,
                        width:
                          screenWidth < 1024
                            ? "347px"
                            : screenWidth >= 1024 && screenWidth < 1440
                            ? "311px"
                            : undefined,
                      }}
                    >
                      <div
                        className="phase-troll"
                        style={{
                          fontSize:
                            screenWidth < 1024
                              ? "20px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "24px"
                              : undefined,
                          height:
                            screenWidth < 1024
                              ? "28px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "53px"
                              : undefined,
                          left:
                            screenWidth < 1024 ? "9px" : screenWidth >= 1024 && screenWidth < 1440 ? "58px" : undefined,
                          whiteSpace: screenWidth < 1024 ? "nowrap" : undefined,
                          width:
                            screenWidth < 1024
                              ? "330px"
                              : screenWidth >= 1024 && screenWidth < 1440
                              ? "195px"
                              : undefined,
                        }}
                      >
                        {screenWidth < 1024 && <>Phase 3: Troll Takeover</>}

                        {screenWidth >= 1024 && screenWidth < 1440 && (
                          <>
                            Phase 3: Troll
                            <br />
                            Takeover
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div
                    className="div-elementor-widget-33"
                    style={{
                      height:
                        screenWidth < 1024 ? "162px" : screenWidth >= 1024 && screenWidth < 1440 ? "188px" : undefined,
                      left: screenWidth < 1024 ? "0" : screenWidth >= 1024 && screenWidth < 1440 ? "669px" : undefined,
                      top: screenWidth < 1024 ? "326px" : screenWidth >= 1024 && screenWidth < 1440 ? "0" : undefined,
                      width:
                        screenWidth < 1024 ? "370px" : screenWidth >= 1024 && screenWidth < 1440 ? "335px" : undefined,
                    }}
                  >
                    <div
                      className="dgzmk-fdd-4"
                      style={{
                        height:
                          screenWidth < 1024
                            ? "142px"
                            : screenWidth >= 1024 && screenWidth < 1440
                            ? "128px"
                            : undefined,
                        left:
                          screenWidth < 1024 ? "98px" : screenWidth >= 1024 && screenWidth < 1440 ? "89px" : undefined,
                        width:
                          screenWidth < 1024
                            ? "175px"
                            : screenWidth >= 1024 && screenWidth < 1440
                            ? "157px"
                            : undefined,
                      }}
                    />
                  </div>
                </div>
                <div
                  className="section-32"
                  style={{
                    height:
                      screenWidth < 1024 ? "372px" : screenWidth >= 1024 && screenWidth < 1440 ? "312px" : undefined,
                    left: screenWidth < 1024 ? "20px" : screenWidth >= 1024 && screenWidth < 1440 ? "272px" : undefined,
                    top: screenWidth < 1024 ? "608px" : screenWidth >= 1024 && screenWidth < 1440 ? "328px" : undefined,
                    width:
                      screenWidth < 1024 ? "350px" : screenWidth >= 1024 && screenWidth < 1440 ? "480px" : undefined,
                  }}
                >
                  <div
                    className="heading-31"
                    style={{
                      width:
                        screenWidth < 1024 ? "327px" : screenWidth >= 1024 && screenWidth < 1440 ? "457px" : undefined,
                    }}
                  >
                    <div
                      className="text-wrapper-28"
                      style={{
                        left:
                          screenWidth < 1024 ? "90px" : screenWidth >= 1024 && screenWidth < 1440 ? "155px" : undefined,
                      }}
                    >
                      $TROLL
                    </div>
                  </div>
                  <div
                    className="div-elementor-16"
                    style={{
                      left:
                        screenWidth < 1024 ? "16px" : screenWidth >= 1024 && screenWidth < 1440 ? "46px" : undefined,
                      top: screenWidth < 1024 ? "86px" : screenWidth >= 1024 && screenWidth < 1440 ? "44px" : undefined,
                      width:
                        screenWidth < 1024 ? "318px" : screenWidth >= 1024 && screenWidth < 1440 ? "342px" : undefined,
                    }}
                  >
                    <p className="list-item-strong-2">
                      Launch
                      <br />
                      CoinGecko/ Coinmarketcap 
                      <br />
                      Listings
                      <br />
                      1,000+ Holders
                      <br />
                      Get $TROLL 
                      <br />
                      Trending on twitter
                      <br />
                      with our memetic power
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="section-33"
              style={{
                height: screenWidth < 1024 ? "523px" : screenWidth >= 1024 && screenWidth < 1440 ? "641px" : undefined,
                top: screenWidth < 1024 ? "6577px" : screenWidth >= 1024 && screenWidth < 1440 ? "4604px" : undefined,
                width: screenWidth < 1024 ? "390px" : screenWidth >= 1024 && screenWidth < 1440 ? "1024px" : undefined,
              }}
            >
              <img
                className="div-elementor-shape-12"
                style={{
                  width:
                    screenWidth < 1024 ? "390px" : screenWidth >= 1024 && screenWidth < 1440 ? "1024px" : undefined,
                }}
                alt="Div elementor shape"
                src={
                  screenWidth < 1024
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/div-elementor-shape-12.svg"
                    : screenWidth >= 1024 && screenWidth < 1440
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/div-elementor-shape-26.svg"
                    : undefined
                }
              />
              <img
                className="div-elementor-shape-13"
                style={{
                  top: screenWidth < 1024 ? "464px" : screenWidth >= 1024 && screenWidth < 1440 ? "582px" : undefined,
                  width:
                    screenWidth < 1024 ? "390px" : screenWidth >= 1024 && screenWidth < 1440 ? "1024px" : undefined,
                }}
                alt="Div elementor shape"
                src={
                  screenWidth < 1024
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/div-elementor-shape-13.svg"
                    : screenWidth >= 1024 && screenWidth < 1440
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/div-elementor-shape-27.svg"
                    : undefined
                }
              />
              <div
                className="heading-CONTACT-2"
                style={{
                  fontSize:
                    screenWidth < 1024 ? "30px" : screenWidth >= 1024 && screenWidth < 1440 ? "40px" : undefined,
                  height: screenWidth < 1024 ? "30px" : screenWidth >= 1024 && screenWidth < 1440 ? "40px" : undefined,
                  left: screenWidth < 1024 ? "104px" : screenWidth >= 1024 && screenWidth < 1440 ? "394px" : undefined,
                  lineHeight:
                    screenWidth < 1024 ? "30px" : screenWidth >= 1024 && screenWidth < 1440 ? "40px" : undefined,
                  width: screenWidth < 1024 ? "182px" : screenWidth >= 1024 && screenWidth < 1440 ? "236px" : undefined,
                }}
              >
                CONTACT
              </div>
              <div
                className="troll-face-gif-4"
                style={{
                  height:
                    screenWidth < 1024 ? "193px" : screenWidth >= 1024 && screenWidth < 1440 ? "261px" : undefined,
                  left: screenWidth < 1024 ? "47px" : screenWidth >= 1024 && screenWidth < 1440 ? "311px" : undefined,
                  top: screenWidth < 1024 ? "160px" : screenWidth >= 1024 && screenWidth < 1440 ? "170px" : undefined,
                  width: screenWidth < 1024 ? "296px" : screenWidth >= 1024 && screenWidth < 1440 ? "402px" : undefined,
                }}
              />
              <img
                className="link-16"
                style={{
                  height: screenWidth < 1024 ? "40px" : screenWidth >= 1024 && screenWidth < 1440 ? "80px" : undefined,
                  left: screenWidth < 1024 ? "115px" : screenWidth >= 1024 && screenWidth < 1440 ? "372px" : undefined,
                  top: screenWidth < 1024 ? "373px" : screenWidth >= 1024 && screenWidth < 1440 ? "451px" : undefined,
                  width: screenWidth < 1024 ? "40px" : screenWidth >= 1024 && screenWidth < 1440 ? "80px" : undefined,
                }}
                alt="Link"
                src={
                  screenWidth < 1024
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link-3.svg"
                    : screenWidth >= 1024 && screenWidth < 1440
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link-9.svg"
                    : undefined
                }
              />
              <img
                className="link-17"
                style={{
                  height: screenWidth < 1024 ? "40px" : screenWidth >= 1024 && screenWidth < 1440 ? "80px" : undefined,
                  left: screenWidth < 1024 ? "175px" : screenWidth >= 1024 && screenWidth < 1440 ? "472px" : undefined,
                  top: screenWidth < 1024 ? "373px" : screenWidth >= 1024 && screenWidth < 1440 ? "451px" : undefined,
                  width: screenWidth < 1024 ? "40px" : screenWidth >= 1024 && screenWidth < 1440 ? "80px" : undefined,
                }}
                alt="Link"
                src={
                  screenWidth < 1024
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link-4.svg"
                    : screenWidth >= 1024 && screenWidth < 1440
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link-10.svg"
                    : undefined
                }
              />
              <img
                className="link-18"
                style={{
                  height: screenWidth < 1024 ? "40px" : screenWidth >= 1024 && screenWidth < 1440 ? "80px" : undefined,
                  left: screenWidth < 1024 ? "235px" : screenWidth >= 1024 && screenWidth < 1440 ? "572px" : undefined,
                  top: screenWidth < 1024 ? "373px" : screenWidth >= 1024 && screenWidth < 1440 ? "451px" : undefined,
                  width: screenWidth < 1024 ? "40px" : screenWidth >= 1024 && screenWidth < 1440 ? "80px" : undefined,
                }}
                alt="Link"
                src={
                  screenWidth < 1024
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link-5.svg"
                    : screenWidth >= 1024 && screenWidth < 1440
                    ? "https://cdn.animaapp.com/projects/65b1efbf6a87a05006909570/releases/65b21433ded9bf6dcc6064c0/img/link-11.svg"
                    : undefined
                }
              />
            </div>
            <div
              className="section-34"
              style={{
                height: screenWidth < 1024 ? "104px" : screenWidth >= 1024 && screenWidth < 1440 ? "88px" : undefined,
                top: screenWidth < 1024 ? "7099px" : screenWidth >= 1024 && screenWidth < 1440 ? "5245px" : undefined,
                width: screenWidth < 1024 ? "390px" : screenWidth >= 1024 && screenWidth < 1440 ? "1024px" : undefined,
              }}
            >
              <div
                className="heading-32"
                style={{
                  left: screenWidth < 1024 ? "91px" : screenWidth >= 1024 && screenWidth < 1440 ? "408px" : undefined,
                }}
              >
                TrollERC20@gmx.de
              </div>
              <div
                className="heading-by-2"
                style={{
                  fontSize:
                    screenWidth < 1024 ? "15.9px" : screenWidth >= 1024 && screenWidth < 1440 ? "15.8px" : undefined,
                  height: screenWidth < 1024 ? "34px" : screenWidth >= 1024 && screenWidth < 1440 ? "18px" : undefined,
                  left: screenWidth < 1024 ? "49px" : screenWidth >= 1024 && screenWidth < 1440 ? "313px" : undefined,
                  whiteSpace: screenWidth >= 1024 && screenWidth < 1440 ? "nowrap" : undefined,
                  width: screenWidth < 1024 ? "292px" : screenWidth >= 1024 && screenWidth < 1440 ? "398px" : undefined,
                }}
              >
                {screenWidth < 1024 && (
                  <p className="text-wrapper-29">
                    © 2023 by TROLL. All rights
                    <br />
                    reserved!
                  </p>
                )}

                {screenWidth >= 1024 && screenWidth < 1440 && (
                  <p className="text-wrapper-29">© 2023 by TROLL. All rights reserved!</p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
