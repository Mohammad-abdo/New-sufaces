import React from "react";
import background from "../../../assets/Photos/backgroundNavbar.jpg";
import { LuBellRing } from "react-icons/lu";
import { IoLanguageSharp } from "react-icons/io5";
const ActionNavbar = React.lazy(() =>
  import("../CatalogsNavbar/ActionNavbar/ActionNavbar")
);

export default function CatalogsNavbar() {
  return (
    <nav>
      <div className="rounded-2xl fixed pt-2 right-2 left-72 z-50">
        <div
          className="bg-center bg-cover bg-repeat w-full h-[190px] rounded-2xl animate-backgroundMove"
          style={{ backgroundImage: `url(${background})` }}
        >
          {/* icons */}
          <div className="flex justify-end items-center">
            <IoLanguageSharp className="text-white text-2xl mt-3 me-2" />
            <LuBellRing className="text-white text-2xl mt-4 me-4" />
          </div>

          {/* title & Input Search */}
          <div className="mt-4 w-[95%] mx-auto">
            <h1 className="text-4xl ms-8 text-white font-bold">Catalogs</h1>
            <ActionNavbar />
          </div>
        </div>
      </div>
    </nav>
  );
}
