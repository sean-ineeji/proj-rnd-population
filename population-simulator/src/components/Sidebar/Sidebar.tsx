import React, { useState } from 'react';
// eslint-disable-next-line
import tw from 'tailwind-styled-components';
import { AppstoreOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('건강', 'sub1', <AppstoreOutlined />, [
    getItem('만성질환', '1'),
    getItem('희귀난치성', '2'),
    getItem('중독', '3'),
    getItem('퇴행성 뇌/신경질화', '4'),
    getItem('정신질환-지적장애', '5'),
  ]),
  getItem('환경', 'sub2', <AppstoreOutlined />, [
    getItem('생활폐기물', '6'),
    getItem('실내 공기오염', '7'),
    getItem('수질 오염', '8'),
    getItem('환경호르몬', '9'),
    getItem('산업 폐기물', '10'),
    getItem('미세먼지', '11'),
    getItem('미세플라스틱', '12'),
  ]),
  getItem('문화여가', 'sub3', <AppstoreOutlined />, [
    getItem('문화소외', '13'),
    getItem('문화 - 여가공간 미비', '14'),
  ]),
  getItem('생활안전', 'sub4', <AppstoreOutlined />, [
    getItem('성범죄', '15'),
    getItem('먹거리 안전', '16'),
    getItem('사이버 범죄', '17'),
    getItem('가정 안전사고', '18'),
    getItem('화이트칼라 범죄', '19'),
    getItem('사생활 침해', '20'),
    getItem('가상증표(통화) 부작용', '21'),
  ]),
  getItem('재난재해', 'sub5', <AppstoreOutlined />, [
    getItem('기상재해', '22'),
    getItem('화학사고', '23'),
    getItem('감염병', '24'),
    getItem('방사능 오염', '25'),
    getItem('지진', '26'),
    getItem('소방안전', '27'),
  ]),
  getItem('에너지', 'sub6', <AppstoreOutlined />, [
    getItem('전력수급', '28'),
    getItem('에너지 빈곤', '29'),
  ]),
  getItem('주거교통', 'sub7', <AppstoreOutlined />, [
    getItem('불량/노후 주택', '30'),
    getItem('교통 혼잡', '31'),
    getItem('교통안전', '32'),
  ]),
  getItem('가족', 'sub8', <AppstoreOutlined />, [
    getItem('노인 소외 - 자살', '33'),
    getItem('가정폭력', '34'),
    getItem('저출산', '35'),
  ]),
  getItem('교육', 'sub9', <AppstoreOutlined />, [
    getItem('교육격차', '36'),
    getItem('학교폭력', '37'),
  ]),
  getItem('사회통합', 'sub10', <AppstoreOutlined />, [
    getItem('의료격차', '38'),
    getItem('정보격차', '39'),
    getItem('취약계층 생활불편', '40'),
    getItem('노동의 차별', '4`'),
  ]),
];

const rootSubmenuKeys = [
  'sub1',
  'sub2',
  'sub3',
  'sub4',
  'sub5',
  'sub6',
  'sub7',
  'sub8',
  'sub9',
  'sub10',
];

const Sidebar: React.FC = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            <Menu
              mode="inline"
              openKeys={openKeys}
              onOpenChange={onOpenChange}
              style={{ width: 256, height: '100%' }}
              items={items}
            />
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
