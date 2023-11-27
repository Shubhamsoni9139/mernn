import React from 'react'

function NoPage() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: `url('https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg') center/cover no-repeat`,
      color: '#fff', // Text color
      textAlign: 'center',
    },
    heading: {
      fontSize: '24px',
      marginBottom: '10px',
      
    },
    message: {
      fontSize: '18px',
      marginBottom: '20px',
    },
    trailingContent: {
      fontStyle: 'italic',
      color: '#ccc', // Dim gray color
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}> </h2>
      <p style={styles.message}></p>
     
    </div>
  );
}
export default NoPage