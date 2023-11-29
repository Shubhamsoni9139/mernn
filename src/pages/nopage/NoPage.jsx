import React from 'react'

function NoPage() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: `url('https://static.vecteezy.com/system/resources/previews/008/255/803/large_2x/page-not-found-error-404-system-updates-uploading-computing-operation-installation-programs-system-maintenance-a-hand-drawn-layout-template-of-a-broken-robot-illustration-vector.jpg') center/cover no-repeat`,
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