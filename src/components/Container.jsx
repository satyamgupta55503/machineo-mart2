import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <div className=" mx-auto px-4 font-sans sm:px-6 lg:px-8 w-full max-w-[100rem] ">
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
