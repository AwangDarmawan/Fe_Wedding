import PropTypes from "prop-types";
import ShareButtons from "./ShareButtons";

const Preview = ({ submittedName, invitationLink, shareText }) => (
  <div className="max-w-3xl w-full mt-6 p-6 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md">
    <p className="whitespace-pre-line leading-relaxed text-gray-800 dark:text-gray-100 font-Montserrat">
      Kepada Yth. <strong>{submittedName}</strong>
      {"\n\n"}
      {shareText.split(invitationLink).map((part, index, arr) => (
        <>
          {part}
          {index < arr.length - 1 && (
            <a
              href={invitationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {invitationLink}
            </a>
          )}
        </>
      ))}
    </p>
    <ShareButtons invitationLink={invitationLink} shareText={shareText} />
  </div>
);

Preview.propTypes = {
  submittedName: PropTypes.string.isRequired,
  invitationLink: PropTypes.string.isRequired,
  shareText: PropTypes.string.isRequired
};

export default Preview;
