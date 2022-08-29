const LinkForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    return false;
  };

  return (
    <div className="linkform-container">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Shorten your link" />
        <button>Shorten</button>
      </form>
    </div>
  );
};

export default LinkForm;
