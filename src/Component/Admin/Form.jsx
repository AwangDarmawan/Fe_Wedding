import PropTypes from "prop-types";
const Form = ({ name, setName, handleSubmit }) => (
  <div className="max-w-3xl w-full bg-white shadow-md rounded-xl p-6 dark:bg-gray-800">
    <h2 className="text-2xl font-bold text-gold text-center mb-6 font-Montserrat">
      Add Invitations
    </h2>
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300"
        >
          *Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none text-black dark:text-black font-Montserrat"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gold text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition font-semibold"
      >
        Submit
      </button>
    </form>
  </div>
);
Form.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Form;
