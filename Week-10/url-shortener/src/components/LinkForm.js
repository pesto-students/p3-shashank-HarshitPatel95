import React, { useState } from "react";

const LinkForm = () => {
  const [enteredUrl, setEnteredUrl] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch("https://api.shrtco.de/v2/shorten?url=" + enteredUrl)
      .then((res) => res.json())
      .then(
        (res) => {
          console.log(res.result.full_short_link);
          setEnteredUrl("");
        },
        (error) => {
          console.error(error);
        }
      );
    return false;
  };

  return (
    <div className="linkform-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Shorten your link"
          value={enteredUrl}
          onChange={(e) => setEnteredUrl(e.target.value)}
        />
        <button>Shorten</button>
      </form>
    </div>
  );
};

export default LinkForm;
