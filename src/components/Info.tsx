import { FC } from "react"
import { InfoType } from "../types/infoType"
import { Image, Typography } from 'antd'

interface Props{
    type: InfoType,
    title: string,
    description?: string,
}

const { Paragraph } = Typography

export const Info: FC<Props> = ({type, title, description}) => {

    const renderInfoText = (
        <div className="card">
            <Paragraph>
                {title}
            </Paragraph>
            {
                type === 'password' 
                ? (<Paragraph>*********</Paragraph>)
                : (<Paragraph>{description}</Paragraph>)
            }
        </div>
    )

    const renderInfoImage = (
        <div className="card">
            <Paragraph>
                {title}
            </Paragraph>
            <Image 
                src={description}
                alt={title}
                width={50}
                style={{
                    borderRadius: '10px',
                }}
            />
        </div>
    )

    return (
        <>
            {type === 'password' || type === 'text' 
                ? renderInfoText 
                : renderInfoImage
            }
        </>
    )
}
