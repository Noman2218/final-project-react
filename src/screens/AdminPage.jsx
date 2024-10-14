import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'antd'; // Import Modal and Button from Ant Design
import 'antd/dist/reset.css'; // Import Ant Design styles (optional)
import Header from '../components/Header';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  // Fetch users from JSON server
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle user creation (POST request)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/users', formData);
      setUsers([...users, response.data]);
      setFormData({ name: '', email: '' });
      // Show success modal instead of alert
      setIsSuccessModalVisible(true);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  // Show confirmation modal
  const confirmDelete = (user) => {
    setUserToDelete(user);
    setIsDeleteModalVisible(true);
  };

  // Handle user deletion (DELETE request)
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/users/${userToDelete.id}`);
      setUsers(users.filter(user => user.id !== userToDelete.id));
      setIsDeleteModalVisible(false);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  // Close the delete modal
  const handleDeleteCancel = () => {
    setIsDeleteModalVisible(false);
    setUserToDelete(null);
  };

  // Close the success modal
  const handleSuccessModalClose = () => {
    setIsSuccessModalVisible(false);
  };

  return (
    <div>  
         <div>
        <header className=" top-0 z-[1] mx-auto flex  w-full max-w-7xl items-center 
        justify-between border-b border-gray-100 bg-background p-[1.5em] 
        font-sans font-bold uppercase text-text-primary ">
          <div className=" items-center"> 
            <Logo/> 
          </div>
          <Navbar /> 
        </header>
      </div>



    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Admin Panel</h2>

        {/* User Creation Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter user name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter user email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Create User
          </Button>
        </form>

        {/* List of Users with Delete Buttons */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Users List</h3>
        <ul className="space-y-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-md shadow-sm"
            >
              <span className="text-gray-700">
                {user.name} - {user.email}
              </span>
              <Button
                danger
                onClick={() => confirmDelete(user)}
                className="bg-red-500 text-red-600 px-3 py-1 rounded-md hover:bg-red-600"
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>

        {/* Ant Design Confirmation Modal for Deletion */}
        <Modal
          title="Confirm Deletion"
          visible={isDeleteModalVisible}
          onOk={handleDelete}
          onCancel={handleDeleteCancel}
          okText="Yes, Delete"
          cancelText="Cancel"
        >
          <p>Are you sure you want to delete {userToDelete?.name}?</p>
        </Modal>

        {/* Ant Design Success Modal for User Creation */}
        <Modal
          title="User Created"
          visible={isSuccessModalVisible}
          onOk={handleSuccessModalClose}
          onCancel={handleSuccessModalClose}
          okText="OK"
        >
          <p>User created successfully!</p>
        </Modal>
      </div>
    </div>
    </div>

  );
};

export default AdminPage;
