import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function DeleteProduct() {
  const [data, setData] = useState([]);
  const { id } = useParams("");
  const Navigate = useNavigate("");

  useEffect(() => {
    axios.delete(`http://localhost:8000/addproduct/${id}`).then((response) => {
      setData(response.data);
      Swal.fire({
        title: "Product is Deleted",
        text: "Your Product deleted successfully",
        icon: "error",
      });
    });
    Navigate("/Admin/manage");
  });

  return (
    <>
      <section></section>
    </>
  );
}

export default DeleteProduct;
