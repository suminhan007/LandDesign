import React, { CSSProperties } from 'react'
import styled from 'styled-components'

export type PopProps = {
    titleData?: { title: string | React.ReactNode, value: string }[];
    data?: any[]
    style?: CSSProperties;
    className?: string;
}

const Table: React.FC<PopProps> = ({
    titleData,
    data,
    style,
    className
}) => {
    return (
        <StyledTable className={className} style={style}>
            <thead className='table-head'>
                <tr>
                    {titleData?.map((item1, index1) =>
                        <th className='table-head-item' key={index1}>{item1.title}</th>
                    )}
                </tr>
            </thead>
            <tbody className='table-body'>
                {data.map(item2 =>
                    <tr>
                        {Object.values(item2).map((item3: any) =>
                            <td>{item3}</td>
                        )}
                    </tr>
                )}
                {/* {Array.from({ length: titleData.length }).map((_itm: any, idx: number) =>
                    <div className='table-body-column'>
                        {data?.map((item2) =>
                            <td className='table-body-item'>{Object.values(item2)[idx]}</td>
                        )}
                    </div>
                )} */}
            </tbody>
        </StyledTable>
    )
}

const StyledTable = styled.table`
    border: 1px solid #eaeaea;
    border-radius: 4px;
    overflow: hidden;
    .table-head {
        display: flex;
        width: 100%;
    }
    .table-head-item {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 8px;
        padding-bottom: 8px;
        height: fit-content;
        font-size: 14px;
        line-height: 22px;
        background-color: #f9f9f9; 
        &:not(:last-child){
            border-right: 1px solid #eaeaea;;
        }
    }
    .table-body{
        display: flex;
        width: 100%;
    }
    .table-body-column {
        flex: 1;
        &:not(:first-child) {
            border-left: 1px solid #eaeaea;
        }
    }
    .table-body-item {
        padding: 8px 6px;
        box-sizing: border-box;
        color: #333;
        font-size: 14px;
        &:not(:last-child){
            border-top: 1px solid #eaeaea;
        }
    }
`

export default Table;