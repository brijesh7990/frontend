import React from 'react';

interface PricingCardProps {
    type: string;
    price: string;
    subscription: string;
    description: string;
    buttonText: string;
    active?: boolean;
    children: React.ReactNode;
}

const PricingCard: React.FC<PricingCardProps> = ({
    children,
    description,
    price,
    type,
    subscription,
    buttonText,
    active,
}) => {
    return (
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke bg-white px-8 py-10 shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]">
                <span className="mb-3 block text-lg font-semibold text-primary">
                    {type}
                </span>
                <h2 className="mb-5 text-[42px] font-bold text-dark dark:text-white">
                    {price}
                    <span className="text-base font-medium text-body-color dark:text-dark-6">
                        / {subscription}
                    </span>
                </h2>
                <p className="mb-8 border-b border-stroke pb-8 text-base text-body-color dark:border-dark-3 dark:text-dark-6">
                    {description}
                </p>
                <div className="mb-9 flex flex-col gap-[14px]">{children}</div>
                <a
                    href="/#"
                    className={` ${active
                        ? "block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
                        : "block w-full rounded-md border border-stroke bg-transparent p-3 text-center text-base font-medium text-primary transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3"
                        } `}
                >
                    {buttonText}
                </a>
                <div>
                    <span className="absolute right-0 top-7 z-[-1]">
                        <svg
                            width={77}
                            height={172}
                            viewBox="0 0 77 172"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx={86} cy={86} r={86} fill="url(#paint0_linear)" />
                            <defs>
                                <linearGradient
                                    id="paint0_linear"
                                    x1={86}
                                    y1={0}
                                    x2={86}
                                    y2={172}
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#3056D3" stopOpacity="0.09" />
                                    <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                    <span className="absolute right-4 top-4 z-[-1]">
                        <svg
                            width={41}
                            height={89}
                            viewBox="0 0 41 89"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="38.9138"
                                cy="87.4849"
                                r="1.42021"
                                transform="rotate(180 38.9138 87.4849)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="38.9138"
                                cy="74.9871"
                                r="1.42021"
                                transform="rotate(180 38.9138 74.9871)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="38.9138"
                                cy="62.4892"
                                r="1.42021"
                                transform="rotate(180 38.9138 62.4892)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="38.9138"
                                cy="38.3457"
                                r="1.42021"
                                transform="rotate(180 38.9138 38.3457)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="38.9138"
                                cy="13.634"
                                r="1.42021"
                                transform="rotate(180 38.9138 13.634)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="38.9138"
                                cy="50.2754"
                                r="1.42021"
                                transform="rotate(180 38.9138 50.2754)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="38.9138"
                                cy="26.1319"
                                r="1.42021"
                                transform="rotate(180 38.9138 26.1319)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="38.9138"
                                cy="1.42021"
                                r="1.42021"
                                transform="rotate(180 38.9138 1.42021)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="26.4157"
                                cy="87.4849"
                                r="1.42021"
                                transform="rotate(180 26.4157 87.4849)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="26.4157"
                                cy="74.9871"
                                r="1.42021"
                                transform="rotate(180 26.4157 74.9871)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="26.4157"
                                cy="62.4892"
                                r="1.42021"
                                transform="rotate(180 26.4157 62.4892)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="26.4157"
                                cy="38.3457"
                                r="1.42021"
                                transform="rotate(180 26.4157 38.3457)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="26.4157"
                                cy="13.634"
                                r="1.42021"
                                transform="rotate(180 26.4157 13.634)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="26.4157"
                                cy="50.2754"
                                r="1.42021"
                                transform="rotate(180 26.4157 50.2754)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="26.4157"
                                cy="26.1319"
                                r="1.42021"
                                transform="rotate(180 26.4157 26.1319)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="26.4157"
                                cy="1.42021"
                                r="1.42021"
                                transform="rotate(180 26.4157 1.42021)"
                                fill="#3056D3"
                            />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;
