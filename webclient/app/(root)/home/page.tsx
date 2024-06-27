import HomeCard from "@/components/main/HomeCard";
import AuthRouter from "@/components/sub/AuthRouter";
import React from "react";

const HomePage = () => {
  const fakeArray = Array.from({ length: 20 }, (_, index) => ({
    title: `Card Title ${index + 1}`,
    description: `This is the description for card ${index + 1}.`,
  }));

  return (
    <AuthRouter>
      <section className="w-full min-h-screen">
        {/* card grid container */}
        <div className="grid gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {fakeArray.map((item, index) => (
            <HomeCard key={index} />
          ))}
        </div>
      </section>
    </AuthRouter>
  );
};

export default HomePage;
