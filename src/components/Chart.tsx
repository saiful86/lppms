import Breadcrumb from './Breadcrumb.tsx';
import ChartFour from './ChartFour.tsx';
import ChartOne from './ChartOne.tsx';
import ChartThree from './ChartThree.tsx';
import ChartTwo from './ChartTwo.tsx';

const Chart = () => {
  return (
    <>
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12">
          <ChartFour />
        </div>
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </>
  );
};

export default Chart;
