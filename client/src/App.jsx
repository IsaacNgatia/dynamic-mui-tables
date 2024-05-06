import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SelectDepartment from "./components/selectDept";
import SelectService from "./components/selectService";
import SelectOwner from "./components/selectOwner";
import SetStatusTable from "./components/setStatus";
import SetTimelineTable from "./components/setTimeline";
import SetOnEcitizenTable from "./components/onEcitizen";
import SelectPolicyTable from "./components/selectPolicy";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [owners, setOwners] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedServicesId, setSelectedServicesId] = useState([]);
  const [selectedServicesObj, setSelectedServicesobj] = useState([]);
  const [selectedOwner, setSelectedOwner] = useState("");
  const [manualServicesObj, setManualServicesObj] = useState([]);
  const [policiesId, setPoliciesId] = useState([]);
  const [policies, setPolicies] = useState([]);
  const [policyData, setPolicyData] = useState([]);
  // fetch data from db
  const fetchData = async () => {
    try {
      const ownersResponse = await axios.get(
        "http://localhost:3000/api/get-owners"
      );
      setOwners(ownersResponse.data.data);
      const departmentResponse = await axios.get(
        "http://localhost:3000/api/get-departments"
      );
      setDepartments(departmentResponse.data.data);
      const policiesResponse = await axios.get(
        "http://localhost:3000/api/get-policies"
      );
      setPolicies(policiesResponse.data.data);
    } catch (error) {
      return;
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  //adding status to services
  const addStatusToService = (id, newValue) => {
    const newData = selectedServicesId.map((obj) => {
      if (obj.value === id) {
        // If newValue is 1, add the 'timeline' attribute with a value of null
        if (newValue === 1) {
          return { ...obj, digital: newValue, timeline: null };
        } else {
          // If newValue is not 1, return the object as is
          return { ...obj, digital: newValue };
        }
      } else {
        // If the value doesn't match, return the object as is
        return obj;
      }
    });
    setSelectedServicesId(newData);
  };

  //adding On E-ctizen
  const addOnecitizenToService = (id, newValue) => {
    const newData = selectedServicesId.map((obj) =>
      obj.value === id ? { ...obj, onEcitizen: newValue } : obj
    );
    setSelectedServicesId(newData);
  };

  //Adding timeline
  const addTimelineToManual = (id, newValue) => {
    const newData = manualServicesObj.map((obj) =>
      obj.obj.id === id ? { ...obj, timeline: newValue } : obj
    );
    setSelectedServicesId(newData);
    const newData1 = selectedServicesId.map((obj) =>
      obj.value === id ? { ...obj, timeline: newValue } : obj
    );
    setSelectedServicesId(newData1);
  };
  const handlePolicyChange = (newData) => {
    //  setData(newData);
    // You can perform any relevant actions with newData here
    setPolicyData(newData);
  };

  //write to db
  const writeData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/write-data",
        {
          owner: selectedOwner,
          department: selectedDepartment,
          services: selectedServicesId,
          policyData: policyData,
        }
      );
      console.log(response.data);
    } catch (error) {
      return;
    }
  };

  return (
    <main className="flex flex-col space-y-3 md:space-y-6 bg-[#f5f5f5] min-h-screen lg:space-y-10 items-center p-2 text-gray-900 md:p-6 lg:p-10 overflow-x-hidden">
      <h2 className="text-[#111111] text-center font-bold uppercase text-2xl md:text-4xl">
        Egerton University
      </h2>{" "}
      <div className="mx-2 lg:mx-28 text-justify text-sm md:text-base">
        {" "}
        <p className="">
          Ex magna nulla do incididunt minim eu id aute exercitation non non ex.
          Eu incididunt enim ullamco labore ipsum id nulla reprehenderit cillum
          pariatur eu. Est officia ut pariatur cupidatat proident. Et velit
          pariatur minim commodo commodo voluptate amet consequat irure. Ex id
          anim proident nostrud qui.
        </p>
        <br />
        <p>
          Ex magna nulla do incididunt minim eu id aute exercitation non non ex.
          Eu incididunt enim ullamco labore ipsum id nulla reprehenderit cillum
          pariatur eu. Est officia ut pariatur cupidatat proident. Et velit
          pariatur minim commodo commodo voluptate amet consequat irure. Ex id
          anim proident nostrud qui.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:mx-28 mx-1 md:mx-12 w-full md:px-5 lg:px-10">
        <div className="flex flex-col space-y-3 lg:max-w-[1/3]">
          <h2 className="text-center font-semibold text-lg md:text-xl">
            Select a department
          </h2>
          <SelectDepartment
            departments={departments}
            selected={(id) => setSelectedDepartment(id)}
          />
        </div>
        <div className="flex flex-col space-y-3">
          <h2 className="text-center font-semibold text-lg md:text-xl">
            Select services
          </h2>
          <SelectService
            selectedId={(id) =>
              setSelectedServicesId([
                ...selectedServicesId,
                { id: selectedServicesId.length + 1, value: id },
              ])
            }
            object={(obj) =>
              setSelectedServicesobj([
                ...selectedServicesObj,
                { id: selectedServicesObj.length + 1, obj: obj },
              ])
            }
            index={selectedServicesId.length}
          />
        </div>
        <div className="flex flex-col space-y-3">
          <h2 className="text-center font-semibold text-lg md:text-xl">
            Select Business/Process Owner
          </h2>
          <SelectOwner
            owners={owners}
            selected={(id) => setSelectedOwner(id)}
          />
        </div>
      </div>
      {selectedServicesObj[0] && (
        <div className="mx-1 md:mx-12 lg:mx-28 w-full space-y-5">
          <h2 className="font-bold text-lg md:text-xl text-center">
            Set the Current status of the Services
          </h2>
          <div className="overflow-x-scroll shadow-2xl lg:max-w-[60%] mx-auto">
            <SetStatusTable
              services={selectedServicesObj}
              addStatus={(i, v) => addStatusToService(i, v)}
              setManual={(manual) =>
                setManualServicesObj([
                  ...manualServicesObj,
                  { id: manualServicesObj.length + 1, obj: manual },
                ])
              }
              filter={(filter) => setManualServicesObj(filter)}
              manual={manualServicesObj}
            />
          </div>
        </div>
      )}
      {selectedServicesObj[0] && manualServicesObj[0] && (
        <div className="mx-1 md:mx-12 lg:mx-28 w-full space-y-5 pt-10">
          <h2 className="font-bold text-lg md:text-xl lg:text-2xl text-center">
            Set the Timeline to Digitize the Manual Services
          </h2>
          <div className="overflow-x-scroll lg:max-w-[60%] shadow-2xl mx-auto">
            <SetTimelineTable
              manualServices={manualServicesObj}
              addTimeline={(i, v) => addTimelineToManual(i, v)}
            />
          </div>
        </div>
      )}
      {selectedServicesObj[0] && (
        <div className="mx-1 md:mx-12 lg:mx-28 w-full space-y-5 pt-10">
          <h2 className="font-bold text-lg md:text-xl lg:text-2xl text-center">
            Services on-Boarded on E-citizen
          </h2>
          <div className="overflow-x-scroll lg:max-w-[60%] shadow-2xl mx-auto">
            <SetOnEcitizenTable
              services={selectedServicesObj}
              addOnEcitizen={(i, v) => addOnecitizenToService(i, v)}
            />
          </div>
        </div>
      )}
      <div className="mx-1 md:mx-12 lg:mx-28 w-full space-y-5 pt-10">
        <h2 className="font-bold text-lg md:text-xl lg:text-2xl text-center">
          Select the guiding legal instrument/policy for the Services
        </h2>
        <div className="overflow-x-scroll lg:max-w-[60%] shadow-2xl mx-auto">
          <SelectPolicyTable
            data={policies}
            onDataChange={handlePolicyChange}
            setPoliciesArray={(obj) =>
              setPoliciesId([
                ...policiesId,
                { id: policiesId.length + 1, obj: obj },
              ])
            }
          />
        </div>
      </div>
      <button
        onClick={() => writeData()}
        class="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold py-2 px-4 rounded hover:from-purple-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 dark:bg-gradient-to-r dark:from-purple-700 dark:to-indigo-800 dark:hover:from-purple-800 dark:hover:to-indigo-900 dark:focus:ring-indigo-500"
      >
        Submit
      </button>
    </main>
  );
}

export default App;
