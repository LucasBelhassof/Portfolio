import Container from '../components/Container';
import Footer from '../components/layouts/Footer';
import Navbar from '../components/layouts/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className="app-shell">
      <Navbar />
      <Container customClass="min-height">{children}</Container>
      <Footer />
    </div>
  );
};

export default MainLayout;
