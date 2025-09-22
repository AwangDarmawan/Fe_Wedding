import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { encodeForShare } from "./Share";
import PropTypes from "prop-types";

const ShareButtons = ({ invitationLink, shareText }) => (
  <div className="flex gap-4 mt-4">
    <a
      href={`https://api.whatsapp.com/send?text=${encodeForShare(shareText)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-all duration-300"
    >
      <FaWhatsapp className="text-white text-2xl" />
    </a>

    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeForShare(
        invitationLink
      )}&quote=${encodeForShare(shareText)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg transition-all duration-300"
    >
      <FaFacebook className="text-white text-2xl" />
    </a>

    <a
      href={`https://twitter.com/intent/tweet?text=${encodeForShare(shareText)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-400 hover:bg-blue-500 shadow-lg transition-all duration-300"
    >
      <FaTwitter className="text-white text-2xl" />
    </a>

    <a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-500 hover:bg-pink-600 shadow-lg transition-all duration-300"
    >
      <FaInstagram className="text-white text-2xl" />
    </a>
  </div>
);
// Definisi propTypes yang benar
ShareButtons.propTypes = {
  invitationLink: PropTypes.string.isRequired,
  shareText: PropTypes.string.isRequired
};

export default ShareButtons;
