import clsx from "clsx";
import Link from "next/link";
import React from "react";

function OrderLinks() {
  let status = "all";
  return (
    <div className="flex my-5 items-center gap-5 text-xl text-indigo-300 ">
      <Link
        href="/orders"
        className={clsx(`cursor-pointer`, {
          "text-indigo-500 underline": status === "all",
          "text-indigo-300": status !== "all",
        })}
      >
        All Orders
      </Link>

      <Link
        href="/orders"
        className={clsx(`cursor-pointer`, {
          "text-indigo-500 underline": status === "on the way",
          "text-indigo-300": status !== "on the way",
        })}
      >
        On the Way
      </Link>

      <Link
        href="/orders"
        className={clsx(`cursor-pointer`, {
          "text-indigo-500 underline": status === "delivered",
          "text-indigo-300": status !== "delivered",
        })}
      >
        Delivered
      </Link>
    </div>
  );
}

export default OrderLinks;
