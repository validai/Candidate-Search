import React from "react";

interface CandidateProps {
  id: number;
  avatar_url: string;
  login: string;
  location?: string;
  email?: string;
  company?: string;
  bio?: string;
  onAdd: (candidate: any) => void;
  onRemove: (candidate: any) => void;
}

const CandidateCard: React.FC<CandidateProps> = ({
  id,
  avatar_url,
  login,
  location,
  email,
  company,
  bio,
  onAdd,
  onRemove,
}) => {
  return (
    <div className="candidate-card">
      <img src={avatar_url} alt={login} className="candidate-image" />
      <div className="candidate-details">
        <h3>{login} <i>({login})</i></h3>
        {location && <p><strong>Location:</strong> {location}</p>}
        {email && <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>}
        {company && <p><strong>Company:</strong> {company}</p>}
        {bio && <p><strong>Bio:</strong> {bio}</p>}
        <div className="button-container">
          <button className="reject-button action-button" onClick={() => onRemove({ id, login })}>➖</button>
          <button className="accept-button action-button" onClick={() => onAdd({ id, login, avatar_url, location, email, company, bio })}>➕</button>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
