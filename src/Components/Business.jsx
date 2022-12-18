import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={` p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    }`}
    // } feature-card`}
  >
    <a
      href="#"
      className="block max-w-sm p-6  border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-violet-900"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{content}</p>
    </a>
  </div>
);

const Business = () => (
  <section id="features">
    <div class="grid grid-cols-4 gap-4">
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
