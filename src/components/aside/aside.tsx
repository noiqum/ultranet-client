import * as React from "react";
import { ReactComponent as Home } from "../../svg/home.svg";
import { ReactComponent as News } from "../../svg/news.svg";
import { ReactComponent as Map } from "../../svg/map.svg";
import { ReactComponent as Files } from "../../svg/files.svg";
import { ReactComponent as Gallery } from "../../svg/gallery.svg";
import { ReactComponent as Events } from "../../svg/events.svg";
import { ReactComponent as Forest } from "../../svg/forest.svg";
import { ReactComponent as Birds } from "../../svg/birds.svg";
import { ReactComponent as Dance } from "../../svg/dance.svg";
import { ReactComponent as Animals } from "../../svg/animals.svg";
import { ReactComponent as Motorbike } from "../../svg/motorbike.svg";
import { ReactComponent as Nature } from "../../svg/nature.svg";
import { ReactComponent as Hamburger } from "../../svg/hamburger.svg";
import { ReactComponent as Arrow } from "../../svg/arrow.svg";

const Aside: React.FC = () => {
  const [active, setActive] = React.useState<boolean>(false);

  return (
    <>
      <div className={active ? "aside-active" : "aside"}>
        <div
          className={active ? "aside-active__button" : "aside__button"}
          onClick={() => {
            setActive(!active);
          }}
        >
          {active ? <Arrow /> : <Hamburger />}
        </div>
        <div className={active ? "aside-active__logo" : "aside__logo"}>
          Ultranet
        </div>
        <div className={active ? "aside-active__menu" : "aside__menu"}>
          <div
            className={
              active ? "aside-active__menu__title" : "aside__menu__title"
            }
          >
            Menu
          </div>
          <div
            className={
              active ? "aside-active__menu__list" : "aside__menu__list"
            }
          >
            <div
              className={
                active
                  ? "aside-active__menu__list-item"
                  : "aside__menu__list-item"
              }
            >
              <Home /> <span>Home</span>
            </div>
            <div
              className={
                active
                  ? "aside-active__menu__list-item"
                  : "aside__menu__list-item"
              }
            >
              <News /> <span>latest news</span>
            </div>
            <div
              className={
                active
                  ? "aside-active__menu__list-item"
                  : "aside__menu__list-item"
              }
            >
              <Map /> <span>explore</span>
            </div>
            <div
              className={
                active
                  ? "aside-active__menu__list-item"
                  : "aside__menu__list-item"
              }
            >
              <Files /> <span>files</span>
            </div>
            <div
              className={
                active
                  ? "aside-active__menu__list-item"
                  : "aside__menu__list-item"
              }
            >
              <Gallery /> <span>gallery</span>
            </div>
            <div
              className={
                active
                  ? "aside-active__menu__list-item"
                  : "aside__menu__list-item"
              }
            >
              <Events /> <span>events</span>
            </div>
          </div>
        </div>
        <div className={active ? "aside-active__menu" : "aside__menu"}>
          <div
            className={
              active ? "aside-active__menu__title" : "aside__menu__title"
            }
          >
            your favourite
          </div>
          <div
            className={
              active ? "aside-active__menu__list" : "aside__menu__list"
            }
          >
            <div
              className={
                active
                  ? "aside-active__menu__list-item"
                  : "aside__menu__list-item"
              }
            >
              <Forest /> <span>Forest</span>
            </div>
            <div
              className={
                active
                  ? "aside-active__menu__list-item"
                  : "aside__menu__list-item"
              }
            >
              <Birds /> <span>birds</span>
            </div>
            <div
              className={
                active
                  ? "aside-active__menu__list-item"
                  : "aside__menu__list-item"
              }
            >
              <Nature /> <span>nature</span>
            </div>
            <div
              className={
                active
                  ? "aside-active__menu__list-item"
                  : "aside__menu__list-item"
              }
            >
              <Animals /> <span>animals</span>
            </div>
            <div
              className={
                active
                  ? "aside-active__menu__list-item"
                  : "aside__menu__list-item"
              }
            >
              <Motorbike /> <span>motorbike</span>
            </div>
            <div
              className={
                active
                  ? "aside-active__menu__list-item"
                  : "aside__menu__list-item"
              }
            >
              <Dance /> <span>dance</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={active ? "overlay-active" : "overlay"}
        onClick={() => {
          setActive(!active);
        }}
      ></div>
    </>
  );
};

export default Aside;
