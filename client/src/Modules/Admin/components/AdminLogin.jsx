// // import React, { useState, useEffect } from 'react';
// // import { Paper, Typography, Box, TextField, Button } from '@mui/material';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import logo from '../../User/Images/logo.png';
// // import adminBackground from '../../../Images/adminbackground.jpg'; // Make sure this path is correct

// // const API_HOST = "http://localhost:5000";
// // const API_ENDPOINT = "/api/admin/login";

// // const AdminLogin = ({ setIsLoggedIn }) => {
// //     const navigate = useNavigate();
// //     const [adminToken, setAdminToken] = useState(null);
// //     const [adminInfo, setAdminInfo] = useState({ email: '', password: '' });

// //     useEffect(() => {
// //         const stoOrangeToken = localStorage.getItem('AdminToken');
// //         if (stoOrangeToken) {
// //             try {
// //                 setAdminToken(JSON.parse(stoOrangeToken));
// //             } catch (error) {
// //                 console.error("Invalid JSON in localStorage for 'AdminTokenz'");
// //             }
// //         }
// //     }, []);

// //     const handleChange = (e) => {
// //         setAdminInfo({ ...adminInfo, [e.target.name]: e.target.value });
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const res = await axios.post(`${API_HOST}${API_ENDPOINT}`, adminInfo);
// //             console.log('Response:', res.data);
// //             alert(res.data.message);
// //             if (res.data.success) {
// //                 localStorage.setItem("AdminToken", JSON.stringify(res.data.adminToken));
// //                 setAdminToken(res.data.adminToken);
// //                 setIsLoggedIn(true); // Update the login state
// //                 navigate('/admin/dashboard'); // Orangeirect to admin dashboard
// //             }
// //         } catch (err) {
// //             console.error('Error:', err.response ? err.response.data : err.message);
// //             alert(err.response ? err.response.data.message : err.message);
// //         }
// //     };

// //     return (
// //         <Box sx={{
// //             display: 'flex',
// //             // padding:'100px',
// //             justifyContent: 'center',
// //             // marginTop:'30px',
// //             // marginBottom:'30px',
// //             height: '100vh',
// //             // width:'210vh',
// //             alignItems: 'center',
// //             backgroundImage: `url(${adminBackground})`, // Use url() function to reference the image
// //             backgroundSize: 'cover',
// //             backgroundPosition: 'center'
// //         }}>
// //             <Paper sx={{
// //                 width: '400px',
// //                 padding: '2rem',
// //                 backgroundColor: 'rgba(255, 255, 255, 0.8)', // Make the background semi-transparent
// //                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
// //             }}>
// //                 <Box sx={{ textAlign: 'center', mb: 3 }}>
// //                     <img src={logo} alt="E-Recipe Book Logo" style={{ width: '100px', marginBottom: '1rem' }} /> {/* Add your logo here */}
// //                     <Typography 
// //                         sx={{ 
// //                             color: 'green', 
// //                             mb: 1, 
// //                             fontWeight: 'bold'    // Make it bold
// //                         }} 
// //                         variant="h4" 
// //                         component="h1"
// //                     >
// //                         Admin Login
// //                     </Typography>

// //                     <Typography variant="subtitle1" component="p">
// //                         Welcome back! Please login to your account.
// //                     </Typography>
// //                 </Box>
// //                 <form onSubmit={handleSubmit}>
// //                     <TextField
// //                         id="email"
// //                         name="email"
// //                         onChange={handleChange}
// //                         label="Enter Your Email"
// //                         type="email"
// //                         variant="outlined"
// //                         fullWidth
// //                         margin="normal"
// //                         sx={{ backgroundColor: 'white' }}
// //                     />
// //                     <TextField
// //                         id="password"
// //                         name="password"
// //                         onChange={handleChange}
// //                         label="Enter Your Password"
// //                         type="password"
// //                         variant="outlined"
// //                         fullWidth
// //                         margin="normal"
// //                         sx={{ backgroundColor: 'white' }}
// //                     />
// //                     <Button
// //                         type="submit"
// //                         variant="contained"
// //                         fullWidth
// //                         sx={{ mt: 2, background: 'linear-gradient(to right ,green,white)', color: 'green',fontWeight: 'bold' }}
// //                     >
// //                         Submit
// //                     </Button>
// //                 </form>
// //             </Paper>
// //         </Box>
// //     );
// // };

// // export default AdminLogin;


// import React, { useState, useEffect } from 'react';
// import { Paper, Typography, Box, TextField, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import logo from '../../User/Images/logo.png';
// import adminBackground from '../../../Images/adminbackground.jpg'; // Ensure this path is correct

// const API_HOST = "http://localhost:5000"; // Adjust with your API host
// const API_ENDPOINT = "/api/admin/login"; // Adjust with your API endpoint

// const AdminLogin = ({ setIsLoggedIn }) => {
//   const navigate = useNavigate();
//   const [adminInfo, setAdminInfo] = useState({ email: '', password: '' });
//   const [adminToken, setAdminToken] = useState(null);

//   // Check if user is already logged in
//   useEffect(() => {
//     const storedToken = localStorage.getItem('AdminToken');
//     if (storedToken) {
//       try {
//         setAdminToken(JSON.parse(storedToken));
//         setIsLoggedIn(true); // Auto login if token is in localStorage
//         navigate('/admin/dashboard'); // Redirect to dashboard
//       } catch (error) {
//         console.error("Invalid JSON in localStorage for 'AdminToken'");
//       }
//     }
//   }, [setIsLoggedIn, navigate]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAdminInfo((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(`${API_HOST}${API_ENDPOINT}`, adminInfo);
//       console.log('Response:', res.data);
//       alert(res.data.message);
//       if (res.data.success) {
//         localStorage.setItem("AdminToken", JSON.stringify(res.data.adminToken)); // Store token in localStorage
//         setAdminToken(res.data.adminToken);
//         setIsLoggedIn(true); // Update login state
//         navigate('/admin/dashboard'); // Redirect to admin dashboard
//       }
//     } catch (err) {
//       console.error('Error:', err?.response?.data || err.message);
//       alert(err?.response?.data?.message || err.message);
//     }
//   };

//   return (
//     <Box sx={{
//       display: 'flex',
//       justifyContent: 'center',
//       height: '100vh',
//       alignItems: 'center',
//       backgroundImage: `url(${adminBackground})`, // Set the background image
//       backgroundSize: 'cover',
//       backgroundPosition: 'center'
//     }}>
//       <Paper sx={{
//         width: '400px',
//         padding: '2rem',
//         backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
//       }}>
//         <Box sx={{ textAlign: 'center', mb: 3 }}>
//           <img src={logo} alt="Logo" style={{ width: '100px', marginBottom: '1rem' }} />
//           <Typography sx={{ color: 'Orangered', mb: 1, fontWeight: 'bold' }} variant="h4" component="h1">
//             Admin Login
//           </Typography>
//           <Typography variant="subtitle1" component="p">
//             Welcome back! Please login to your account.
//           </Typography>
//         </Box>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             id="email"
//             name="email"
//             onChange={handleChange}
//             label="Enter Your Email"
//             type="email"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             sx={{ backgroundColor: 'white' }}
//           />
//           <TextField
//             id="password"
//             name="password"
//             onChange={handleChange}
//             label="Enter Your Password"
//             type="password"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             sx={{ backgroundColor: 'white' }}
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             fullWidth
//             sx={{
//               mt: 2,
//               background: 'linear-gradient(to right, orange, white)',
//               color: 'orangered',
//               fontWeight: 'bold'
//             }}
//           >
//             Submit
//           </Button>
//         </form>
//       </Paper>
//     </Box>
//   );
// };

// export default AdminLogin;


import React, { useState } from 'react';
import { Paper, Typography, Box, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../User/Images/logo.png';
import adminBackground from '../../../Images/adminbackground.jpg';

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Simple mock authentication
    if (email === 'admin@example.com' && password === 'admin123') {
      setError('');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        alignItems: 'center',
        backgroundImage: `url(${adminBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Paper
        sx={{
          width: '400px',
          padding: '2rem',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <img src={logo} alt="Logo" style={{ width: '100px', marginBottom: '1rem' }} />
          <Typography sx={{ color: 'green', mb: 1, fontWeight: 'bold' }} variant="h4" component="h1">
            Admin Login
          </Typography>
          <Typography variant="subtitle1">Welcome back! Please login to your account.</Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <TextField
            id="email"
            name="email"
            label="Enter Your Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{ backgroundColor: 'white' }}
          />
          <TextField
            id="password"
            name="password"
            label="Enter Your Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{ backgroundColor: 'white' }}
          />
          {error && (
            <Typography color="error" sx={{ mt: 1, mb: 1, fontSize: '0.9rem' }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              background: 'linear-gradient(to right, green, white)',
              color: 'green',
              fontWeight: 'bold',
              ':hover': {
                background: 'linear-gradient(to right, green, green)',
              },
            }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AdminLogin;
