import React, { useState } from "react";



const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].name);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="w-full space-y-10">
            <div className="flex flex-wrap gap-5 mb-4 border-b border-gray-950/50">
                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        className={` w-max py-1.5 px-4 capitalize text-2xl ${
                            activeTab === tab.name
                                ? "text-primary border-b-4 border-primary z-10"
                                : null
                        }`}
                        onClick={() => handleTabClick(tab.name)}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>
            <div className="rounded-b-lg">
                {tabs.map((tab) =>
                    activeTab === tab.name ? (
                        <div key={tab.name} className="tab-content">
                            {tab.content}
                        </div>
                    ) : null
                )}
            </div>
        </div>
    );
};

export default Tabs;
