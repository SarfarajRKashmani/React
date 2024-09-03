import React, { useState } from 'react'
import Showpdt from './Show';
import 'bootstrap/dist/css/bootstrap.min.css';


const Form = () => {
    const [pdts ,setpdts]=useState([])
    const [pdt,setpdt]=useState({
        image:"",
        title:"",
        price:"",
        Discription:""
    })
    const Submit = (event) => {
      event.preventDefault();
      setpdts([...pdts, pdt]);
      setpdt({
        image: "",
        title: "",
        price: "",
        Discription: "",
      });
    };
  
    const Change = (event) => {
      const { name, value } = event.target;
      setpdt({ ...pdt, [name]: value });
    };
    
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
  <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
    <form onSubmit={Submit} className="space-y-4">
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Img Url:
        </label>
        <input
          type="text"
          name="image"
          value={pdt.image}
          onChange={Change}
          className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title:
        </label>
        <input
          type="text"
          name="title"
          value={pdt.title}
          onChange={Change}
          className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Price:
        </label>
        <input
          type="number"
          name="price"
          value={pdt.price}
          onChange={Change}
          className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Category:
        </label>
        <input
          type="text"
          name="Discription"
          value={pdt.Discription}
          onChange={Change}
          className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Add Product
      </button>
    </form>

    <div className="mt-8">
      <ul className="space-y-4">
        {pdts.map((pdt, index) => (
          <Showpdt key={index} index={index} pdts={pdt} />
        ))}
      </ul>
    </div>
  </div>
</div>

  )
}

export default Form
