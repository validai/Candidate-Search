import React from "react";

type CandidateProps = {
  avatar_url: string;
  login: string;
  location?: string;
  email?: string;
  company?: string;
  bio?: string;
};

const CandidateCard: React.FC<CandidateProps> = ({
  avatar_url,
  login,
  location,
  email,
  company,
  bio,
}) => {
  return (
    <div className="candidate-card">
      <img src={avatar_url} alt={login} className="candidate-avatar" />
      <div className="candidate-details">
        <h3>{login} <em>({login})</em></h3>
        {location && <p><strong>Location:</strong> {location}</p>}
        {email && <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>}
        {company && <p><strong>Company:</strong> {company}</p>}
        {bio && <p><strong>Bio:</strong> {bio}</p>}
      </div>
    </div>
  );
};

export default CandidateCard;
