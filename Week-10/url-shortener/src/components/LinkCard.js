import ShortedLinkCard from "./ShortedLinkCard";

const LinkCard = () => {
  let longURL =
    "https://www.google.com/search?q=shortly.com&amp;oq=sho&amp;aqs=chrome.1.69i57j69i59l2j69i61l3j69i65l2.2163j0j1&amp;sourceid=chrome&amp;ie=UTF-8";
  let shortURL = "https://bit.ly/3R0Z4to";

  return (
    <div className="linklist-container">
      <ShortedLinkCard longurl={longURL} shorturl={shortURL} />
      <ShortedLinkCard longurl={longURL} shorturl={shortURL} />
    </div>
  );
};

export default LinkCard;
