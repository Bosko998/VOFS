import { fetchHomeStaticProps } from "@utils/api";
import Hero from "@components/Hero";

const Home = async () => {
  const { props } = await fetchHomeStaticProps(); // Call your data fetching function
  const { story } = props; // Destructure story from props
  return (
    <>
      <h1>{story ? story.name : "My Site"}</h1>
      <Hero />
    </>
  );
};
export default Home;
