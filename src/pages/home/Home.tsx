'use client';
import { SelectScrollable } from '@/components/common';
import { Button } from '@/components/ui/button';
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
        <Button onClick={store?.increase} type="button">
          Increase
        </Button>
        <Button onClick={store?.decrease} type="button">
          Decrease
        </Button>
        <SelectScrollable />
      </div>
    </>
  );
};

export default HomePage;
