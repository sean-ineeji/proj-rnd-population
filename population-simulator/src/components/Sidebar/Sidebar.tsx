import React, { useState } from 'react';
// eslint-disable-next-line
import tw from 'tailwind-styled-components';
import { AppstoreOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import './Sidebar.css';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  disabled?: boolean,
  type?: 'group',
  className?: string,
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
    className,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    '건강',
    'sub1',
    <AppstoreOutlined />,
    [
      getItem('만성질환', '1', undefined, undefined, true),
      getItem('희귀난치성', '2', undefined, undefined, true),
      getItem('중독', '3', undefined, undefined, true),
      getItem('퇴행성 뇌/신경질화', '4', undefined, undefined, true),
      getItem('정신질환-지적장애', '5', undefined, undefined, true),
    ],
    true,
    undefined,
    'ant-menu-item-disabled',
  ),
  getItem(
    '환경',
    'sub2',
    <AppstoreOutlined />,
    [
      getItem('생활폐기물', '6', undefined, undefined, true),
      getItem('실내 공기오염', '7', undefined, undefined, true),
      getItem('수질 오염', '8', undefined, undefined, true),
      getItem('환경호르몬', '9', undefined, undefined, true),
      getItem('산업 폐기물', '10', undefined, undefined, true),
      getItem('미세먼지', '11', undefined, undefined, true),
      getItem('미세플라스틱', '12', undefined, undefined, true),
    ],
    true,
    undefined,
    'ant-menu-item-disabled',
  ),
  getItem(
    '문화여가',
    'sub3',
    <AppstoreOutlined />,
    [
      getItem('문화소외', '13', undefined, undefined, true),
      getItem('문화 - 여가공간 미비', '14', undefined, undefined, true),
    ],
    true,
    undefined,
    'ant-menu-item-disabled',
  ),
  getItem(
    '생활안전',
    'sub4',
    <AppstoreOutlined />,
    [
      getItem('성범죄', '15', undefined, undefined, true),
      getItem('먹거리 안전', '16', undefined, undefined, true),
      getItem('사이버 범죄', '17', undefined, undefined, true),
      getItem('가정 안전사고', '18', undefined, undefined, true),
      getItem('화이트칼라 범죄', '19', undefined, undefined, true),
      getItem('사생활 침해', '20', undefined, undefined, true),
      getItem('가상증표(통화) 부작용', '21', undefined, undefined, true),
    ],
    true,
    undefined,
    'ant-menu-item-disabled',
  ),
  getItem(
    '재난재해',
    'sub5',
    <AppstoreOutlined />,
    [
      getItem('기상재해', '22', undefined, undefined, true),
      getItem('화학사고', '23', undefined, undefined, true),
      getItem('감염병', '24', undefined, undefined, true),
      getItem('방사능 오염', '25', undefined, undefined, true),
      getItem('지진', '26', undefined, undefined, true),
      getItem('소방안전', '27', undefined, undefined, true),
    ],
    true,
    undefined,
    'ant-menu-item-disabled',
  ),
  getItem(
    '에너지',
    'sub6',
    <AppstoreOutlined />,
    [
      getItem('전력수급', '28', undefined, undefined, true),
      getItem('에너지 빈곤', '29', undefined, undefined, true),
    ],
    true,
    undefined,
    'ant-menu-item-disabled',
  ),
  getItem(
    '주거교통',
    'sub7',
    <AppstoreOutlined />,
    [
      getItem('불량/노후 주택', '30', undefined, undefined, true),
      getItem('교통 혼잡', '31', undefined, undefined, true),
      getItem('교통안전', '32', undefined, undefined, true),
    ],
    true,
    undefined,
    'ant-menu-item-disabled',
  ),
  getItem(
    '가족',
    'sub8',
    <AppstoreOutlined />,
    [
      getItem('노인 소외 - 자살', '33', undefined, undefined, true),
      getItem('가정폭력', '34', undefined, undefined, true),
      getItem('저출산', '35', undefined, undefined, true),
    ],
    true,
    undefined,
    'ant-menu-item-disabled',
  ),
  getItem(
    '교육',
    'sub9',
    <AppstoreOutlined />,
    [
      getItem('교육격차', '36', undefined, undefined, true),
      getItem('학교폭력', '37', undefined, undefined, true),
    ],
    true,
    undefined,
    'ant-menu-item-disabled',
  ),
  getItem(
    '사회통합',
    'sub10',
    <AppstoreOutlined />,
    [
      getItem('의료격차', '38', undefined, undefined, false),
      getItem(
        '정보격차',
        '39',
        undefined,
        undefined,
        true,
        undefined,
        'ant-menu-item-disabled',
      ),
      getItem(
        '취약계층 생활불편',
        '40',
        undefined,
        undefined,
        true,
        undefined,
        'ant-menu-item-disabled',
      ),
      getItem(
        '노동의 차별',
        '41',
        undefined,
        undefined,
        true,
        undefined,
        'ant-menu-item-disabled',
      ),
    ],
    false,
  ),
];

const rootSubmenuKeys = ['sub10'];

const Sidebar: React.FC = () => {
  const [openKeys, setOpenKeys] = useState([rootSubmenuKeys[0]]);

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{ width: 256, height: '100%' }}
      items={items}
      theme="dark"
    />
  );
};

export default Sidebar;
