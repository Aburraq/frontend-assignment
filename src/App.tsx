import { useState } from 'react';
import NavigationTabs from './components/NavigationTabs';
import TabItem from './components/TabItem';
import { tabContent } from './data/tab-content';

export function App() {
  const data = tabContent;
  const [activeTabId, setActiveTabId] = useState(data[0]._id);

  return (
    <div className="flex min-h-screen items-center justify-center bg-button-hover bg-gray-50">
      <main className="bg-white w-full h-[736px] flex flex-col  justify-end overflow-y-auto">
        <TabItem activeTab={data.find((item) => item._id === activeTabId)} />
        <div className="h-[124px] w-full overflow-x-auto md:overflow-hidden flex justify-start xl:justify-center z-20">
          <div className="flex w-full ">
            {data.map((item) => (
              <NavigationTabs
                key={item._id}
                tabTitle={item.tabTitle}
                menuIcon={item.menuIcon}
                isActive={item._id === activeTabId}
                onClick={() => setActiveTabId(item._id)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
