import { usePathname } from 'next/navigation';
import Link from 'next/link';

const ShippingSteps = ({ step1, step2, step3, step4 }) => {
  const pathname = usePathname();
  const isActive = pathname;
  return (
    <>
      <div className="mt-5 mb-10">
        <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
          <li className="flex items-center dark:text-blue-500 space-x-2.5">
            {step1 ? (
              <>
                <span className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                  1
                </span>
                <span>
                  <Link
                    href="/auth"
                    className={isActive ? ' text-blue-600' : ''}
                  >
                    <h3 className="font-medium leading-tight">Sign in</h3>
                  </Link>
                  <p
                    className={isActive ? 'text-sm  text-blue-600' : 'text-sm'}
                  >
                    Step details here
                  </p>
                </span>
              </>
            ) : (
              <>
                <span className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                  1
                </span>
                <span>
                  <h3 className="font-medium leading-tight">Sign in</h3>

                  <p className="text-sm ">Step details here</p>
                </span>
              </>
            )}
          </li>
          <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
            {step2 ? (
              <>
                <span className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                  2
                </span>
                <span>
                  <Link
                    className={isActive ? ' text-blue-600' : ''}
                    href="/shipping"
                  >
                    <h3 className="font-medium leading-tight">Shipping</h3>
                  </Link>
                  <p
                    className={isActive ? 'text-sm  text-blue-600' : 'text-sm'}
                  >
                    Step details here
                  </p>
                </span>
              </>
            ) : (
              <>
                <span className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                  2
                </span>
                <span>
                  <h3 className="font-medium leading-tight">Shipping</h3>

                  <p className="text-sm">Step details here</p>
                </span>
              </>
            )}
          </li>
          <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
            {step3 ? (
              <>
                <span className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                  3
                </span>
                <span>
                  <Link
                    href="/payment"
                    className={isActive ? ' text-blue-600' : ''}
                  >
                    <h3 className="font-medium leading-tight">Payment</h3>
                  </Link>
                  <p
                    className={isActive ? 'text-sm  text-blue-600' : 'text-sm'}
                  >
                    Step details here
                  </p>
                </span>
              </>
            ) : (
              <>
                <span className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                  3
                </span>
                <span>
                  <h3 className="font-medium leading-tight">Payment</h3>

                  <p className="text-sm">Step details here</p>
                </span>
              </>
            )}
          </li>
          <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
            {step4 ? (
              <>
                <span className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                  4
                </span>
                <span>
                  <Link
                    href="/placeorder"
                    className={isActive ? ' text-blue-600' : ''}
                  >
                    <h3 className="font-medium leading-tight">Place Order</h3>
                  </Link>
                  <p
                    className={isActive ? 'text-sm  text-blue-600' : 'text-sm'}
                  >
                    Step details here
                  </p>
                </span>
              </>
            ) : (
              <>
                <span className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                  4
                </span>
                <span>
                  <h3 className="font-medium leading-tight">Place Order</h3>

                  <p className="text-sm">Step details here</p>
                </span>
              </>
            )}
          </li>
        </ol>
      </div>
    </>
  );
};

export default ShippingSteps;
