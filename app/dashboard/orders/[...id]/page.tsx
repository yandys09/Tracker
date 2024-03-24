import React from "react";

function EditOrder({
  params: { id },
  searchParams: { search },
}: {
  params: { id: string };
  searchParams: { search: string };
}) {
  console.log("id : ", id, "search : ", search);
  return <div>EditOrder</div>;
}

export default EditOrder;
