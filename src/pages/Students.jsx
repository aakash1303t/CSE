import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentList = ({ selectedDepartment = 'Cse', selectedYear = 'All' }) => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentYear, setCurrentYear] = useState(selectedYear); // Track current year for filtering

  const fetchStudents = async () => {
    try {
      const formattedDepartment = selectedDepartment.charAt(0).toUpperCase() + selectedDepartment.slice(1).toLowerCase();
      const params = { department: formattedDepartment, year: currentYear };

      const response = await axios.get('https://backend-autmdu.autmdu.in/api/students', { params });
      if (response.status === 204 || response.data.length === 0) {
        setStudents([]);
        setError(null);
      } else {
        setStudents(response.data);
        setError(null);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setStudents([]);
        setError(null);
      } else {
        setError('No data found.');
        setStudents([]);
      }
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [selectedDepartment, currentYear]); // Fetch students whenever the department or currentYear changes

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const yearOptions = selectedDepartment === 'Mba' ? ['All', '1', '2'] : ['All', '1', '2', '3', '4'];

  const styles = {
    container: { padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' },
    headerContainer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '20px', flexWrap: 'wrap' },
    h1: { fontSize: windowWidth < 480 ? '18px' : windowWidth < 768 ? '20px' : '24px', fontWeight: 'bold', margin: '0', flex: 1 },
    selectBox: { display: 'flex', alignItems: 'center', fontWeight: 'bold', marginTop: windowWidth < 768 ? '10px' : '0', width: windowWidth < 480 ? '100%' : 'auto' },
    cardGrid: { display: 'grid', gridTemplateColumns: windowWidth < 768 ? 'repeat(2, 1fr)' : windowWidth < 1024 ? 'repeat(3, 1fr)' : 'repeat(5, 1fr)', gap: '20px', width: '100%' },
    card: { backgroundColor: '#f9f9f9', padding: windowWidth < 480 ? '10px' : '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' },
    img: { width: '100%', height: 'auto', borderRadius: '8px' },
    h2: { fontSize: windowWidth < 480 ? '14px' : windowWidth < 768 ? '16px' : '18px', margin: '10px 0' },
    p: { margin: '0', fontSize: windowWidth < 480 ? '12px' : windowWidth < 768 ? '14px' : '16px' },
    select: { padding: '10px', borderRadius: '5px', fontSize: '16px' },
  };

  const handleYearChange = (e) => {
    setCurrentYear(e.target.value);
  };

  return (
    <div style={styles.container}>
      <div style={styles.headerContainer}>
        <div style={styles.selectBox}>
          <label htmlFor="year" style={{ marginRight: '10px', fontWeight: 'bold' }}>
            Select Year:
          </label>
          <select
            id="year"
            style={styles.select}
            value={currentYear}
            onChange={handleYearChange}
          >
            {yearOptions.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div style={styles.cardGrid}>
        {error ? (
          <div>Error: {error}</div>
        ) : students.length === 0 ? (
          <div>No students found.</div>
        ) : (
          students.map(student => (
            <div key={student.registrationNumber} style={styles.card}>
              <h2 style={styles.h2}>{student.studentName}</h2>
              <p>Registration Number: {student.registrationNumber}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default StudentList;
