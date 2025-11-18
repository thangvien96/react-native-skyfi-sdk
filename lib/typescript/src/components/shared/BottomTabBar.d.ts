import React from 'react';
import type { Screen } from '../../navigation/SDKNavigator';
interface BottomTabBarProps {
    activeTab: Screen;
    onTabChange: (tab: Screen) => void;
}
declare const BottomTabBar: React.FC<BottomTabBarProps>;
export default BottomTabBar;
//# sourceMappingURL=BottomTabBar.d.ts.map