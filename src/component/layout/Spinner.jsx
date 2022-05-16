import spinner from './assets/spinner.gif';

const Spinner = () => {
  return (
    <div className="w-100 mt-20">
      <img
        width={100}
        className="mx-auto text-center"
        src={spinner}
        alt="loading..."
      />
    </div>
  );
};

export default Spinner;
