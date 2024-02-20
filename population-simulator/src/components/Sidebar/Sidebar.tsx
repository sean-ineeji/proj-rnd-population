import React from 'react';
import tw from 'tailwind-styled-components';

const Sidebar = () => {
  const issues = {
    건강: [
      '만성질환',
      '희귀난치성',
      '중독',
      '퇴행성 뇌/신경질화',
      '정신질환-지적장애',
    ],
    환경: [
      '생활폐기물',
      '실내 공기오염',
      '수질 오염',
      '환경호르몬',
      '산업 폐기물',
      '미세먼지',
      '미세플라스틱',
    ],
    문화여가: ['문화소외', '문화 - 여가공간 미비'],
    생활안전: [
      '성범죄',
      '먹거리 안전',
      '사이버 범죄',
      '가정 안전사고',
      '화이트칼라 범죄',
      '사생활 침해',
      '가상증표(통화) 부작용',
    ],
    재난재해: [
      '기상재해',
      '화학사고',
      '감염병',
      '방사능 오염',
      '지진',
      '소방안전',
    ],
    에너지: ['전력수급', '에너지 빈곤'],
    주거교통: ['불량/노후 주택', '교통 혼잡', '교통안전'],
    가족: ['노인 소외 - 자살', '가정폭력', '저출산'],
    교육: ['교육격차', '학교폭력'],
    사회통합: ['의료격차', '정보격차', '취약계층 생활불편', '노동의 차별'],
  };

  return (
    <div>
      <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
        {/* <a href="#">
        <img
          className="w-auto h-7"
          src="https://merakiui.com/images/logo.svg"
          alt=""
        />
      </a> */}

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              {Object.entries(issues).map(([category, subIssues]) => (
                <div key={category}>
                  <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
                    {category}
                  </label>
                  {subIssues.map((subIssue) => (
                    <button
                      className="w-full flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                      key={subIssue}
                    >
                      <p className="mx-2 text-sm font-medium">{subIssue}</p>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
