const styles = {
  container: {
    fontFamily: "Roboto",
    minHeight: "calc(100hv - 50px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>📕 Phonebook ☎️</h1>
  </div>
);

export default HomeView;
