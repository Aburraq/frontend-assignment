import CircleAnimation from './CircleAnimation';

interface NavigationTabsProps {
  tabTitle: string;
  menuIcon: string;
  isActive: boolean;
  onClick: () => void;
}

const NavigationTabs: React.FC<NavigationTabsProps> = ({
  tabTitle,
  menuIcon,
  isActive,
  onClick,
}: NavigationTabsProps) => {
  return (
    <button
      className={`flex flex-shrink-0 items-center justify-center gap-3 px-5 py-3 border-x min-w-[301px] md:w-full md:min-w-0 md:flex-shrink outline-4 outline-offset-[-4px] outline-transparent hover:outline hover:outline-blue-500 z-20 ${isActive ? 'bg-blue-50' : ''}`}
      onClick={onClick}
      title={`Navigate to ${tabTitle}`}
    >
      <div className="min-w-[56px] min-h-[56px] rounded-full border flex justify-center items-center bg-white relative z-20">
        <img
          src={menuIcon}
          alt={tabTitle}
          title={tabTitle}
          className="w-[32px] h-[32px] z-20"
        />
        {isActive && <CircleAnimation />}
      </div>
      <p className="text-lg font-medium">{tabTitle}</p>
    </button>
  );
};

export default NavigationTabs;
