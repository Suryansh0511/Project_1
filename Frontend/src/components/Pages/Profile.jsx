import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [resumes, setResumes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    username: "", age: "", mobile: "", gender: "", dob: ""
  });

  // ✅ Fetch profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/profile", {
          headers: { Authorization: token },
        });
        setUser(res.data.user);
        setResumes(res.data.resumes);
        setForm({
          username: res.data.user.username || "",
          age:      res.data.user.age || "",
          mobile:   res.data.user.mobile || "",
          gender:   res.data.user.gender || "",
          dob:      res.data.user.dob || "",
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchProfile();
  }, []);

  // ✅ Save edited profile
  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.put("http://localhost:5000/api/profile", form, {
        headers: { Authorization: token },
      });
      setUser({ ...user, ...form });
      setEditMode(false);
      alert("Profile updated! ✅");
    } catch (err) {
      alert("Update failed!");
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>👤 Profile</h2>

        {editMode ? (
          // ✅ EDIT MODE
          <div className="edit-form">
            <label>Name</label>
            <input value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })} />

            <label>Age</label>
            <input type="number" value={form.age}
              onChange={(e) => setForm({ ...form, age: e.target.value })} />

            <label>Mobile</label>
            <input value={form.mobile}
              onChange={(e) => setForm({ ...form, mobile: e.target.value })} />

            <label>Gender</label>
            <select value={form.gender}
              onChange={(e) => setForm({ ...form, gender: e.target.value })}>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <label>Date of Birth</label>
            <input type="date" value={form.dob}
              onChange={(e) => setForm({ ...form, dob: e.target.value })} />

            <button onClick={handleSave}>💾 Save</button>
            <button onClick={() => setEditMode(false)}>Cancel</button>
          </div>
        ) : (
          // ✅ VIEW MODE
          <div className="view-form">
            <p><b>Name:</b> {user?.username}</p>
            <p><b>Email:</b> {user?.email}</p>
            <p><b>Age:</b> {user?.age || "Not set"}</p>
            <p><b>Mobile:</b> {user?.mobile || "Not set"}</p>
            <p><b>Gender:</b> {user?.gender || "Not set"}</p>
            <p><b>Date of Birth:</b> {user?.dob || "Not set"}</p>

            <button onClick={() => setEditMode(true)}>✏️ Edit Profile</button>
          </div>
        )}

        <h3>📄 Uploaded Resumes</h3>
        {resumes.map((resume) => (
          <div key={resume.id}>
            <a href={`http://localhost:5000/${resume.filepath}`}
              target="_blank" rel="noreferrer">
              {resume.filename}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;