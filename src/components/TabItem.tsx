import { TabContent } from '../data/tab-content';
import { fadeInOut, slideUp } from '../utils/animations';
import { AnimatePresence, motion } from 'motion/react';

interface TabItemProps {
  activeTab: TabContent | undefined;
}

const TabItem: React.FC<TabItemProps> = ({ activeTab }: TabItemProps) => {
  return (
    <div className="flex flex-col lg:flex-row-reverse lg:justify-around items-center text-center lg:text-end p-5 pb-0 bg-white rounded-lg gap-5 lg:gap-0 overflow-hidden ">
      <AnimatePresence initial={true} mode="wait">
        <motion.div
          key={activeTab?._id}
          {...fadeInOut}
          className="flex flex-col h-[275px] lg:items-end items-center gap-5 z-0 "
        >
          <h2 className="text-lg font-bold tracking-wider text-blue-600 uppercase">
            {activeTab?.tabTitle}
          </h2>
          <h1 className="text-3xl font-bold">{activeTab?.contentTitle}</h1>
          <p className="leading-relaxed max-w-[556px] w-auto lg:w-[450px] xl:w-[556px]">
            {activeTab?.textContent}
          </p>
          <button className="px-5 py-3 border border-gray-300 cursor-pointer bg-white mb-5">
            Learn More
          </button>
        </motion.div>
      </AnimatePresence>
      <div className="relative w-[219px] lg:w-[426px] h-[288px]  lg:h-[560px] origin-bottom relative z-10">
        <AnimatePresence initial={true}>
          <motion.img
            key={activeTab?._id}
            {...slideUp}
            src={activeTab?.phoneImg}
            alt="Phone Image"
            className="max-w-full h-[288px]  lg:h-[560px] origin-bottom absolute top-0 z-0"
          />
          {Array.isArray(activeTab?.animationImages) &&
            activeTab?.animationImages?.map((item) => (
              <motion.img
                key={`${activeTab?._id}-${item?.iconId}`}
                src={item.iconName}
                alt={item.iconName}
                className={`absolute ${item?.position} z-50 `}
                {...item.animation}
              />
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TabItem;
