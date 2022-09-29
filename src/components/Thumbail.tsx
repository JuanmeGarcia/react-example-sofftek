import { Avatar } from 'antd';
interface Props{
    image?: string;
}

export const Thumbail: React.FC<Props> = ({image}) => {
    return (
        <Avatar 
            src={image}  
            alt="profile picture" 
            size={50}
            shape='square'
            style={{
                borderRadius: '10px'
            }}
            
        />
    )
}
