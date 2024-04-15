
import Upbar from "@/app/ui/components/upbar";
import OrderLinks from "@/app/ui/orders/order-links";
import Pagination from "@/app/ui/orders/pagination";
import SearchOrders from "@/app/ui/orders/search-orders";
import Table from "@/app/ui/orders/table";
import React from "react";

async function Orders() {
  
  return (
    <main className="w-full overflow-hidden h-full">
      <Upbar>
        <>
          <h2 className="text-xl md:text-2xl font-bold text-indigo-100 ">
            Orders
          </h2>
          <div className="w-40 md:w-[800px] relative">
            <SearchOrders />
          </div>
        </>
      </Upbar>

      <OrderLinks />
      <Table />
      <Pagination />
    </main>
  );
}

export default Orders;
