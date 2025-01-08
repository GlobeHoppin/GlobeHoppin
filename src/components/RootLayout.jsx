import PropTypes from 'prop-types';
import PageNav from "./PageNav";
import Footer from "./Footer";

const RootLayout = ({ children }) => {
  return (
    <div className="app-container">
      <PageNav />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout; 