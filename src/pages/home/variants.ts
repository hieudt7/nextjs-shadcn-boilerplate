import { tv } from 'tailwind-variants';

export const formStyles = tv({
  slots: {
    swapIconWrapper: 'relative flex h-10 w-full items-center',
    swapButton: '!absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] !border !border-solid !border-gray-100 !bg-white !transition-all !duration-100 !ease-linear hover:scale-110',
    swapIcon: 'size-6 ',
    amount: 'text-sm text-[#898989]',
  },
});
