import LinkForm from "../components/LinkForm";
import LinkCard from "../components/LinkCard";

const Home = () => {
  return (
    <div className="page-content">
      <div className="link-container">
        <h1>Url Shortener</h1>
        <h4>Short links, big results</h4>
        <LinkForm />
      </div>
      <div className="list-container">
        <LinkCard />
      </div>
    </div>
  );
};

export default Home;
