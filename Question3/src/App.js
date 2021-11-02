import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Tree from './Tree';



const App = () => {
    const [treeArray, setTreeArray] = useState([]);

   // run only once
   useEffect(() => {
       axios.get("http://localhost:8080/fetchTree")
       .then(res => {
           setTreeArray(res.data)
       })
       .catch(err => console.log(err.message))
   }, []);

  return (
    <>
      <div className="row">
        <div className="col text-left">
          <h2>Tree Select Component</h2>
          <p>-- Please click on the label to expand it</p>
          <p className="mt-3">
            <div className="row mt-3 d-flex justify-content-center">
              <div className="col-lg-8 text-left text-dark">
              <Tree data={treeArray} />
              </div>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default App;