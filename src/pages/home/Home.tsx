'use client';
import { useCountStore } from '@/stores/home';
import usePersistStore from '@/utils/usePersistStore';

const HomePage = () => {
  const store = usePersistStore(useCountStore, state => state);
  return (
    <>
      <h2 className="mt-5 text-2xl font-bold">
        Home Page
      </h2>
      <h1>
        State management Counter
      </h1>
      <span>{store?.count}</span>

      <div className="flex gap-2">
        <button onClick={store?.increase} type="button" className="rounded-md border border-white p-1.5 font-medium">
          Increase
        </button>
        <button onClick={store?.decrease} type="button" className="rounded-md border border-white p-1.5 font-medium">
          Decrease
        </button>
      </div>
    </>
  );
};

export default HomePage;
