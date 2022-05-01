const Dashboard = ({ authorize }) => {
  return (
    <>
      <h2>Dashboard</h2>
      <button onClick={() => authorize(false)}>Log Out</button>
    </>
  );
};
export default Dashboard;
