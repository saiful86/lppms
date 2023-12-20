import Breadcrumb from './Breadcrumb';
import TableOne from './TableOne';
import TableThree from './TableThree';
import TableTwo from './TableTwo';

const Tables = () => {
  return (
    <>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>
    </>
  );
};

export default Tables;
