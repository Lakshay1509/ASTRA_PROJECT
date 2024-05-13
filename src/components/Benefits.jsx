import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "../constants/Index";
import Arrow from "../assets/svg/Arrow";
import  {GradientLight} from "../design/Benefits"

function Benefits() {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="The Art of Smarter Chatting"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5  md:max-w-[24rem] border border-white rounded-2xl"
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase">
                    Explore More
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight/>}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Benefits;
