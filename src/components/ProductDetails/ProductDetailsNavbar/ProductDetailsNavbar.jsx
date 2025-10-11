import React, { useContext, useState } from "react";
import background from "../../../assets/Photos/backgroundNavbar.jpg";
import { LuBellRing } from "react-icons/lu";
import { IoLanguageSharp } from "react-icons/io5";
import { NotificationtContext } from "../../../Context/NotificationContext";
import { NavLink } from "react-router-dom";
const SeacrhBar = React.lazy(() => import("../../SearchBar/SearchBar"));

export default function ProductDetailsNavbar() {

  
  let { notifications } = useContext(NotificationtContext);
  NotificationtContext;
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="rounded-2xl fixed pt-2 right-2 left-72 z-50 bg-white">
        <div
          className="bg-center bg-cover bg-repeat w-full h-[190px] rounded-2xl animate-backgroundMove"
          style={{ backgroundImage: `url(${background})` }}
        >
          {/* icons */}
          <div className="flex justify-end items-center relative">
            <IoLanguageSharp className="text-white text-xl mt-3 me-2" />

            {/* notification icon with badge */}
            <div className="relative mt-4 me-4">
              <LuBellRing
                className="text-white text-xl cursor-pointer"
                onClick={() => setOpen(!open)}
              />
              {notifications?.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {notifications.length}
                </span>
              )}

              {/* Dropdown notifications */}
              {open && (
                <div className="absolute right-0 mt-3 w-72 bg-white shadow-lg rounded-lg overflow-hidden z-50 max-h-80 overflow-y-auto">
                  {notifications?.length > 0 ? (
                    notifications.map((notif) => (
                      <NavLink to={"/Customers"}>
                        <div
                          key={notif.id}
                          className="px-4 py-2 border-b last:border-none hover:bg-gray-100 cursor-pointer"
                        >
                          {/* نوع الإشعار */}
                          <p className="text-xs text-gray-400 uppercase tracking-wide">
                            {notif.type?.replace(/_/g, " ")}
                          </p>

                          {/* محتوى الإشعار */}
                          <p className="text-sm text-gray-700 font-medium">
                            {notif.content}
                          </p>

                          {/* وقت الإنشاء */}
                          <p className="text-[10px] text-gray-400">
                            {new Date(notif.created_at).toLocaleString()}
                          </p>
                        </div>
                      </NavLink>
                    ))
                  ) : (
                    <p className="p-4 text-center text-gray-500 text-sm">
                      No notifications
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* title & Input Search */}
          <div className="mt-2 w-[95%] mx-auto">
            {/* title */}
            <h1 className="text-4xl ms-6 text-white font-bold">
              Product Details
            </h1>
            <SeacrhBar />
          </div>
        </div>
      </div>
    </nav>
  );
}
