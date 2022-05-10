import React from 'react';
import {UniheartPagination} from './uniheart-pagination';

export const BasicUniheartPagination = () => {
    const [skip, setSkip] = React.useState(2 * 5);

    return (
        <UniheartPagination limit={5} total={1500} skip={skip}
                            onChange={(page, pageSize) => setSkip(pageSize * (page - 1))}
                            showTotal={total => `一共 ${total} 篇`}>hello world!</UniheartPagination>
    );
}
