import React from 'react';
import { Card, Skeleton } from '@nextui-org/react';

const SingleProductLoader = () => {
  return (
    <>
      <div className="container ms-5 w-full flex items-center gap-3">
        <div>
          <Skeleton className="flex rounded-sm w-[500px] h-[300px]" />
        </div>
        <div className="w-[30%] ms-10 me-5 flex flex-col gap-2">
          <Skeleton className="h-5 w-5/5 rounded-lg my-5" />
          <Skeleton className="h-3 w-4/5 rounded-lg " />
          <Skeleton className="h-3 w-4/5 rounded-lg my-5" />
          <Skeleton className="h-10 w-5/5 rounded-lg" />
        </div>
        <Card className="w-[300px] space-y-5 p-4" radius="2xl">
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300"></div>
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">
              <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </Card>
      </div>
    </>
  );
};

export default SingleProductLoader;
