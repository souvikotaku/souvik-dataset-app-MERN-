import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Datasearch() {
  function closePanel3() {
    let modal = document.getElementById("myModal2");

    modal.style.display = "none";

    window.location.reload();
  }

  const [postdata, setPostdata] = useState([]);
  const [postsearch, setPostsearch] = useState("");
  const [onchange, setChange] = useState(false);

  function clicksearch() {
    axios
      .get(
        `https://souvik-dataset-app.herokuapp.com/api/datasets/${postsearch}`
      )
      .then((res) => {
        console.log(res.data);
        setPostdata(res.data);
      });
  }

  return (
    <div class="searchBox">
      <span class="close" onClick={closePanel3}>
        &times;
      </span>
      <br />
      <br />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          className="form-control col col-sm-12 searchinput"
          placeholder="Enter database no."
          onChange={(event) => {
            setPostsearch(event.target.value);
            setChange(true);
          }}
        />
      </div>

      <br />

      <button
        className="btn btn-info btn-block "
        onClick={clicksearch}
        disabled={!onchange ? "true" : ""}
      >
        search
      </button>
      <br />
      <div style={{ overflow: "scroll", height: "60%" }}>
        {postdata.map((post) => {
          return (
            <>
              <div
                style={{
                  backgroundColor: "white",
                  padding: "15px",
                  width: "100%",
                }}
              >
                <aside className="col-md-12 col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <a href={`${post.dataImage}`} target="_blank">
                        <img
                          class="piclink"
                          src={`https://souvik-dataset-app.herokuapp.com/${post.dataImage}`}
                          style={{ width: "80%", padding: "2px 2px" }}
                        />
                      </a>
                      <br />
                    </div>
                  </div>
                </aside>
              </div>
            </>
          );
        })}
      </div>

      <div>
        <h5 id="titleone" style={{ color: "red" }}></h5>
      </div>
    </div>
  );
}
