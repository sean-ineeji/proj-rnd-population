import React from 'react';

const policy_library = {
  가족: ['20xx년 서울시 출산장려정책', '19xx년 대한민국 출산장려정책'],
  환경: ['2022년 유럽 미세먼지 정책'],
};

const PolicyCheck = () => {
  return (
    <div>
      {Object.entries(policy_library).map(([issue, policies]) => (
        <div key={issue}>
          <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
            {issue}
          </label>
          {policies.map((policy) => (
            <button
              className="w-full flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              key={policy}
            >
              <p className="mx-2 text-sm font-medium">{policy}</p>
            </button>
          ))}
        </div>
      ))}
      <div style={{ textAlign: 'center' }}>
        <button>결과보기</button>
      </div>
    </div>
  );
};

export default PolicyCheck;
