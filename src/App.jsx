import React, { useState } from 'react';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);
  const [currentJob, setCurrentJob] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const addJob = (job) => {
    setJobs([...jobs, job]);
    setShowForm(false);
  };

  const editJob = (updatedJob) => {
    const updatedJobs = jobs.map((job) =>
      job.id === updatedJob.id ? updatedJob : job
    );
    setJobs(updatedJobs);
    setShowForm(false);
    setCurrentJob(null);
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const job = {
      id: currentJob ? currentJob.id : Date.now(),
      company: formData.get('company'),
      position: formData.get('position'),
      status: formData.get('status'),
    };
    currentJob ? editJob(job) : addJob(job);
    event.target.reset();
  };

  return (
    <div className="app">
      <h1>Job Tracker</h1>
      <nav>
        <button onClick={() => setShowForm(true)}>Add Job</button>
        <button onClick={() => setShowForm(false)}>View Jobs</button>
      </nav>

      {showForm && (
        <div className="add-job-form">
          <h2>{currentJob ? 'Edit Job' : 'Add Job'}</h2>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              required
              defaultValue={currentJob ? currentJob.company : ''}
            />
            <input
              type="text"
              name="position"
              placeholder="Position"
              required
              defaultValue={currentJob ? currentJob.position : ''}
            />
            <select name="status" required defaultValue={currentJob ? currentJob.status : ''}>
              <option value="">Select Status</option>
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Offer">Offer</option>
            </select>
            <button type="submit">{currentJob ? 'Update Job' : 'Add Job'}</button>
          </form>
        </div>
      )}

      {!showForm && (
        <div className="job-list">
          <h2>Job List</h2>
          <ul>
            {jobs.map((job) => (
              <li key={job.id}>
                <strong>{job.company}</strong> - {job.position} ({job.status})
                <button onClick={() => {
                  setCurrentJob(job);
                  setShowForm(true);
                }}>Edit</button>
                <button onClick={() => deleteJob(job.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <footer>
        <p>Job Tracker © 2024</p>
      </footer>
    </div>
  );
}

export default App;
