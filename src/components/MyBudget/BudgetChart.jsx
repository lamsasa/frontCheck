// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/bullet
import { ResponsiveBullet } from '@nivo/bullet'

const data = [
    {
      id: "temp.",
      ranges: [43, 39, 29, 0, 140],
      measures: [120],
      markers: [108],
      color: "#15916a" // 첫 번째 데이터의 색상을 빨간색으로 지정
    },
    {
      id: "power",
      ranges: [0.25607919477897256, 0.8701036727308917, 1.0504071124052006, 0, 2],
      measures: [0.6316347535998736, 0.8487119043343667],
      markers: [1.72581171780649],
      color: "#c90d0d"// 두 번째 데이터의 색상을 초록색으로 지정
    },
    // 나머지 데이터 객체도 동일하게 color 속성을 추가하여 색상을 지정
  ];
  const colors = data.map((d) => d.color);

const MyResponsiveBullet = () => (
    <ResponsiveBullet
    data={data}
    margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
    spacing={59}
    titleOffsetX={-40}
    titleOffsetY={-1}
    rangeBorderColor={{ from: 'color', modifiers: [] }}
    measureBorderColor="black"
    measureSize={0}
    markerSize={0}
    rangeColors= {colors}
    motionConfig={{
        mass: 1,
        tension: 170,
        friction: 26,
        clamp: false,
        precision: 0.01,
        velocity: 0
    }}
/>
);
export default MyResponsiveBullet;