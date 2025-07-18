import React from "react";
import { useState,useEffect } from "react";
import Navbar from "./Component/Navbar";
import Filter from "./Component/Filter";
import { apiUrl, filterData } from "./data";
import Cards from "./Component/Cards";
import { toast } from "react-toastify";
import Snipper from "./Component/Snipper";

function App() {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      
      setCourses(output.data);
    }
    catch(error) {
      toast.error("Network Issue");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  


  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">

      <div>
        <Navbar />
      </div>

        <div>
          <Filter 
            filterData={filterData}
            category = {category}
            setCategory = {setCategory}
          />
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]:">
          {
            loading ? (<Snipper/>) : (<Cards courses={courses} category={category}/>)
          }
        </div>

    </div>
  );
}

export default App;
