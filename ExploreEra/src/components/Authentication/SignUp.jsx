// import  { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from "./Header";

// export function SignUp() {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//       name: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//     });
  
//     const handleInputChange = (e) => {
//       setFormData({
//         ...formData,
//         [e.target.name]: e.target.value,
//       });
//     };
//   return (
//     <div className="flex justify-center items-center h-screen">
//         <Header />
//       <form onSubmit={} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
//             Name
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="name"
//             type="text"
//             placeholder="Enter your name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
//             Email
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="email"
//             type="email"
//             placeholder="Enter your email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
//             Password
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="password"
//             type="password"
//             placeholder="Enter your password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="confirmPassword">
//             Confirm Password
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="confirmPassword"
//             type="password"
//             placeholder="Confirm your password"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Sign Up
//           </button>
//           </div>
//      </form>
//     </div>
// )}