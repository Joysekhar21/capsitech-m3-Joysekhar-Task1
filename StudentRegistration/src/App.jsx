import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const App = () => {
    const [message,setMessage]=useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      email: "",
      course: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, "Must be at least 3 characters").required("Required"),
      age: Yup.number().min(10, "Must be at least 10 years old").required("Required"),
      email: Yup.string().email("Invalid email format").required("Required"),
      course: Yup.string().required("Required"),
    }),
    onSubmit: (values,{resetForm}) => {
      console.log("Form Data:", values);
      resetForm();
      setMessage("Student Registered Successfully");
      setTimeout(()=>{
        setMessage("");
      },3000);
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Student Registration</h2>
        {message && <p className="text-green-500 text-center">{message}</p>}
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded mt-1"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="text-red-500 text-sm">{formik.errors.name}</p>
            ) : null}
          </div>

          <div>
            <label className="block font-medium">Age</label>
            <input
              type="number"
              name="age"
              className="w-full p-2 border rounded mt-1"
              {...formik.getFieldProps("age")}
            />
            {formik.touched.age && formik.errors.age ? (
              <p className="text-red-500 text-sm">{formik.errors.age}</p>
            ) : null}
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded mt-1"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            ) : null}
          </div>

          <div>
            <label className="block font-medium">Course</label>
            <input
              type="text"
              name="course"
              className="w-full p-2 border rounded mt-1"
              {...formik.getFieldProps("course")}
            />
              
            
            {formik.touched.course && formik.errors.course ? (
              <p className="text-red-500 text-sm">{formik.errors.course}</p>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
