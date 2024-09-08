import React from 'react';

interface ListProps {
    children: React.ReactNode;
}

const List: React.FC<ListProps> = ({ children }) => {
    return (
        <div className="mb-3 flex items-center text-base font-medium text-body-color dark:text-dark-6">
            <svg
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-3 w-3 flex-shrink-0 text-primary"
            >
                <circle cx={6} cy={6} r={6} fill="#3056D3" />
            </svg>
            {children}
        </div>
    );
};

export default List;
