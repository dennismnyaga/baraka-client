import React from 'react';
import { Link } from 'react-router-dom';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useAppDispatch } from '../app/hooks';
import { logout } from '../features/auths/authSlice';
import AdminsFooter from '../components/AdminsFooter';



const AdminAssign = () => {
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(logout())
  }
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header Section */}
      <div className="bg-blue-600 text-white py-4 shadow-md flex items-center justify-between px-3">
        <div>
          <h1 className="text-3xl font-bold text-center">Admin Dashboard</h1>
          <p className="text-center mt-2">Manage Your Business and Records Efficiently</p>
        </div>
        <PowerSettingsNewIcon onClick={handleLogOut} />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          to="/admins/assign"
          className="bg-white hover:bg-blue-50 border border-blue-500 text-blue-600 rounded-lg shadow-lg flex flex-col justify-center items-center p-6 transition duration-300 ease-in-out"
        >
          <h3 className="text-xl font-semibold">Assign Cylinders</h3>
          <p className="mt-2 text-sm">Distribute cylinders to sales teams.</p>
        </Link>

        <Link
          to="/admins/collect"
          className="bg-white hover:bg-blue-50 border border-blue-500 text-blue-600 rounded-lg shadow-lg flex flex-col justify-center items-center p-6 transition duration-300 ease-in-out"
        >
          <h3 className="text-xl font-semibold">Collect Cylinders</h3>
          <p className="mt-2 text-sm">Collect the Cylinders effectively</p>
        </Link>
        <Link
          to="/admins/assignothers"
          className="bg-white hover:bg-blue-50 border border-blue-500 text-blue-600 rounded-lg shadow-lg flex flex-col justify-center items-center p-6 transition duration-300 ease-in-out"
        >
          <h3 className="text-xl font-semibold">Assign Other Products</h3>
          <p className="mt-2 text-sm">Allocate Other Products.</p>
        </Link>

        <div className="bg-white hover:bg-green-50 border border-green-500 text-green-600 rounded-lg shadow-lg flex flex-col justify-center items-center p-6 transition duration-300 ease-in-out">
          <h3 className="text-xl font-semibold">Other Sold</h3>
          <p className="mt-2 text-sm">Track sales of other items</p>
        </div>

        <Link
          to="/admin/sales"
          className="bg-white hover:bg-green-50 border border-green-500 text-green-600 rounded-lg shadow-lg flex flex-col justify-center items-center p-6 transition duration-300 ease-in-out"
        >
          <h3 className="text-xl font-semibold">Sales Record</h3>
          <p className="mt-2 text-sm">Access detailed sales data</p>
        </Link>

        <Link to='/admins/employees'>
          <div className="bg-white hover:bg-yellow-50 border border-yellow-500 text-yellow-600 rounded-lg shadow-lg flex flex-col justify-center items-center p-6 transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold">Employees</h3>
            <p className="mt-2 text-sm">Manage employees data efficiently</p>
          </div>
        </Link>

      </div>


      <AdminsFooter />

    </div>
  );
};

export default AdminAssign;
