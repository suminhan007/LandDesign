import React from "react";
import Title from "../../packages/Title";
import Divider from "../../packages/Divider";
import Table from "../../packages/Table";

type Props = {
    zh?: string,
    en?: string,
    desc?: string,
    example?:React.ReactNode,
    props?: any[];
    types?:any[];
}
const ComponentRight: React.FC<Props> = ({
                                             zh,
    en,
    desc,
    example,
    props,
    types
}) => {
    return (
        <>
            <Title title={`${zh} ${en}`} type="h1" />
            {desc && <Title title={desc} type="p" />}
            <Divider margin={20} />
            <Title title="1. 组件预览" type="h2" className="mb-16" />
            {example}
            <Title title="2. API" type="h2" className="my-16" />
            {props && (
                <Table
                    titleData={[
                        { title: "属性", value: "props" },
                        { title: "类型", value: "type" },
                        { title: "描述", value: "desc" },
                    ]}
                    data={props}
                    style={{ width: "100%" }}
                />
            )}
            {types?.length > 0 && (
                <>
                    <Title title="3. Type" type="h2" className="my-16" />
                    {types?.map((type) => (
                        <>
                            <Title title={type.name} type="h3" className="mt-16" />
                            <Title title={type.desc} type="p" className="mt-8" />
                            <Table
                                className="width-100 mt-16"
                                titleData={[
                                    { title: "属性", value: "props" },
                                    { title: "类型", value: "type" },
                                    { title: "描述", value: "desc" },
                                ]}
                                data={type.data}
                            />
                        </>
                    ))}
                </>
            )}
        </>
    )
}

export default ComponentRight;
