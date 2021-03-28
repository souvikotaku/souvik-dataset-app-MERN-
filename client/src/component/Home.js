import React, { useState, useEffect } from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import Datasearch from "./Datasearch";
import CategorySearch from "./CategorySearch";

export default function Home() {
  const [dataset, setDataset] = useState("");
  const [category, setCategory] = useState("");

  const [filenow, setFilenow] = useState("");

  const { register, handleSubmit, errors, watch } = useForm();

  const authAxios = axios.create({
    baseURL: "https://souvik-dataset-app.herokuapp.com",
  });

  const onSubmit = () => {
    let formData = new FormData();
    formData.append("dataset", dataset);
    formData.append("category", category);

    formData.append("dataImage", filenow);

    const add_data = {
      dataset: dataset,
      category: category,
      dataImage: filenow,
    };
    console.log(add_data);

    authAxios.post("/api/image", formData).then((res) => {
      //  console.log(res);

      alert("Your data has been added successfully");

      //  console.log(res.data);
      window.location.reload();
    });
  };

  function datasearch() {
    let updatebox = document.querySelector(".tablediv2");

    updatebox.style.display = "block";
  }

  function categorysearch() {
    let updatebox = document.querySelector(".tablediv3");

    updatebox.style.display = "block";
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div class="tablecon3">
        <form
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
          style={{ width: "100%" }}
        >
          <div style={{ textAlign: "center" }} class="inp1">
            <h1>Add Data</h1>
          </div>
          <br />
          <div class="inp1">
            <label for="dataset"> Dataset </label>
            <input
              class="form-control"
              name="dataset"
              type="number"
              style={{ marginLeft: "3%" }}
              required
              placeholder="Enter Dataset Number"
              onChange={(event) => {
                setDataset(event.target.value);
              }}
            />
          </div>
          <br />
          <div class="inp1">
            <label for="category"> Category </label>
            <input
              class="form-control"
              name="category"
              type="number"
              style={{ marginLeft: "3%" }}
              required
              placeholder="Enter Category Number"
              onChange={(event) => {
                setCategory(event.target.value);
              }}
            />
          </div>

          {/* <p id="descriptionError" style={{visibility: 'hidden', color:'red', textAlign: 'center'}}>Please enter a description</p> */}

          <br />
          <label>Upload image</label>

          <div style={{ marginLeft: "16%" }}>
            <input
              type="file"
              name="dataImage"
              required
              onChange={(event) => {
                setFilenow(event.target.files[0]);
              }}
            />
          </div>

          <br />
          <br />
          <div style={{ textAlign: "center" }} class="inp1">
            <button className="btn btn-success btn-md" type="submit">
              Add Data
            </button>
          </div>
          <br />
          <div style={{ textAlign: "center" }}>
            <div>
              <button
                className="btn btn-sm btn-primary btn-md"
                onClick={datasearch}
              >
                Search by dataset
              </button>
            </div>
            <br />
            <div>
              <button
                className="btn btn-sm btn-info btn-md"
                onClick={categorysearch}
              >
                Search by category
              </button>
            </div>
          </div>
        </form>
      </div>
      <div id="myModal2" class="modal tablediv2" style={{ display: "none" }}>
        <Datasearch />
      </div>
      <div id="myModal3" class="modal2 tablediv3" style={{ display: "none" }}>
        <CategorySearch />
      </div>
    </div>
  );
}
