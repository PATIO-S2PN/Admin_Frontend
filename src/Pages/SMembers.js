import React, { useState } from 'react';

const StaffMembers = () => {
  const [members, setMembers] = useState([
    { id: 1, name: 'John Doe', role: 'Admin', phoneNumber: '123-456-7890', email: 'john@example.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium libero nec est sollicitudin tincidunt.', profilePicture: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Jane Smith', role: 'Manager', phoneNumber: '987-654-3210', email: 'jane@example.com', description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed eget risus libero. Aenean euismod bibendum laoreet.', profilePicture: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Bob Johnson', role: 'Kitchen Staff', phoneNumber: '456-789-0123', email: 'bob@example.com', description: 'Praesent ac tortor sit amet nisl mollis aliquam. Proin finibus volutpat ultricies.', profilePicture: 'https://via.placeholder.com/150' }
  ]);
  const [newMember, setNewMember] = useState({ name: '', role: '', phoneNumber: '', email: '', description: '', profilePicture: '' });
  const [selectedMember, setSelectedMember] = useState(null); 
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember({ ...newMember, [name]: value });
  };

  const addMember = () => {
    if (newMember.name && newMember.role && newMember.phoneNumber && newMember.email) {
      setMembers([...members, { id: members.length + 1, ...newMember }]);
      setNewMember({ name: '', role: '', phoneNumber: '', email: '', description: '', profilePicture: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  const removeMember = (id) => {
    setMembers(members.filter(member => member.id !== id));
  };

  const handleMemberDetails = (member) => {
    setSelectedMember(member);
  };

  const handleCloseDetails = () => {
    setSelectedMember(null);
  };

  const handleSearch = () => {
    // Filter members based on search query
    // Here, I'm filtering by name
    const filteredMembers = members.filter(member => member.name.toLowerCase().includes(searchQuery.toLowerCase()));
    // Update the displayed members
    setMembers(filteredMembers);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Staff Members</h1>
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newMember.name}
          onChange={handleInputChange}
          className="mr-2 p-2 border border-gray-300 rounded"
        />
        <select
          name="role"
          value={newMember.role}
          onChange={handleInputChange}
          className="mr-2 p-2 border border-gray-300 rounded"
        >
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="Manager">Manager</option>
          <option value="Kitchen Staff">Kitchen Staff</option>
        </select>
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={newMember.phoneNumber}
          onChange={handleInputChange}
          className="mr-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newMember.email}
          onChange={handleInputChange}
          className="mr-2 p-2 border border-gray-300 rounded"
        />
        <button onClick={addMember} className="bg-blue-800 text-white px-4 py-2 rounded">Add Member</button>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mr-2 p-2 border border-gray-300 rounded"
        />
        <button onClick={handleSearch} className="bg-blue-800 text-white px-4 py-2 rounded">Search</button>
      </div>
      <div>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Phone Number</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map(member => (
              <tr key={member.id}>
                <td className="border px-4 py-2">{member.id}</td>
                <td className="border px-4 py-2 cursor-pointer hover:underline" onClick={() => handleMemberDetails(member)}>{member.name}</td>
                <td className="border px-4 py-2">{member.role}</td>
                <td className="border px-4 py-2">{member.phoneNumber}</td>
                <td className="border px-4 py-2">{member.email}</td>
                <td className="border px-4 py-2">
                  <button onClick={() => removeMember(member.id)} className="bg-yellow-600 text-white px-4 py-1 rounded">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {selectedMember && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">{selectedMember.name}</h2>
              <button onClick={handleCloseDetails} className="text-gray-600 hover:text-gray-800">&times;</button>
            </div>
            <div className="flex justify-between">
              <div className="w-1/3">
                <img src={selectedMember.profilePicture} alt={selectedMember.name} className ="w-full rounded-lg" />
              </div>
              <div className="w-2/3">
                <p><strong>Role:</strong> {selectedMember.role}</p>
                <p><strong>Phone Number:</strong> {selectedMember.phoneNumber}</p>
                <p><strong>Email:</strong> {selectedMember.email}</p>
                <p><strong>Description:</strong> {selectedMember.description}</p>
              </div>
            </div>
            <button onClick={handleCloseDetails} className="mt-4 bg-blue-800 text-white px-4 py-2 rounded">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffMembers;

