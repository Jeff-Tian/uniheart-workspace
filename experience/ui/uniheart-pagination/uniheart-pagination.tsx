import React, {ReactNode} from 'react';
import {Pagination} from 'antd';
import 'antd/dist/antd.css';

export type UniheartPaginationProps = {
    /**
     * a node to be rendered in the special component.
     */
    children?: ReactNode;
    skip?: number;
    limit: number;
    total?: number;
    pageSizeOptions?: number[];
    showTotal?: (total: number) => ReactNode;
    onChange?: (page: number, pageSize: number) => void;
    itemRender?: (page: number, type: 'page' | 'prev' | 'next', originalElement: React.ReactNode) => React.ReactNode;
};

export function UniheartPagination({
                                       children,
                                       skip,
                                       total,
                                       limit,
                                       pageSizeOptions,
                                       showTotal,
                                       onChange,
    itemRender
                                   }: UniheartPaginationProps) {
    return (
        <div>
            <Pagination
                total={total}
                pageSize={limit}
                current={skip / limit + 1}
                showSizeChanger
                showQuickJumper
                pageSizeOptions={pageSizeOptions ?? [limit]}
                showTotal={showTotal ?? (total => `Total ${total} items`)}
                onChange={onChange}
                itemRender={itemRender ?? (page => `${page}`)}
            />
            {children}
        </div>
    );
}
