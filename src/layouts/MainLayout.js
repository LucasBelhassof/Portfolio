import Container from '../components/Container';
import Footer from '../components/layouts/Footer';
import Navbar from '../components/layouts/Navbar';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container customClass="min-height">{children}</Container>
      <Footer />
    </>
  );
};

export default MainLayout;
