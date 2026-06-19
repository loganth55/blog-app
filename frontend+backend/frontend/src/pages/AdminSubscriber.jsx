import React from "react";
import { useState,useEffect } from "react";
import { getSubscriber,deleteSubscriber } from "../services/subscriberApi";

function AdminSubscriber(){

    const[subscriber,setSubscriber] = React.useState([])
     const [search, setSearch] = useState("");
    
    useEffect(()=>{
        const getsubscriber = async()=>{
            try {
              const data = await getSubscriber();
              setSubscriber(data);
            } catch (err) {
              console.log("Error fetching posts:", err);
            }
        }
        getsubscriber()
    },[])

      const handleDeleteSubscriber = async (id) => {
        try {
          await deleteSubscriber(id);
          setSubscriber(subscriber.filter((item) => item._id !== id));
        } catch (err) {
          console.log("Error fetching posts:", err);
        }
      };
    
      const filteredSubscriber = subscriber.filter((item) =>
        item.email.toLowerCase().includes(search.toLowerCase()),
      );
    

return (
  <div className="min-h-screen bg-slate-100 p-6">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Subscribers Management
        </h1>

        <p className="text-slate-500 mt-2">Manage newsletter subscribers</p>
      </div>

      {/* Stats Card */}
      <div className="bg-white rounded-3xl shadow-md p-6 mb-8">
        <h2 className="text-slate-500 text-sm uppercase tracking-wide">
          Total Subscribers
        </h2>

        <p className="text-4xl font-bold mt-2">{subscriber.length}</p>
      </div>

      {/* Search */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search subscribers..."
          className="w-full bg-white rounded-2xl shadow-md p-4 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Subscribers Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredSubscriber.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                {item.email?.charAt(0).toUpperCase()}
              </div>

              <div>
                <p className="text-sm text-slate-500">{item.email}</p>
                <p className="text-xs text-slate-400">
                  Joined: {new Date(item.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>

            <button
              onClick={() => handleDeleteSubscriber(item._id)}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-2xl transition-all"
            >
              Delete Subscriber
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}
export default AdminSubscriber