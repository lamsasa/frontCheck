// 다크모드 라이트모드 색상 저장

export const lightTheme = {
    // 메인 배경색
    background: 'linear-gradient(137deg, rgba(167, 255, 201, 0.13) 1.63%, rgba(70, 137, 175, 0.17) 98.37%, rgba(0, 255, 133, 0.51) 98.37%);',
    // 컴포넌트 배경색
    bgColor: '#FFFFFF',
    // 컴포넌트 텍스트
    textColor: '#404040',
    // 다크모드 토글
    toggleButton: {
        bgColor: '#FFFFFF',
        boxShadow: '0px 2px 7px 1px rgba(0, 0, 0, 0.1)'
    }
};

export const darkTheme = {
    // 메인 배경색
    background: '#1E1E1E',
    // 컴포넌트 배경색
    bgColor: '#2F353F',
    // 컴포넌트 텍스트
    textColor: '#FFFFFF',
    // 다크모드 버튼
    toggleButton: {
        bgColor: '#292C35',
        boxShadow: 'inset 0px 5px 11px -2px rgba(0, 0, 0, 0.2)'
    },
}