import Card from "@/components/Card";
import SubTitle from "@/components/SubTitle";
import Text from "@/components/Text";
import Title from "@/components/Title";

const Home = () => {
  return (
    <main>
      <section>
        <div>
          <Title>Powered by Technology</Title>
          <SubTitle>Reliable, efficient delivery</SubTitle>
        </div>
        <Text>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </Text>
      </section>
      <section>
        <Card
          id="Supervisor"
          text="Monitors activity to identify project roadblocks"
        />
        <Card
          id="Team Builder"
          text="Scans our talent network to create the optimal team for your project"
        />
        <Card
          id="Karma"
          text="Regularly evaluates our talent to ensure quality"
        />
        <Card
          id="Calculator"
          text="Uses data from past projects to provide better delivery estimates"
        />
      </section>
    </main>
  );
};

export default Home;
