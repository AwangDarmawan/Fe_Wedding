const Admin = () => {
  return (
    <>
   <div className="min-h-screen flex items-center justify-center bg-white-100">
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6 ">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gold text-center mb-6 font-Montserrat">
         add invitations
        </h2>
      {/* Form */}
      <form className="space-y-4">
        {/* Name Input */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            *Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none text-black dark:text-black font-Montserrat"
            placeholder="Your Name"
          />
        </div>

        {/* Message Input */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            *Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="3"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none font-Montserrat dark:text-black"
            placeholder="Write your message here..."
          ></textarea>
        </div>
      </form>
      </div>
      </div>
    </>
  );
};

export default Admin;
