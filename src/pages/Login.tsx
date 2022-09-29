import { Form, Logo } from '../components'
import { Typography, Button,  } from 'antd';
import { Input } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import Password from 'antd/lib/input/Password';

const { Title, Paragraph, Link } = Typography;

export const Login = () => {
  return (
    <section className='login-wrapper'>
        <Form >
            <Logo />
            <div className='login-title'>
                <Title  
                    style={{
                        fontWeight: '600',
                    }}
                >
                    Login
                </Title>
            </div>
            <div className='login-inputs'>
                <Input className='input' size="large" placeholder="Email" prefix={<MailOutlined />} />
                <Password className='input' size='large' placeholder='Password' prefix={<LockOutlined />}/>
            </div>
                <Button
                    size='large'
                    type="primary"
                    shape='round'
                >
                    Login
                </Button>
            
            <div className='login-link'>
                <Paragraph>
                    Don't have an account?
                    <Link href='/register'> register</Link>
                </Paragraph>
            </div>
        </Form>
    </section>
  )
}
