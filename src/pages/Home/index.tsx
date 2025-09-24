import { Hero, OfferHero, BusinessCardContainer } from "../../components/Home";
import useHome from "./useHome";
import styles from "./Home.module.css"
import {
  QueryForm,
} from "../../components/shared";
import { Button } from "../../components/ui";
import BusinessContainerShimmer from "../../components/Home/BusinessContainer/Shimmer";

const Home = () => {
  const {
    loading,
    businesses,
    incrementPage,
  } = useHome();

  return (
    <>
      <Hero />
      <OfferHero />
      {businesses.length === 0 && loading === true ? (
        <BusinessContainerShimmer number={3} />
      ) : (
        <>
          <BusinessCardContainer businesses={businesses} />
          {loading && <BusinessContainerShimmer number={3} />}
        </>
      )}
      <div className="container flex justify-center">
        <Button radius={true} className={`${styles.showMore}`} onClick={incrementPage}>Show  more</Button>
      </div>
      <QueryForm />
    </>
  );
};
export default Home;
