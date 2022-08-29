const ShortedLinkCard = (props) => {
  return (
    <div className="shorted-link-card">
      <p>{props.longurl}</p>
      <p>{props.shorturl}</p>
      <i className="las la-clipboard"></i>
    </div>
  );
};

export default ShortedLinkCard;
