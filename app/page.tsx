import Card from "@/components/Card";
import SubTitle from "@/components/SubTitle";
import Text from "@/components/Text";
import Title from "@/components/Title";

const Home = () => {
  return (
    <main className="my-20 flex w-80 flex-col gap-16 lg:w-[1080px] lg:items-center lg:gap-14 lg:m-0">
      <section className="flex flex-col gap-4 lg:w-[520px]">
        <div className="flex flex-col-reverse gap-1">
          <Title>Powered by Technology</Title>
          <SubTitle>Reliable, efficient delivery</SubTitle>
        </div>
        <Text>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </Text>
      </section>
      <section className="flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:items-center lg:gap-8">
        <Card
          className="lg:row-start-1 lg:row-end-3"
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
          className="lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3"
          id="Calculator"
          text="Uses data from past projects to provide better delivery estimates"
        />
      </section>
    </main>
  );
};

export default Home;
