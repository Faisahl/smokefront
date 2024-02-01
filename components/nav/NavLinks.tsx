import React, { useState } from "react";
import Link from "next/link";
import { links } from "./Links";
import {
  NavLinkSubSubType,
  NavLinkSubType,
  NavLinkType,
} from "@/app/types/NavLinkType";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

type Props = {
  setMenu?: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen?: boolean;
};

const NavLinks = ({ setMenu, isOpen }: Props) => {
  const [heading, setHeading] = useState<string>("");
  const [subHeading, setSubHeading] = useState("");

  const closeSubMenus = () => {
    setTimeout(() => {
      if (typeof setMenu !== "undefined") {
        setMenu(!isOpen);
      }
    }, 300);
    setHeading("");
    setSubHeading("");
  };
  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="px-3 text-left group md:hover:text-custo-50">
            <h1
              className="py-5 flex justify-between items-center md:pr-0 pr-5 group cursor-default text-lg font-medium"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
              }}
            >
              <span>{link.name}</span>
              <span className="text-lg md:hidden inline">
                <ion-icon
                  name={heading === link.name ? "chevron-up" : "chevron-down"}
                ></ion-icon>
              </span>
              <span className="md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-14 hidden group-hover:md:block hover:md:block">
                  <div className="py-3 ">
                    <div
                      className="w-4 h-4 left-3 absolute 
                      mt-1 bg-custo-51 rotate-45"
                    ></div>
                  </div>
                  <div className="bg-custo-51 p-5  gap-5 shadow-2xl">
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.Head}>
                        <h3 className=" font-semibold text-white cursor-default mb-2 lg:hover:text-custo-50">
                          <Link
                            href={mysublinks.link}
                          >
                            {mysublinks.Head}
                          </Link>
                        </h3>
                        {/* {mysublinks.sublink.map((slink: NavLinkSubSubType) => (
                            <li key={slink.name} className="text-sm text-white my-2.5">
                              <Link
                                className="md:hover:text-custo-50"
                                href={slink.link}
                              >
                                {slink.name}
                              </Link>
                            </li>
                          ))} */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
              ${heading === link.name ? "md:hidden" : "hidden"}
            `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div key={slinks.Head}>
                <div>
                  <h1
                    onClick={() => {
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("");
                    }}
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
                  >
                    <Link
                      href={slinks.link}
                      onClick={() => {
                        closeSubMenus();
                      }}
                    >
                      {slinks.Head}
                    </Link>
                    {/* <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={
                          heading === link.name ? "chevron-down" : "chevron-up"
                        }
                      ></ion-icon>
                    </span> */}
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {/* {slinks.sublink.map((slink: NavLinkSubSubType) => (
                      <li key={slink.name} className="py-3 pl-14 ">
                        <Link
                          href={slink.link}
                          // to={slink.link}
                          onClick={() => {
                            closeSubMenus();
                          }}
                        >
                          {slink.name}
                        </Link>
                      </li>
                    ))} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
